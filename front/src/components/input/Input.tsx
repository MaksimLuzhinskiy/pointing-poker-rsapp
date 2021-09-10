import React, { FC } from 'react';

export interface IForm {
  valueInput: string;
  handleChange(event: React.FormEvent<HTMLInputElement>): void;
}

const Input: FC<IForm> = ({ valueInput, handleChange }: IForm) => {
  return (
    <input
      required
      className="form-input"
      id="outlined-basic"
      value={valueInput}
      onChange={handleChange}
    />
  );
};

export default Input;
