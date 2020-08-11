import React from 'react';

import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Autocomplete } from 'formik-material-ui-lab';

import { makeStyles } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';

import chaperoneOptions from './mockChaperones';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formFooter: {
    marginTop: '2em',
    textAlign: 'right',
  },
  input: {
    marginBottom: '16px',
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

const VisitorInformation = ({ form: { values } }) => {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.greeting}>Hello there!</h1>
        <h2 className={classes.subtitle}>Let's get you signed in.</h2>
      </header>
      <Field
        component={TextField}
        className={classes.input}
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        fullWidth
        required
      />
      <Field
        component={TextField}
        className={classes.input}
        name="firstName"
        label="First Name"
        variant="outlined"
        fullWidth
        required
      />
      <Field
        component={TextField}
        className={classes.input}
        name="lastName"
        label="Last Name"
        variant="outlined"
        fullWidth
        required
      />
      <Field
        component={Autocomplete}
        name="Chaperone"
        multiple
        options={chaperoneOptions}
        getOptionLabel={option => option.name}
        renderInput={params => (
          <MuiTextField
            {...params}
            label="Who you are here to see"
            variant="outlined"
            className={classes.input}
            required={!values.Chaperone}
            fullWidth
          />
        )}
      />
    </>
  );
};

export default VisitorInformation;
