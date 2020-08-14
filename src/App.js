import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import {
  Switch,
  Redirect,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';

import Adam from './components/Adam';
import SidePanel from './components/SidePanel';

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

function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search.slice(1));
  console.log(window.location);
  console.log(window.location.search);
  console.log('ughhhh', urlParams);
  console.log(param);
  return urlParams.get(param);
}

const App = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const [code, setCode] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // grab code/token step
    const blah = getParam('access_token');
    if (!blah) {
      window.location.href =
        'https://visitors.auth.us-east-2.amazoncognito.com/login?client_id=2nk1shldaugv5agice7ham165j&response_type=code&scope=email+openid&redirect_uri=http://localhost:3000';
    }

    setToken(blah);
  }, []);

  console.log(token);
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
  ) : null;
};

export default App;
