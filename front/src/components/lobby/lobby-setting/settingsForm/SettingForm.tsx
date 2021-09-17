import React, { useState } from 'react';
import FormSwitcher from './formSwitcher/FormSwitcher';

export interface ISettings {
  masterAsPlayer: boolean;
  changingEndCard: boolean;
  isTimer: boolean;
  scoreType: string;
  scoreTypeShort: string;
}

const SettingForm = () => {
  const [settings, setSettings] = useState<ISettings>({
    masterAsPlayer: false,
    changingEndCard: false,
    isTimer: false,
    scoreType: '',
    scoreTypeShort: '',
  });

  const changeSetting = (name: string, title: string | boolean) => {
    const copy = Object.assign({}, settings);
    copy[name] = title;
    setSettings(copy);
  };
  return (
    <form action="">
      <FormSwitcher
        name="masterAsPlayer"
        valueSwitch={settings.masterAsPlayer}
        title="title"
        changeValue={changeSetting}
      ></FormSwitcher>
    </form>
  );
};

export default SettingForm;
