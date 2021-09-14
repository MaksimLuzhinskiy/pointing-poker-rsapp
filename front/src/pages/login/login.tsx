import React, { useEffect } from 'react';
import './login.scss';
import LogoLogin from '../../components/login-components/logo-login/LogoLogin';
import CreateRoom from './../../components/login-components/create-room/createRoom';
import ConnectLobby from './../../components/login-components/connect-lobby/ConnectLobby';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/login-components/form/Form';
import { openForm } from '../../store/slice';
import { IRedux } from '../../interfaces';

const Login = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector<IRedux>((state) => state.login);

  return (
    <div className="login-page">
      <div className="login-content">
        <LogoLogin />
        <CreateRoom />
        <ConnectLobby />
        {isOpen && <Form />}
      </div>
    </div>
  );
};

export default Login;
