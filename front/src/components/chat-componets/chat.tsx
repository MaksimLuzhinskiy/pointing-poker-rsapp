import React, { useRef } from 'react';
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
  {
    id: 1,
    Name: 'Perega',
    message:
      'Я разорванный на части как на праздник с кремом торт стратегически на скилле меня обыграл минер...',
    image: 'Михайлович',
  },
];

const Chat = () => {
  const inputEl = useRef(document.createElement('input'));

  function sendMessage() {
    console.log(inputEl.current.value);
  }

  return (
    <div className="chatArea chatInvisibility">
      <div className="chatField">
        {employees.map((employee) => (
          <ChatComponents name={employee.Name} message={employee.message} />
        ))}
      </div>
      <div>
        <input ref={inputEl} className="chatInput"></input>
        <button
          onClick={() => {
            sendMessage();
          }}
        >
          отправить
        </button>
      </div>
    </div>
  );
};

export default Chat;
