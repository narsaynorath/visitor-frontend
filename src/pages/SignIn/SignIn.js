import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Capture from './Capture';
import PictureTime from './PictureTime';
import { Field } from 'formik';

import {
  MultiStepForm,
  MultiStepFormStep,
} from '../../components/MultiStepForm';
import VisitorInformation from './VisitorInformation';

import signInService from '../../services/signInService';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API request to get list data
    setTimeout(() => setLoading(false), 500);
  }, []);

  const handleSubmit = values => {
    console.log(values);
    async function _handleSubmit() {
      const response = await signInService.checkInVisitor(
        values,
        token.access_token
      );
      if (response.successful) {
        history.push({
          pathname: '/success',
          state: { chaperone: values.Chaperone },
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
          stepLabels={[
            'Visitor Information',
            'Picture Time',
            'Capture',
            'Visitor Pass',
          ]}
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
  return <div className={classes.container}>{content}</div>;
};

export default SignIn;
