import React from 'react';
import './lobby.scss';
import LobbyMetadata from './../../components/lobby/lobby-metadata/LobbyMetadata';
import Lobbymembers from './../../components/lobby/lobby-members/Lobbymembers';

const Lobby = () => {
  return (
    <div className="lobby-page">
      <div className="lobby-content">
        <LobbyMetadata />
        <Lobbymembers />
      </div>
    </div>
  );
};

export default Lobby;
