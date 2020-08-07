import React from 'react';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
  button: {
    height: '25vh',
    width: '25vh',
    minHeight: '4em',
    minWidth: '4em',
    margin: '8px',
    borderRadius: '50%',
    fontSize: '2em',
    color: 'white',
  },
  signInButton: {
    background: 'green',
  },
  signOutButton: {
    background: 'darkred',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Link className={classes.link} to="/signin">
        <Button
          className={clsx(classes.button, classes.signInButton)}
          disableRipple
        >
          Sign In
        </Button>
      </Link>

      <Link className={classes.link} to="/signout">
        <Button
          className={clsx(classes.button, classes.signOutButton)}
          disableRipple
        >
          Sign Out
        </Button>
      </Link>
    </>
  );
};

export default Home;
