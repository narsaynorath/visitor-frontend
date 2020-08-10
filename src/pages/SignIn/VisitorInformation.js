import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Autocomplete } from 'formik-material-ui-lab';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiTextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import chaperoneOptions from './mockChaperones';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '75%',
    padding: '2vh',
  },
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

const VisitorInformation = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = values => {
    console.log(values);
    history.push('/signin/picture/');
  };

  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <header className={classes.header}>
          <h1 className={classes.greeting}>Hello there!</h1>
          <h2 className={classes.subtitle}>Let's get you signed in.</h2>
        </header>

        <Formik enableReinitialize initialValues={{}} onSubmit={handleSubmit}>
          {({ isSubmitting, values }) => (
            <Form className={classes.form}>
              <Field
                component={TextField}
                className={classes.input}
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                required
              />
              <Field
                component={TextField}
                className={classes.input}
                name="firstName"
                label="First Name"
                variant="outlined"
                required
              />
              <Field
                component={TextField}
                className={classes.input}
                name="lastName"
                label="Last Name"
                variant="outlined"
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
                    required={!values.Chaperone}
                    className={classes.input}
                  />
                )}
              />
              <footer className={classes.formFooter}>
                <Link to="/">
                  <Button color="primary">Cancel</Button>
                </Link>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  Next
                </Button>
              </footer>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  );
};

export default VisitorInformation;
