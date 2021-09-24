import React, { FC, useState } from 'react';
import './IssueButton.scss';

export interface IButtonIssue {
  openForm(): void;
}

const IssueButton: FC<IButtonIssue> = ({ openForm }: IButtonIssue) => {
  return (
    <div className="addIssue" onClick={openForm}>
      <div className="addIssue__title">Create new {'Issue'}</div>
      <svg
        width="32"
        height="32"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M56 32H32V56H24V32H0V24H24V0H32V24H56V32Z" fill="#636363" />
      </svg>
    </div>
  );
};

export default IssueButton;
