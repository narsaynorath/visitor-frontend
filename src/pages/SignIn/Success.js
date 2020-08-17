import React from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import SidePanel from '../../components/SidePanel';

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
    width: '85%',
  },
  greeting: {
    color: theme.palette.text.header,
    fontSize: '10vh',
    fontWeight: 'normal',
  },
  avatar: {
    borderRadius: '50%',
    height: '10vh',
    margin: '8px',
  },
  subtitle: {
    color: theme.palette.text.subtitle,
    fontSize: '3vh',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  footer: {
    textAlign: 'right',
  },
}));

const Success = ({ steps }) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const names = location.state.chaperones.map(c => c.real_name).join(', ');
  const avatars = location.state.chaperones.map(c => c.avatar_192);

  return (
    <div className={classes.container}>
      <SidePanel header="SignIn" steps={steps} activeStep={steps.length} />
      <Paper className={classes.paper} elevation={0}>
        <header>
          <h1 className={classes.greeting}>You're Signed In!</h1>
          {avatars.map(a => (
            <img className={classes.avatar} src={a} alt="Avatar" />
          ))}
          <h2 className={classes.subtitle} style={{ marginBottom: 0 }}>
            We have notified <strong>{names}</strong> that you're here.
          </h2>
          <h2 className={classes.subtitle} style={{ marginTop: 0 }}>
            They will be with you shortly.
          </h2>
          <h2 className={classes.subtitle}>Have a great day!</h2>
        </header>
        <footer className={classes.footer}>
          <Button
            onClick={() => history.push('/')}
            color="primary"
            variant="contained"
          >
            Done
          </Button>
        </footer>
      </Paper>
    </div>
  );
};

export default Success;
