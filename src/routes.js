import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Login from './pages/Login/index';
import Dashboard from './pages/Dashboard/index';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      { ...rest }
      render = { props => 
        isAuthenticated() ? (
          <Component { ...props } />
        ): 
        (
          <Redirect to={ 
            { 
              pathname: "/",
              state: { from: props.location }
            }
          } />
        )
      } 
    />
  );
};

const  Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          path="/"
          exact
          component={ Login }
        />
        <PrivateRoute
          path="/dashboard"
          component = { Dashboard }
        />
        <Route 
          path="*"
          component = { () => <h1>Page not found</h1> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;