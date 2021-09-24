import React, { useState } from 'react';
import FormSwitcher from './formSwitcher/FormSwitcher';
import FormText from './formText/FormText';
import './SettingForm.scss';

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
    <form className="setting-form" action="">
      <FormSwitcher
        name="masterAsPlayer"
        valueSwitch={settings.masterAsPlayer}
        title="Scram master as player:"
        changeValue={changeSetting}
      ></FormSwitcher>
      <FormSwitcher
        name="changingEndCard"
        valueSwitch={settings.changingEndCard}
        title="Changing card in round end:"
        changeValue={changeSetting}
      ></FormSwitcher>
      <FormSwitcher
        name="isTimer"
        valueSwitch={settings.isTimer}
        title="Is timer needed:"
        changeValue={changeSetting}
      ></FormSwitcher>
      <FormText
        name="scoreType"
        changeValue={changeSetting}
        title="Score type:"
        value={settings.scoreType}
      ></FormText>
      <FormText
        name="scoreTypeShort"
        changeValue={changeSetting}
        title="Score type (Short):"
        value={settings.scoreTypeShort}
      ></FormText>
    </form>
  );
};

export default SettingForm;
