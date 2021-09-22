import React, { FC, useState } from 'react';
import styled from 'styled-components';
import './Card.scss';

export interface ICard {
  onKick?(name): void;
  name?: string;
  surname?: string;
  role?: string;
  jobPosition?: string;
  image?: string;
  isYou?: boolean;
}

const Wrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 145px;
`;

const Card: FC<ICard> = ({
  name,
  surname,
  role,
  jobPosition,
  image,
  isYou,
  onKick,
}: ICard) => {
  const clickKick = () => {
    if (onKick) onKick(name);
  };

  return (
    <div className="card">
      <Wrap>
        <div className="card__avatar">
          <img src={image} alt="" />
        </div>
        <WrapInfo>
          {isYou && <div className="card__ityou">IT'S YOU</div>}
          <div className="card__name">
            {name} {surname}
          </div>
          <div className="card__jobPosition">{jobPosition}</div>
        </WrapInfo>
        {!isYou && (
          <svg
            className="card__kick"
            width="36"
            onClick={clickKick}
            height="36"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0001 0.666664C11.1201 0.666664 0.666748 11.12 0.666748 24C0.666748 36.88 11.1201 47.3333 24.0001 47.3333C36.8801 47.3333 47.3334 36.88 47.3334 24C47.3334 11.12 36.8801 0.666664 24.0001 0.666664ZM5.33342 24C5.33342 13.6867 13.6867 5.33333 24.0001 5.33333C28.3167 5.33333 32.2834 6.80333 35.4334 9.27666L9.27675 35.4333C6.80342 32.2833 5.33342 28.3167 5.33342 24ZM24.0001 42.6667C19.6834 42.6667 15.7167 41.1967 12.5667 38.7233L38.7234 12.5667C41.1968 15.7167 42.6668 19.6833 42.6668 24C42.6668 34.3133 34.3134 42.6667 24.0001 42.6667Z"
              fill="black"
            />
          </svg>
        )}
      </Wrap>
    </div>
  );
};

export default Card;
