import React from 'react';
import './lobby.scss';
import LobbyMetadata from './../../components/lobby/lobby-metadata/LobbyMetadata';

const Lobby = () => {
  return (
    <div className="lobby-page">
      <div className="lobby-content">
        <LobbyMetadata />
      </div>
    </div>
  );
};

export default Lobby;
