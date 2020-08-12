import React from 'react';
import clsx from 'clsx';

import { Switch, Redirect, Route, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';

import Adam from './components/Adam';

import background from './assets/background.png';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    height: '100%',
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    zIndex: '-1',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    transition: theme.transitions.create(['width'], {
      duration: theme.transitions.duration.complex,
    }),
  },
  backgroundCropped: {
    width: '30vw',
    background: theme.palette.primary.main,
    transition: theme.transitions.create(['width'], {
      duration: theme.transitions.duration.complex,
    }),
  },
  main: {
    display: 'flex',
  },
}));

const App = () => {
  const classes = useStyles();
  const location = useLocation();

  console.log(location);
  return (
    <div className={classes.app}>
      <div
        className={clsx(classes.background, {
          [classes.backgroundCropped]: location.pathname !== '/',
        })}
      >
        <Adam />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <div style={{ display: 'flex', marginLeft: '30vw', width: '70vw' }}>
            <SignIn />
          </div>
        </Route>
        <Route path="/signout">
          <div style={{ display: 'flex', marginLeft: '30vw', width: '70vw' }}>
            <SignOut />
          </div>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
