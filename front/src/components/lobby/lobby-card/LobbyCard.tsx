import React, { useState } from 'react';
import { IDeck } from '../../../interfaces';
import Card from './card(Cards-lastBlock)/Card';
import DeckCreateForm from './deckCreateForm/deckCreateForm';
import './LobbyCard.scss';
import SelectorVotingSystem from './selectorVotingSystem/SelectorVotingSystem';

const LobbyCard = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const changeStatusForm = () => {
    setIsOpenCreate(!isOpenCreate);
  };

  const bibaBoba: IDeck[] = [
    {
      id: 1,
      short: 'FB',
      name: 'Fibonacci',
      value: [0, 1, 3, 5, 8, 13, 21, 32, 55, 89],
    },
    { id: 2, short: 'P2', name: 'Powers of 2', value: [0, 1, 2, 4, 8, 16, 32, 64] },
    {
      id: 3,
      name: 'T-shirts',
      short: 'TS',
      value: ['xxx', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
    },
  ];
  const [deck, setDeck] = useState<IDeck[]>(bibaBoba);
  const [bibaBobaSelect, setBibaBobaSelect] = useState<IDeck>(bibaBoba[0]);
  const bibaChange = (biba: IDeck) => {
    setBibaBobaSelect(biba);
  };
  const addDeck = (title: string, short: string, value: Array<string | number>) => {
    const copyDeck = [...deck];
    copyDeck.push({ id: 5, name: title, short, value });
    setDeck(copyDeck);
  };

  return (
    <div>
      <div className="card-title">Card:</div>
      <div className="card-lobby">
        <div className="card-select">
          <SelectorVotingSystem
            changeSelectCardDeck={bibaChange}
            selectCardDeck={bibaBobaSelect}
            deck={deck}
            createDeck={changeStatusForm}
            title="Voting system"
          />
        </div>
        <div className="cards">
          {bibaBobaSelect.value.map((cardValue, index) => {
            return (
              <Card
                value={String(cardValue)}
                key={index}
                shortName={bibaBobaSelect.short}
              />
            );
          })}
        </div>
      </div>
      {isOpenCreate && (
        <DeckCreateForm add={addDeck} closeForm={changeStatusForm}></DeckCreateForm>
      )}
    </div>
  );
};

export default LobbyCard;
