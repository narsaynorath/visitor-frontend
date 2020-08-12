import React from 'react';

import { useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import SidePanel from '../components/SidePanel';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70vw',
    height: 'fit-content',
    minHeight: '100vh',
  },
  paper: {
    width: 'fit-content',
  },
  header: {},
  greeting: {
    color: theme.palette.text.header,
    fontSize: '10vh',
    fontWeight: 'normal',
    marginBottom: '10vh',
  },
  subtitle: {
    color: theme.palette.text.subtitle,
    fontSize: '3vh',
    fontWeight: 'normal',
    textAlign: 'left',
  },
}));

const SignInSuccess = () => {
  const classes = useStyles();
  const location = useLocation();

  const names = location.state.chaperone.map(c => c.name).join(', ');

  return (
    <div className={classes.container}>
      <SidePanel
        header="SignIn"
        steps={[
          'Visitor Information',
          'Picture Time',
          'Capture',
          'Visitor Pass',
        ]}
        activeStep={4}
      />
      <Paper className={classes.paper} elevation={0}>
        <header className={classes.header}>
          <h1 className={classes.greeting}>You're Signed In!</h1>
          <h2 className={classes.subtitle} style={{ marginBottom: 0 }}>
            We have notified <strong>{names}</strong> that you're here.
          </h2>
          <h2 className={classes.subtitle} style={{ marginTop: 0 }}>
            They will be with you shortly.
          </h2>
          <h2 className={classes.subtitle}>Have a great day!</h2>
        </header>
      </Paper>
    </div>
  );
};

export default SignInSuccess;
