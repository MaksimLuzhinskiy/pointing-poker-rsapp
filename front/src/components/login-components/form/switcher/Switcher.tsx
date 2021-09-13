import React from 'react';
import './Switcher.scss';

const Switcher = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default Switcher;
