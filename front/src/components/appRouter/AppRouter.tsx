import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IRedux } from '../../interfaces';
import { privateRoutes, RouteName } from '../../router';
import { publicRoutes } from './../../router/index';

const AppRouter = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector<IRedux>((state) => state.auth);
  console.log(isAuth);
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
