import React from 'react';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    height: '200px',
    width: '200px',
    margin: '8px',
    borderRadius: '50%',
  },
  signInButton: {
    background: 'green',
  },
  signOutButton: {
    background: 'red',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Link to="/signin">
        <Button className={clsx(classes.button, classes.signInButton)}>
          Sign In
        </Button>
      </Link>

      <Link to="/signout">
        <Button className={clsx(classes.button, classes.signOutButton)}>
          Sign Out
        </Button>
      </Link>
    </>
  );
};

export default Home;
