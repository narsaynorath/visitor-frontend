import React, { useState } from 'react';

import { Link, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import { useFormInput } from '../../utils/form';

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

const VisitorInformation = ({ history }) => {
  const classes = useStyles();
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const [chaperones, setChaperones] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(chaperones);
    history.push('/signin/picture/');
  };

  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <header className={classes.header}>
          <h1 className={classes.greeting}>Hello there!</h1>
          <h2 className={classes.subtitle}>Let's get you signed in.</h2>
        </header>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            label="First Name"
            autoFocus
            required
            variant="outlined"
            {...firstName}
          />
          <TextField
            className={classes.input}
            label="Last Name"
            required
            variant="outlined"
            {...lastName}
          />
          <Autocomplete
            className={classes.input}
            multiple
            options={chaperoneOptions}
            getOptionLabel={option => option.name}
            renderInput={params => (
              <TextField
                {...params}
                label="Who you are here to see"
                variant="outlined"
              />
            )}
            onChange={(e, val) => setChaperones(val)}
            required
          />
          <footer className={classes.formFooter}>
            <Link to="/">
              <Button color="primary">Cancel</Button>
            </Link>
            <Button type="submit" color="primary" variant="contained">
              Next
            </Button>
          </footer>
        </form>
      </Paper>
    </>
  );
};

export default withRouter(VisitorInformation);
