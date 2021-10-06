import React from 'react';
import './NameGame.scss';

const NameGame = () => {
  return (
    <div className="title">
      <input
        className="title__input game"
        type="text"
        name=""
        disabled={true}
        id=""
        value="Room"
      />
    </div>
  );
};

export default NameGame;
