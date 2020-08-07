import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    marginBottom: '2em',
  },
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(40px + 2vmin)',
    marginTop: '10vh',
    marginBottom: '10vh',
    width: '100vw',
  },
  content: {
    width: '80%',
    maxWidth: '600px',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.app}>
        <header className={classes.appHeader}>
          Welcome to Security Compass
        </header>

        <content className={classes.content}>
          <Switch>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signout">
              <SignOut />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </content>
      </div>
    </Router>
  );
};

export default App;
