import React from 'react';
import { toggleChat } from '../chat-componets/toggleChat';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__logo">
          <img src="../logo.png" alt="" />
        </div>
        <div className="header__chat">
          <img
            onClick={() => {
              toggleChat();
            }}
            src="../Vector.png"
            alt=""
          />
        </div>
      </div>
      <div className="header__bottom"></div>
    </div>
  );
};

export default Header;
