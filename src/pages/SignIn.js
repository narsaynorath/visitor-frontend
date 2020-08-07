import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import chaperones from '../mockChaperones';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '1em',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2em',
  },
  input: {
    marginBottom: '16px',
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API request to get list data
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />;
  }

  return (
    <>
      <Paper className={classes.paper}>
        <form className={classes.form}>
          <TextField className={classes.input} label="First Name" />
          <TextField className={classes.input} label="Last Name" />
          <Autocomplete
            className={classes.input}
            options={chaperones}
            getOptionLabel={option => option.name}
            renderInput={params => (
              <TextField {...params} label="Chaperone" variant="outlined" />
            )}
          />
        </form>
        <Link to="/">Back</Link>
      </Paper>
    </>
  );
};

export default SignIn;
