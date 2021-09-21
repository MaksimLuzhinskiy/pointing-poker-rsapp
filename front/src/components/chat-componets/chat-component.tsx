import React from 'react';
import './chat.scss';

const ChatComponents = (props) => {
  return (
    <>
      <div className="chatComponents">
        <div className="chatText chatComponent">{props.message}</div>
        <div className="chatUser chatComponent">
          <img className="chatIcon" src="../channels4_profile.jpg" />
          <div className="chatUser__text">{props.name}</div>
          <img className="chatBan" src="../images.png" />
        </div>
      </div>
    </>
  );
};

export default ChatComponents;
