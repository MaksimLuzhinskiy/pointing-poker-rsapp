import React from 'react';
import styled from 'styled-components';
import './Card.scss';

const Wrap = styled.div`
  display: flex;
  height: 100%;
`;
const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
`;

const Card = () => {
  return (
    <div className="card">
      <Wrap>
        <div className="card__avatar">
          <img src="../logo.png" alt="" />
        </div>
        <WrapInfo>
          <div className="card__ityou">IT'S YOU</div>
          <div className="card__name">Rick Giligan</div>
          <div className="card__jobPosition">lead software engeneer</div>
        </WrapInfo>
      </Wrap>
    </div>
  );
};

export default Card;
