import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import StepConnector from '@material-ui/core/StepConnector';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

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
    width: '20vw',
  },
  header: {
    marginTop: '15vh',
  },
  actionList: {
    textAlign: 'left',
  },
  stepper: {
    backgroundColor: 'transparent',
    height: '200px',
  },
  stepperLine: {
    visibility: 'hidden',
  },
}));

const SidePanel = ({ activeStep }) => {
  const classes = useStyles();
  const steps = [
    'Visitor Information',
    'Picture Time',
    'Capture',
    'Visitor Pass',
  ];

  return (
    <div className={classes.sidePanel}>
      <img className={classes.logo} src={logo} alt="Security Compass" />
      <h1 className={classes.header}>Sign In</h1>
      <Stepper
        connector={<StepConnector className={classes.stepperLine} />}
        className={classes.stepper}
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default SidePanel;
