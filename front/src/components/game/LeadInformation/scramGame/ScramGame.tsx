import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Role from '../../../../enum';
import { IRedux, IRoomInfo, IUser } from '../../../../interfaces';
import Card from '../../../lobby/card/Card';
import './ScramGame.scss';

const ScramGame = () => {
  const info = useSelector<IRedux, IRoomInfo>((state) => state.roomInfo);
  const [userDealer, setUserDealer] = useState<IUser>({
    id: 0,
    name: '',
    surname: '',
    role: '',
    jobPosition: '',
    image: '',
  });

  const checkDealer = () => {
    if (localStorage.getItem(info.code)) {
      info.users.map((user) => {
        if (user.role === Role.dealer) {
          setUserDealer(user);
        }
      });
    }
  };

  const [isYou, setIsYou] = useState(false);

  const checkisYou = () => {
    const infoLocal: IUser = JSON.parse(localStorage.getItem(info.code) || '{}');
    const leader: IUser | undefined = info.users.find((user) => {
      return user.role === Role.dealer;
    });

    if (leader)
      if (
        leader.name === infoLocal.name &&
        leader.surname === infoLocal.surname &&
        leader.jobPosition === infoLocal.jobPosition
      ) {
        setIsYou(true);
      }
  };

  useEffect(() => {
    checkDealer();
    checkisYou();
  }, [info]);

  return (
    <div className="game-scram">
      <div className="title-dealer">Scram master(static)</div>
      <Card
        name={userDealer.name}
        surname={userDealer.surname}
        role={userDealer.role}
        jobPosition={userDealer.jobPosition}
        image={userDealer.image}
        isYou={isYou}
      ></Card>
    </div>
  );
};

export default ScramGame;
