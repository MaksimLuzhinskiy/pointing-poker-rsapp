import React from 'react';
import './Game.scss';
import LeadInformation from './LeadInformation/LeadInformation';
import ListMember from './listMember/ListMember';

const Game = () => {
  return (
    <div className="game-page">
      <div className="game-page__info">
        <LeadInformation />
      </div>
      <ListMember></ListMember>
    </div>
  );
};

export default Game;
