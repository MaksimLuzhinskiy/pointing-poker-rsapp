import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../input/Input';
import OpenFormButton from '../styledButton/OpenFormButton';

const Wrap = styled.div`
  display: flex;
  justify-content: space-beetwen;
`;

const SmallForm = () => {
  const [url, setUrl] = useState('');
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUrl(event.currentTarget.value);
  };

  return (
    <form className="connectToLobby__form" action="">
      <Wrap>
        <Input valueInput={url} handleChange={handleChange} />
        <OpenFormButton link={url} type="connect" title="Connect"></OpenFormButton>
      </Wrap>
    </form>
  );
};

export default SmallForm;
