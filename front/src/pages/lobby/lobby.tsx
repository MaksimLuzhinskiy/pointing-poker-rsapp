import React from 'react';
import './lobby.scss';
import LobbyMetadata from './../../components/lobby/lobby-metadata/LobbyMetadata';
import Lobbymembers from './../../components/lobby/lobby-members/Lobbymembers';
import LobbyIssue from './../../components/lobby/lobby-issue/LobbyIssue';
import LobbySetting from '../../components/lobby/lobby-setting/LobbySetting';

const Lobby = () => {
  return (
    <div className="lobby-page">
      <div className="lobby-content">
        <LobbyMetadata />
        <Lobbymembers />
        <LobbyIssue />
        <LobbySetting />
      </div>
    </div>
  );
};

export default Lobby;
