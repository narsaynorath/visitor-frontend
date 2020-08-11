import React from 'react';
import { useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import adamSmile from '../assets/adam-smile.png';
import adamWave from '../assets/adam-wave.png';

const useStyles = makeStyles(theme => ({
  adamContainer: {
    maxWidth: '30vw',
  },
  adam: {
    width: '40vw',
    position: 'fixed',
    bottom: '-85px',
    transform: 'translate(-50%, 6%)',
  },
}));

const Adam = () => {
  const classes = useStyles();
  const location = useLocation();

  const adamImg = location.pathname === '/signin/' ? adamWave : adamSmile;

  return (
    <div className={classes.adamContainer}>
      <img className={classes.adam} src={adamImg} alt="" />
    </div>
  );
};

export default Adam;
