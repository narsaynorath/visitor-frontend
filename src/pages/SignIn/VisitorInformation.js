import React, { useEffect, useState } from 'react';

import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Autocomplete } from 'formik-material-ui-lab';

import { makeStyles } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import getCognitoUserSession from '../../services/awsAuthService';
import signInService from '../../services/signInService';

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
  const [chaperones, setChaperones] = useState([]);
  const loading = chaperones.length === 0;

  useEffect(() => {
    async function _useEffect() {
      const cognitoUserSession = await getCognitoUserSession();
      const apiToken = cognitoUserSession.accessToken.jwtToken;
      const chaperones = await signInService.getChaperones(apiToken);
      if (chaperones.successful) {
        setChaperones(chaperones.data);
      }
    }
    _useEffect();
  }, []);

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.greeting}>Hello there!</h1>
        <h2 className={classes.subtitle}>Let's get you signed in.</h2>
      </header>
      <Field
        component={TextField}
        className={classes.input}
        name="firstName"
        label="First Name"
        variant="outlined"
        autoComplete="off"
        fullWidth
        required
      />
      <Field
        component={TextField}
        className={classes.input}
        name="lastName"
        label="Last Name"
        variant="outlined"
        autoComplete="off"
        fullWidth
        required
      />
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
      <Field
        component={Autocomplete}
        name="Chaperone"
        multiple
        filterSelectedOptions
        options={chaperones}
        loading={loading}
        getOptionLabel={option => option.real_name}
        renderInput={params => (
          <MuiTextField
            {...params}
            label="Who you are here to see"
            variant="outlined"
            className={classes.input}
            required={!values.Chaperone}
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </>
  );
};

export default VisitorInformation;
