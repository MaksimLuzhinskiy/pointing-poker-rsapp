import React from 'react';
import Chat from '../../components/chat-componets/chat';
import './lobby.scss';

const Lobby = () => {
  return (
    <div className="lobby-page">
      <div className="lobby-content"></div>
      <Chat />
    </div>
  );
};

export default Lobby;
