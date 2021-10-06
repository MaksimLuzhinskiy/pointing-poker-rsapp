import React, { FC } from 'react';
import './Card.scss';

export interface ICardType {
  value: string;
  shortName: string;
}

const Card: FC<ICardType> = ({ value, shortName }) => {
  return (
    <div className="card-lastblock">
      <div className="number">{value}</div>
      <div className="name">{shortName}</div>
      <div className="number number--180">{value}</div>
    </div>
  );
};

export default Card;
