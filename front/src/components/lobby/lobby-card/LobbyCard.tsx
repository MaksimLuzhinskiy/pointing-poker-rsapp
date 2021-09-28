import React, { useState } from 'react';
import DeckCreateForm from './deckCreateForm/deckCreateForm';
import './LobbyCard.scss';
import SelectorVotingSystem from './selectorVotingSystem/SelectorVotingSystem';

const LobbyCard = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const changeStatusForm = () => {
    setIsOpenCreate(!isOpenCreate);
  };

  return (
    <div>
      <div className="card-title">Card:</div>
      <div className="card-lobby">
        <div className="card-select">
          <SelectorVotingSystem
            createDeck={changeStatusForm}
            title="Voting system"
          />
        </div>
        <div className="cards"></div>

        {/*selector card*/}
        {/*cards*/}
      </div>
      {isOpenCreate && (
        <DeckCreateForm closeForm={changeStatusForm}></DeckCreateForm>
      )}
    </div>
  );
};

export default LobbyCard;
