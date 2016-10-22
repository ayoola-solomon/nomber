import { Route } from 'react-router';
import React from 'react';
import MainLayout from './components/main';
import App from './components/App';
import Signup from './components/Signup';
import Signin from './components/Signin';

export default function configRoutes() {
  return (
    <Route component={MainLayout}>
      <Route path="sign-up" component={Signup} />
      <Route path="sign-in" component={Signin} />
      <Route path="/" component={App} />
    </Route>
  );
}
