import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Role from '../../../enum';
import { IRedux, IRoomInfo, IUser } from '../../../interfaces';
import { IUserMutate } from '../../lobby/lobby-members/Lobbymembers';
import './ListMember.scss';
import Member from './member/Member';

const ListMember = () => {
  const members = useSelector<IRedux, IRoomInfo>((state) => state.roomInfo);
  const [member, setMember] = useState<IUserMutate[]>([]);

  const trueMembers = () => {
    const infoLocal: IUser = JSON.parse(localStorage.getItem(members.code) || '{}');
    const players = members.users.filter((element) => {
      return element.role !== Role.dealer;
    });
    const playersReturn: IUserMutate[] = players.map((player) => {
      return player.name === infoLocal.name &&
        player.surname === infoLocal.surname &&
        player.jobPosition === infoLocal.jobPosition
        ? { ...player, isYou: true }
        : { ...player, isYou: false };
    });
    setMember(playersReturn);
  };

  useEffect(() => {
    trueMembers();
  }, [members]);

  return (
    <div className="list-member-game">
      <div className="static-title">
        <div className="static-title__score">Score</div>
        <div className="static-title__players">Players</div>
      </div>
      {member.map((el) => {
        return <Member key={el.id} member={el}></Member>;
      })}
    </div>
  );
};

export default ListMember;
