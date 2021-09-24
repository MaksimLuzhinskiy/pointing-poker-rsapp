import React, { FC } from 'react';
import './FormText.scss';

export interface IInputSetting {
  name: string;
  title: string;
  value: string;
  changeValue(name: string, title: boolean | string);
}

const FormText: FC<IInputSetting> = ({
  name,
  title,
  value,
  changeValue,
}: IInputSetting) => {
  const setValue = (e: React.FormEvent<HTMLInputElement>) => {
    changeValue(name, e.currentTarget.value);
  };
  return (
    <div className="form-inputText">
      <div className="form-inputText__label">{title}</div>
      <input
        className="form-inputText__input"
        value={value}
        onChange={setValue}
      ></input>
    </div>
  );
};

export default FormText;
