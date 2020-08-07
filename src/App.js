import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';

import background from './assets/background.png';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.app}>
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
      </div>
    </Router>
  );
};

export default App;
