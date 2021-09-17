import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../card/Card';
import './Lobbymembers.scss';
import FormKickmembers from './members-formKick/FormKickmembers';

const WrapMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Lobbymembers = () => {
  const members = [1, 2, 3, 4, 5, 6, 7];
  const [isKicked, setIsKicked] = useState(false);
  const [nameKickPlayer, setNameKickPlayer] = useState('');

  const openFormKicked = (name: string) => {
    setIsKicked(!isKicked);
    setNameKickPlayer(name);
  };

  const closeFormKicked = () => {
    setIsKicked(!isKicked);
    setNameKickPlayer('');
  };

  return (
    <div>
      <div className="members-title">Members:</div>
      <WrapMembers>
        {members.map((element, index) => {
          return (
            <Card key={index} onKick={openFormKicked} name="Rick Giligan"></Card>
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
