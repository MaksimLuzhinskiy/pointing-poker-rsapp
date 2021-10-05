import Chat from '../../components/chat-componets/chat';
import React, { useEffect, useState } from 'react';
import './lobby.scss';

import LobbyMetadata from './../../components/lobby/lobby-metadata/LobbyMetadata';
import Lobbymembers from './../../components/lobby/lobby-members/Lobbymembers';
import LobbyIssue from './../../components/lobby/lobby-issue/LobbyIssue';
import LobbySetting from '../../components/lobby/lobby-setting/LobbySetting';
import socket, { isConnect } from '../../socket';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, fetchAllInfo } from '../../store/roomInfo';
import { IUser } from '../../interfaces';
import LobbyCard from '../../components/lobby/lobby-card/LobbyCard';
import Role from '../../enum';

type QuizParams = {
  idlobby: string;
};

export interface IUsers {
  id: number;
  roomId: number;
  name: string;
  surname: string;
  jobPosition: string;
  image: string;
  role: string;
}

export interface IUserJson {
  name: string;
  surname: string;
  jobPosition: string;
  image: string;
  role: string;
  idSocket: string;
}

export interface IReconnect {
  socketId: string;
  roomCode: string;
}

const Lobby = () => {
  const dispatch = useDispatch();
  const { idlobby } = useParams<QuizParams>();
  const role: IUser = JSON.parse(localStorage.getItem(idlobby) || '{}');
  const [isOpenSocket, setIsOpenSocket] = useState(isConnect);

  const isReload = () => {
    const promise = new Promise((resolve, reject) => {
      setInterval(() => {
        if (isConnect === true) {
          resolve(isConnect);
          clearInterval();
        }
      }, 100);
    }).then((res) => {
      const userInfo: IUserJson = JSON.parse(localStorage.getItem(idlobby) || '');
      const isId = userInfo.idSocket === socket.id;
      if (isId) {
        console.log('Join room');
        socket.on('join-room', (user: IUser) => {
          dispatch(addUser(user));
        });
      } else {
        console.log('reconnect');
        const infoReconnect: IReconnect = {
          socketId: localStorage.getItem('socketId') || '{}',
          roomCode: idlobby,
        };
        socket.emit('reconnect', infoReconnect);
      }
      return setIsOpenSocket(isConnect);
    });
  };
  console.log(isOpenSocket);

  const beforeUnload = () => {
    const informationAboutUser: IUserJson = JSON.parse(
      localStorage.getItem(idlobby) || '{}'
    );
    informationAboutUser.idSocket = socket.id;
    localStorage.setItem(idlobby, JSON.stringify(informationAboutUser));
  };

  useEffect(() => {
    isReload();
    window.addEventListener('beforeunload', beforeUnload);
    return () => {
      socket.off('join-room');
      socket.off('reconnect');
      window.removeEventListener('beforeunload', beforeUnload);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchAllInfo(idlobby));
  }, [idlobby]);

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

export default Lobby;
