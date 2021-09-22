/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './lobby.scss';
import axios from 'axios';
import LobbyMetadata from './../../components/lobby/lobby-metadata/LobbyMetadata';
import Lobbymembers from './../../components/lobby/lobby-members/Lobbymembers';
import LobbyIssue from './../../components/lobby/lobby-issue/LobbyIssue';
import LobbySetting from '../../components/lobby/lobby-setting/LobbySetting';
import socket from '../../socket';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllInfo } from '../../store/roomInfo';
import { IRedux, IRoomInfo } from '../../interfaces';

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

socket.on('join-room', (res: any) => {
  console.log(res);
});

const Lobby = () => {
  const dispatch = useDispatch();
  const { idlobby } = useParams<QuizParams>();
  // const info = useSelector<IRedux, IRoomInfo>((state) => state.roomInfo);

  useEffect(() => {
    dispatch(fetchAllInfo(idlobby));
  }, [idlobby]);

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
