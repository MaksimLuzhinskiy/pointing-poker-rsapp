import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../card/Card';
import './Lobbymembers.scss';
import FormKickmembers from './members-formKick/FormKickmembers';
import { useSelector } from 'react-redux';
import { IRedux, IRoomInfo, IUser } from '../../../interfaces';
import Role from '../../../enum';

export interface IUserMutate {
  id: number;
  name: string;
  surname: string;
  role: string;
  jobPosition: string;
  image: string;
  isYou: boolean;
}
const WrapMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Lobbymembers = () => {
  const members = useSelector<IRedux, IRoomInfo>((state) => state.roomInfo);
  const [isKicked, setIsKicked] = useState(false);
  const [nameKickPlayer, setNameKickPlayer] = useState('');
  const [member, setMember] = useState<IUserMutate[]>([]);
  const openFormKicked = (name: string) => {
    setIsKicked(!isKicked);
    setNameKickPlayer(name);
  };

  const closeFormKicked = () => {
    setIsKicked(!isKicked);
    setNameKickPlayer('');
  };

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
    <div>
      <div className="members-title">Members:</div>
      <WrapMembers>
        {member.map((user) => {
          return (
            <Card
              key={user.id}
              onKick={openFormKicked}
              name={user.name}
              surname={user.surname}
              role={user.role}
              jobPosition={user.jobPosition}
              image={user.image}
              isYou={user.isYou}
            ></Card>
          );
        })}
      </WrapMembers>
      {isKicked && (
        <FormKickmembers name={nameKickPlayer} closeKick={closeFormKicked} />
      )}
    </div>
  );
};

export default Lobbymembers;
