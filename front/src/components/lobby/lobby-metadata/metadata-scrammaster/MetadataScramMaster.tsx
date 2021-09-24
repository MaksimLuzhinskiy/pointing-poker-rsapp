/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Card from '../../card/Card';
import { useSelector } from 'react-redux';
import './MetadataScramMaster.scss';
import { IRedux, IRoomInfo, IUser } from '../../../../interfaces';
import Role from '../../../../enum';

const MetadataScramMaster = () => {
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
    <div>
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

export default MetadataScramMaster;
