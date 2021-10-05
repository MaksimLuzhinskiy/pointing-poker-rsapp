/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { IRedux } from '../../interfaces';
import ErrorPage from '../../pages/404/ErrorPage';
import Lobby from '../../pages/lobby/lobby';
import Login from '../../pages/login/login';
import socket from '../../socket';

const AppRouter = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector<IRedux>((state) => state.auth);

  socket.on('create-room', (res: { code: string }) => {
    history.push(`/lobby/${res.code}`);
  });
  return (
    <>
      {/* {isAuth ? (
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
      )} */}
      <Switch>
        <Route key="2" path="/login" component={Login}></Route>
        <Route key="1" path="/lobby/:idlobby" exact={true} component={Lobby}></Route>
        <Route key="3" path="/" exact={true}>
          <Redirect to="/login" />
        </Route>
        <Route key="4" path="/404" component={ErrorPage}></Route>
      </Switch>
    </>
  );
};

export default AppRouter;
