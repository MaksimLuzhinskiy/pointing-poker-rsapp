import React, { FC } from 'react';
import Switcher from '../../../../login-components/form/switcher/Switcher';
import './FormSwitcher.scss';

export interface ISwitcher {
  name: string;
  title: string;
  valueSwitch: boolean;
  changeValue(name: string, title: boolean | string);
}

const FormSwitcher: FC<ISwitcher> = ({
  name,
  title,
  valueSwitch,
  changeValue,
}: ISwitcher) => {
  const setValue = (value: boolean) => {
    changeValue(name, value);
  };

  return (
    <div className="form-switcher">
      <div className="form-switcher__title">{title}</div>
      <Switcher value={valueSwitch} setValue={setValue}></Switcher>
    </div>
  );
};

export default FormSwitcher;
