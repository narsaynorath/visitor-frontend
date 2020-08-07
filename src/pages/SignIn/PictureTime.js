import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '75%',
    padding: '2vh',
  },
  footer: {
    marginTop: '2em',
    textAlign: 'right',
  },
  header: {
    marginBottom: '10vh',
  },
  greeting: {
    color: '#f15f24',
    fontSize: '10vh',
    fontWeight: 'normal',
    marginBottom: 0,
  },
  subtitle: {
    color: 'grey',
    fontSize: '3vh',
    fontWeight: 'normal',
  },
}));

const PictureTime = ({ history }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={0}>
      <header className={classes.header}>
        <h1 className={classes.greeting}>Picture Time!</h1>
        <h2 className={classes.subtitle}>
          Let's take a picture for your visitor pass.
        </h2>
        <h2 className={classes.subtitle}>
          The camera is on the lefthand side.
        </h2>
        <h2 className={classes.subtitle}>Ready?</h2>
      </header>
      <footer className={classes.footer}>
        <Link to="/signin/">
          <Button color="primary">Back</Button>
        </Link>
        <Button
          color="primary"
          variant="contained"
          onClick={() => history.push('/signin/picture/capture')}
        >
          Next
        </Button>
      </footer>
    </Paper>
  );
};

export default withRouter(PictureTime);
