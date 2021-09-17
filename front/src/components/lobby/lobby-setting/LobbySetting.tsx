import React from 'react';
import './LobbySetting.scss';
import SettingForm from './settingsForm/SettingForm';

const LobbySetting = () => {
  return (
    <div>
      <div className="setting-title">Game settings:</div>
      <SettingForm></SettingForm>
    </div>
  );
};

export default LobbySetting;
