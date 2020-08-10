import React from 'react';
import clsx from 'clsx';

import { Switch, Redirect, Route, useLocation } from 'react-router-dom';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';

import SidePanel from './components/SidePanel';

import background from './assets/background.png';

import { scTheme } from './theme';

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
    <ThemeProvider theme={scTheme}>
      <div className={classes.app}>
        <div
          className={clsx(classes.background, {
            [classes.backgroundCropped]: location.pathname !== '/',
          })}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <div style={{ display: 'flex', marginLeft: '30vw', width: '70vw' }}>
              <SidePanel />
              <SignIn />
            </div>
          </Route>
          <Route path="/signout">
            <div style={{ display: 'flex', marginLeft: '30vw', width: '70vw' }}>
              <SidePanel />
              <SignOut />
            </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
