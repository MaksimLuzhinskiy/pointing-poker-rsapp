/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import './lobby.scss';
import socket, { isConnect } from '../../socket';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchAllInfo } from '../../store/roomInfo';
import { IReconnect, IRedux, IRoomInfo, IUser, IUserJson } from '../../interfaces';
import Room from '../../components/room/Room';
import Game from '../../components/game/Game';

type QuizParams = {
  idlobby: string;
};

const Lobby = () => {
  const dispatch = useDispatch();
  const { idlobby } = useParams<QuizParams>();
  const roomInfo = useSelector<IRedux, IRoomInfo>((state) => state.roomInfo);
  const [isOpenSocket, setIsOpenSocket] = useState(isConnect);
  const isGame = useSelector<IRedux, boolean>((state) => state.isgame);
  const isLoggin = () => {
    if (roomInfo.status === 400) {
      window.location.assign(`http://${window.location.host}/404`);
    }
  };

  const isReload = () => {
    const promise = new Promise((resolve) => {
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

  const beforeUnload = () => {
    // Информаци о юзере, для реконекта
    const informationAboutUser: IUserJson = JSON.parse(
      localStorage.getItem(idlobby) || '{}'
    );
    informationAboutUser.idSocket = socket.id;
    localStorage.setItem(idlobby, JSON.stringify(informationAboutUser));

    //Сохранение логина
    const isAuth = useSelector<IRedux, boolean>((state) => state.auth);
    localStorage.setItem('auth', String(isAuth));
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

  useEffect(() => {
    isLoggin();
  }, [roomInfo]);

  return <>{!isGame ? <Room idlobby={idlobby}></Room> : <Game></Game>}</>;
};

export default Lobby;
