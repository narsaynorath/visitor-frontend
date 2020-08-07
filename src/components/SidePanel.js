import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import logo from '../assets/securitycompass-logo-light.png';

const useStyles = makeStyles(theme => ({
  sidePanel: {
    position: 'fixed',
    display: 'inline-block',
    left: 0,
    top: 0,
    width: '30vw',
    height: '100vh',
    background: 'rgba(125, 125, 125, 0.01)',
  },
  logo: {
    position: 'fixed',
    top: '20px',
    left: '20px',
    width: '20vh',
  },
  header: {
    marginTop: '15vh',
  },
  actionList: {
    textAlign: 'left',
  },
}));

const SidePanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidePanel}>
      <img className={classes.logo} src={logo} alt="Security Compass" />
      <h1 className={classes.header}>Sign In</h1>
      <ol className={classes.actionList}>
        <li>Visitor Information</li>
        <li>Picture Time</li>
        <li>Visitor Pass</li>
      </ol>
    </div>
  );
};

export default SidePanel;
