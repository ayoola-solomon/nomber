import { Route } from 'react-router';
import React from 'react';
import MainLayout from './components/main';
import App from './components/App';
import Signup from './components/Signup';
import Signin from './components/Signin';
import SessionActions from './actions/sessions';

export default function configRoutes(store) {
  const ensureAuthenticated = (nextState, replace, cb) => {
    const { dispatch } = store;
    const { session } = store.getState();
    const { currentUser } = session;

    if (!currentUser && localStorage.getItem('token')) {
      dispatch(SessionActions.currentUser());
    } else {
      replace('/sign-in');
    }

    cb();
  };

  const checkAuth = (nextState, replace, cb) => {
    const { session } = store.getState();
    const { currentUser } = session;

    if (!currentUser && localStorage.getItem('token')) {
      replace('/');
    }

    cb();
  };

  return (
    <Route component={MainLayout}>
      <Route path="sign-up" component={Signup} onEnter={checkAuth} />
      <Route path="sign-in" component={Signin} onEnter={checkAuth} />
      <Route path="/" component={App} onEnter={ensureAuthenticated} />
    </Route>
  );
}
