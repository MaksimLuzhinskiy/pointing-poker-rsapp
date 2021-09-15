import React, { FC } from 'react';
import './InputCopy.scss';

export interface ICopyInput {
  value: string;
}

const InputCopy: FC<ICopyInput> = ({ value }: ICopyInput) => {
  return (
    <div className="textInput">
      <label className="textInput__label">
        <input
          className="lobbyCoppy"
          required
          type="text"
          disabled
          value={value}
          name=""
        />
      </label>
    </div>
  );
};

export default InputCopy;
