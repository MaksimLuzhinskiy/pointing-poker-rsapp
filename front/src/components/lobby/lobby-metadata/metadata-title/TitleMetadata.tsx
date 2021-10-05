import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRedux, IRoomInfo } from '../../../../interfaces';
import './TitleMetadata.scss';

const TitleMetadata = () => {
  const info = useSelector<IRedux, IRoomInfo>((state) => state.roomInfo);

  const [roomName, setRoomName] = useState(`Room`);

  const changeRoomName = (e: React.FormEvent<HTMLInputElement>) => {
    setRoomName(e.currentTarget.value);
  };

  const mouseEnter = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.disabled = false;
  };

  const mouseOut = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.disabled = true;
    e.currentTarget.blur();
  };
  return (
    <div className="title">
      <input
        className="title__input"
        type="text"
        name=""
        onMouseOver={mouseEnter}
        onMouseOut={mouseOut}
        disabled={true}
        onChange={changeRoomName}
        id=""
        value={roomName}
      />
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default TitleMetadata;
