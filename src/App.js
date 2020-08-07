import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    marginBottom: '32px',
    width: '100vw',
    height: '20vh',
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

        <content>
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
