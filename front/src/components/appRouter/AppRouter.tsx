/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { IRedux } from '../../interfaces';
import { privateRoutes, RouteName } from '../../router';
import socket from '../../socket';
import { publicRoutes } from './../../router/index';

const AppRouter = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector<IRedux>((state) => state.auth);

  socket.on('create-room', (res: { code: string }) => {
    history.push(`/lobby/${res.code}`);
  });
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
