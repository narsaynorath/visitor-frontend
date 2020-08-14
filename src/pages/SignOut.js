import React from 'react';

import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { MultiStepForm, MultiStepFormStep } from '../components/MultiStepForm';

const useStyles = makeStyles(theme => ({
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
  header: {
    marginBottom: '10vh',
  },
  greeting: {
    color: theme.palette.text.header,
    fontSize: '10vh',
    fontWeight: 'normal',
    marginBottom: 0,
  },
  subtitle: {
    color: theme.palette.text.subtitle,
    fontSize: '3vh',
    fontWeight: 'normal',
  },
}));

const SignOut = () => {
  const classes = useStyles();

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={0}>
        <header className={classes.header}>
          <h1 className={classes.greeting}>Hello again!</h1>
          <h2 className={classes.subtitle}>Let's get you signed out.</h2>
        </header>
        <MultiStepForm
          initialValues={{ email: '' }}
          onSubmit={handleSubmit}
          sidePanelHeader="Sign Out"
          stepLabels={['Visitor Information']}
        >
          <MultiStepFormStep>
            <Field
              component={TextField}
              className={classes.input}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              autoComplete="off"
              fullWidth
              required
            />
          </MultiStepFormStep>
        </MultiStepForm>
      </Paper>
    </div>
  );
};

export default SignOut;
