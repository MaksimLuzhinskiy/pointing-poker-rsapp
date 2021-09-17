import React, { FC } from 'react';
import './Switcher.scss';

export interface ISwitch {
  setValue(value: boolean): void;
  value: boolean;
}

const Switcher: FC<ISwitch> = ({ setValue, value }: ISwitch) => {
  const onChangeSwither = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked);
  };

  return (
    <label className="switch">
      <input onChange={onChangeSwither} checked={value} type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default Switcher;
