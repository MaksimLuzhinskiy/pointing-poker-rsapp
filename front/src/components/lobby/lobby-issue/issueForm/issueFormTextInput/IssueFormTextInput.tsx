import React, { FC } from 'react';
import './IssueFormtextInput.scss';

export interface ItextInput {
  title: string;
  value: string;
  id: string;
  onChangeValue(title, value): void;
}

const IssueFormTextInput: FC<ItextInput> = ({
  title,
  value,
  id,
  onChangeValue,
}: ItextInput) => {
  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeValue(e.currentTarget.id, e.currentTarget.value);
  };

  return (
    <div className="issueFormTextInput">
      <label htmlFor={id}>{title}</label>
      <input id={id} value={value} onChange={changeValue} type="text" />
    </div>
  );
};

export default IssueFormTextInput;
