import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import { useFormInput } from '../utils/form';

import chaperoneOptions from '../mockChaperones';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '1em',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formFooter: {
    marginTop: '2em',
  },
  input: {
    marginBottom: '16px',
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const [chaperones, setChaperones] = useState([]);

  useEffect(() => {
    // Mock API request to get list data
    setTimeout(() => setLoading(false), 500);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(chaperones);
  };

  if (loading) {
    return <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />;
  }

  return (
    <>
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            label="First Name"
            autoFocus
            required
            {...firstName}
          />
          <TextField
            className={classes.input}
            label="Last Name"
            required
            {...lastName}
          />
          <Autocomplete
            className={classes.input}
            multiple
            options={chaperoneOptions}
            getOptionLabel={option => option.name}
            renderInput={params => (
              <TextField {...params} label="Chaperone" variant="outlined" />
            )}
            onChange={(e, val) => setChaperones(val)}
            required
          />
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </form>
        <footer className={classes.formFooter}>
          <Link to="/">Back</Link>
        </footer>
      </Paper>
    </>
  );
};

export default SignIn;
