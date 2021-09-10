import React from 'react';
import './login.scss';
import LogoLogin from '../../components/login-components/logo-login/LogoLogin';
import CreateRoom from './../../components/login-components/create-room/createRoom';
import ConnectLobby from './../../components/login-components/connect-lobby/ConnectLobby';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-content">
        <LogoLogin />
        <CreateRoom />
        <ConnectLobby />
      </div>
    </div>
  );
};

export default Login;
