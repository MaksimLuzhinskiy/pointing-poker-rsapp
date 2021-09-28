import Chat from '../../components/chat-componets/chat';
import React, { useEffect, useState } from 'react';
import './lobby.scss';
import axios from 'axios';
import LobbyMetadata from './../../components/lobby/lobby-metadata/LobbyMetadata';
import Lobbymembers from './../../components/lobby/lobby-members/Lobbymembers';
import LobbyIssue from './../../components/lobby/lobby-issue/LobbyIssue';
import LobbySetting from '../../components/lobby/lobby-setting/LobbySetting';
import socket from '../../socket';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchAllInfo } from '../../store/roomInfo';
import { IRedux, IRoomInfo, IUser } from '../../interfaces';
import LobbyCard from '../../components/lobby/lobby-card/LobbyCard';

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

const Lobby = () => {
  const dispatch = useDispatch();
  const { idlobby } = useParams<QuizParams>();
  useEffect(() => {
    socket.on('join-room', (res: IUser) => {
      dispatch(addUser(res));
    });
    return () => {
      socket.off('join-room');
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
        <LobbyIssue />
        <LobbySetting />
        <LobbyCard />
      </div>
    </div>
  );
};

export default Lobby;
