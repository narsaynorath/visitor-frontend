import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Switch, Redirect, Route, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignInSuccess from './pages/SignInSuccess';
import SignOut from './pages/SignOut';

import Adam from './components/Adam';

import background from './assets/background.png';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import awsService from './services/awsAuthService';

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

function getCode() {
  const urlParams = new URLSearchParams(window.location.search.slice(1));
  return urlParams.get('code');
}

const redirectURL = `https://visitors.auth.us-east-2.amazoncognito.com/login?client_id=2nk1shldaugv5agice7ham165j&response_type=code&scope=email+openid&redirect_uri=${
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.REACT_APP_URL
}`;

const App = () => {
  const classes = useStyles();
  const location = useLocation();

  const [token, setToken] = useState('');

  useEffect(() => {
    // grab code/token step
    const code = getCode();
    if (!code && !token) {
      window.location.href = redirectURL;
    }

    async function asyncUseEffect() {
      const response = await awsService.getTokens(code);
      if (response.successful) {
        setToken(response.data);
      } else {
        window.location.href = redirectURL;
      }
    }
    asyncUseEffect();
    // eslint-disable-next-line
  }, []);

  return token ? (
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
            <SignIn token={token} />
          </div>
        </Route>
        <Route path="/success">
          <div style={{ display: 'flex', marginLeft: '30vw', width: '70vw' }}>
            <SignInSuccess />
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
  ) : null;
};

export default App;
