import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../../../../../store/isGame';

const ButtonStart = () => {
  const dispatch = useDispatch();
  // Старт игры, пока 0 идей.
  const click = () => {
    dispatch(startGame());
  };

  return (
    <button onClick={click} className="openFormButton">
      Start Game(static)
    </button>
  );
};

export default ButtonStart;
