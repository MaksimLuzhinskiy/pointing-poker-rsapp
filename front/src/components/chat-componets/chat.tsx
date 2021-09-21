import React from 'react';
import ChatComponents from './chat-component';
import './chat.scss';

const employees = [
  {
    id: 1,
    Name: 'Perega',
    message:
      'Я разорванный на части как на праздник с кремом торт стратегически на скилле меня обыграл минер...',
    image: 'Михайлович',
  },
];

const Chat = () => {
  function toggleChat() {
    alert(1);
  }

  return (
    <div className="chatField chatInvisibility">
      {employees.map((employee) => (
        <ChatComponents name={employee.Name} message={employee.message} />
      ))}
    </div>
  );
};

export default Chat;
