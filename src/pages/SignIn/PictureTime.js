import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

const PictureTime = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1 className={classes.greeting}>Picture Time!</h1>
      <h2 className={classes.subtitle}>
        Let's take a picture for your visitor pass.
      </h2>
      <h2 className={classes.subtitle}>The camera is on the lefthand side.</h2>
      <h2 className={classes.subtitle}>Ready?</h2>
    </header>
  );
};

export default PictureTime;
