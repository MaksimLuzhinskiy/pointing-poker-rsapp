import React, { FC } from 'react';
import { IInput } from '../../../../interfaces';
import './inputText.scss';

const InputText: FC<IInput> = ({ value, id, onChange, title }: IInput) => {
  const change = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.id, e.currentTarget.value);
  };

  return (
    <div className="textInput">
      <label className="textInput__label">
        <div>{title}</div>

        <input
          required
          type="text"
          onChange={change}
          value={value}
          name=""
          id={id}
        />
      </label>
    </div>
  );
};

export default InputText;
