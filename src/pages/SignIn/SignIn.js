import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { Field } from 'formik';

import Capture from './Capture';
import PictureTime from './PictureTime';
import Success from './Success';
import VisitorInformation from './VisitorInformation';

import {
  MultiStepForm,
  MultiStepFormStep,
} from '../../components/MultiStepForm';

import signInService from '../../services/signInService';
import uploadPic from '../../services/s3Service';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70vw',
    height: 'fit-content',
    minHeight: '100vh',
  },
  paper: {
    width: '75%',
    padding: '2vh',
  },
});

const SignIn = ({ token }) => {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { path } = useRouteMatch();

  const steps = ['Visitor Information', 'Picture Time', 'Capture'];

  const handleSubmit = values => {
    async function _handleSubmit() {
      const date = new Date();
      const s3ImageLocation = await uploadPic(
        values.picture,
        date.toISOString()
      );

      if (values.chaperones.find(opt => opt.real_name === 'Select All')) {
        values.chaperones = JSON.parse(process.env.REACT_APP_ALL_RECIPIENTS);
      }

      const response = await signInService.checkInVisitor(
        { ...values, image_url: s3ImageLocation },
        token.access_token
      );
      if (response.successful) {
        history.push({
          pathname: `${path}/success`,
          state: { chaperones: values.chaperones },
        });
      }
    }
    _handleSubmit();
    setLoading(true);
  };
  let content = (
    <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
  );
  if (!loading) {
    content = (
      <Paper className={classes.paper} elevation={0}>
        <MultiStepForm
          initialValues={{}}
          onSubmit={handleSubmit}
          sidePanelHeader="Sign In"
          stepLabels={steps}
        >
          <MultiStepFormStep>
            <Field component={VisitorInformation} token={token} />
          </MultiStepFormStep>
          <MultiStepFormStep>
            <Field component={PictureTime} />
          </MultiStepFormStep>
          <MultiStepFormStep>
            <Field component={Capture} required />
          </MultiStepFormStep>
        </MultiStepForm>
      </Paper>
    );
  }

  return (
    <div className={classes.container}>
      <Switch>
        <Route exact path={path}>
          {content}
        </Route>
        <Route path={`${path}/success`}>
          <Success steps={steps} />
        </Route>
      </Switch>
    </div>
  );
};

export default SignIn;
