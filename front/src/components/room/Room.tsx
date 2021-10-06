import React, { FC } from 'react';
import Role from '../../enum';
import { IUser } from '../../interfaces';
import Chat from '../chat-componets/chat';
import LobbyCard from '../lobby/lobby-card/LobbyCard';
import LobbyIssue from '../lobby/lobby-issue/LobbyIssue';
import Lobbymembers from '../lobby/lobby-members/Lobbymembers';
import LobbyMetadata from '../lobby/lobby-metadata/LobbyMetadata';
import LobbySetting from '../lobby/lobby-setting/LobbySetting';

export interface IRoom {
  idlobby: string;
}

const Room: FC<IRoom> = ({ idlobby }) => {
  const role: IUser = JSON.parse(localStorage.getItem(idlobby) || '{}');
  return (
    <div className="lobby-page">
      <Chat />
      <div className="lobby-content">
        <LobbyMetadata />
        <Lobbymembers />
        {role.role === Role.player || role.role === Role.spectator ? (
          ''
        ) : (
          <>
            <LobbyIssue />
            <LobbySetting />
            <LobbyCard />
          </>
        )}
      </div>
    </div>
  );
};

export default Room;
