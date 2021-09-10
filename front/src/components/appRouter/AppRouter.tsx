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
          {privateRoutes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            ></Route>
          ))}
          {/* <Redirect to={RouteName.LOGIN} /> */}
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
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
