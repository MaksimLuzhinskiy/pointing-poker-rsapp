import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, RouteName } from '../../router';
import { publicRoutes } from './../../router/index';

const AppRouter = () => {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Switch>
          {privateRoutes.map((route) => (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              component={route.component}
            ></Route>
          ))}
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((route) => (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              component={route.component}
            ></Route>
          ))}
          <Redirect to={RouteName.LOGIN} />
        </Switch>
      )}
    </>
  );
};

export default AppRouter;
