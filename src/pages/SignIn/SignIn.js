import React, { useState, useEffect } from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import { makeStyles } from '@material-ui/core/styles';

import VisitorInformation from './VisitorInformation';

import PictureTime from './PictureTime';

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
}));

const SignIn = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API request to get list data
    setTimeout(() => setLoading(false), 500);
  }, []);

  let content;
  if (loading) {
    content = <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />;
  } else {
    content = (
      <Switch>
        <Route exact path={path}>
          <VisitorInformation />
        </Route>
        <Route exact path={`${path}/picture`}>
          <PictureTime />
        </Route>
        <Route exact path={`${path}/picture/capture`}>
          <div style={{ background: 'yellow', color: 'black' }}>SAY CHEEEZ</div>
        </Route>
        <Route exact path={`${path}/pass`}>
          <div>Pass Time</div>
        </Route>
      </Switch>
    );
  }

  return <div className={classes.container}>{content}</div>;
};

export default SignIn;
