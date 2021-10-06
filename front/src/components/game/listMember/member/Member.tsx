import React, { FC } from 'react';
import { IUserMutate } from '../../../lobby/lobby-members/Lobbymembers';
import SmallCard from './smallCard';
import './Member.scss';

export interface IMember {
  member: IUserMutate;
}

const Member: FC<IMember> = ({ member }) => {
  return (
    <div className="member">
      <div className="result">In progress</div>
      <SmallCard
        name={member.name}
        surname={member.surname}
        role={member.role}
        jobPosition={member.jobPosition}
        image={member.image}
        isYou={member.isYou}
      ></SmallCard>
    </div>
  );
};

export default Member;
