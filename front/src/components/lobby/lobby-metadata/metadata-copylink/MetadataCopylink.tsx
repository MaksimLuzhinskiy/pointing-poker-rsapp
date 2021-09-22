import React, { useState } from 'react';
import styled from 'styled-components';
import InputCopy from './inputCopy/InputCopy';
import { useSelector } from 'react-redux';
import './MetadataCopyLink.scss';
import { IRedux, IRoomInfo } from '../../../../interfaces';

const WrapCopyLink = styled.div`
  display: flex;
`;

const MetadataCopylink = () => {
  // Пока статика
  const info = useSelector<IRedux, IRoomInfo>((state) => state.roomInfo);

  const [tooltipTitle, setTooltipTitle] = useState('Copy to clipboard');

  const clickButton = () => {
    window.navigator.clipboard.writeText(info.code);
    setTooltipTitle('Copied');
  };

  const onmouseoutButton = () => {
    setTooltipTitle('Copy to clipboard');
  };

  return (
    <div>
      <div className="linkLobby-title">Link lobby(static)</div>
      <WrapCopyLink>
        <InputCopy value={String(info.code)} />
        <div className="tooltip">
          <button
            className="openFormButton"
            onMouseOut={onmouseoutButton}
            onClick={clickButton}
          >
            <span className="tooltiptext" id="myTooltip">
              {tooltipTitle}
            </span>
            Copy(Static)
          </button>
        </div>
      </WrapCopyLink>
    </div>
  );
};

export default MetadataCopylink;
