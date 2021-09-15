import React from 'react';
import styled from 'styled-components';
import ButtonStart from './buttonStart/ButtonStart';
import ButtonCloseLobby from './buttonClose/ButtonCloseLobby';

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const MetadataButtons = () => {
  return (
    <ButtonsWrap>
      <ButtonStart />
      <ButtonCloseLobby />
    </ButtonsWrap>
  );
};

export default MetadataButtons;
