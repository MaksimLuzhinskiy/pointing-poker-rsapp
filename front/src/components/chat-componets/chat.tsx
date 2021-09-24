import React, { useEffect, useRef, useState } from 'react';
import ChatComponents from './chat-component';
import './chat.scss';

// const employees = [
//   {
//     id: 1,
//     Name: 'Perega',
//     message:
//       'Я разорванный на части как на праздник с кремом торт стратегически на скилле меня обыграл минер...',
//     image: 'Михайлович',
//   },
//   {
//     id: 1,
//     Name: 'Perega',
//     message:
//       'Я разорванный на части как на праздник с кремом торт стратегически на скилле меня обыграл минер...',
//     image: 'Михайлович',
//   },
// ];

const Chat = () => {
  const inputEl = useRef(document.createElement('input'));
  const chat = useRef(document.createElement('div'));

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Perega',
      message:
        'Я разорванный на части как на праздник с кремом торт стратегически на скилле меня обыграл минер...',
      image: '../9jXFIYtcQe0.jpg',
    },
    {
      id: 2,
      name: 'Максиm',
      message: 'Я ne лох',
      image: '../images.png',
    },
  ]);

  function sendMessage() {
    console.log(inputEl.current.value);
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        name: 'Yan',
        message: inputEl.current.value,
        image: '../channels4_profile.jpg',
      },
    ]);
    inputEl.current.value = '';
  }

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    chat.current.scrollTop = chat.current.scrollHeight;
  });

  return (
    <div className="chatArea chatInvisibility">
      <div ref={chat} className="chatField">
        {messages.map((mesage) => (
          <ChatComponents
            key={mesage.id}
            name={mesage.name}
            message={mesage.message}
            image={mesage.image}
          />
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
