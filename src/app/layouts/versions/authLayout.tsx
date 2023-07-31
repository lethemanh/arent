import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Login } from 'app/pages/Login';
import { getUserInfo } from 'utils/storage';

const Pages = {
  Login: Login,
};

const AuthLayout = () => {
  return (
    <Switch>
      <Route
        path="/"
        render={() => (
          <Redirect
            exact={true}
            from="/"
            to={{
              pathname: isEmpty(getUserInfo()) ? '/login' : '/top-page',
            }}
          />
        )}
        exact={true}
      />
      <Route path="/login" component={Pages.Login} exact={true} />
    </Switch>
  );
};

export default AuthLayout;
