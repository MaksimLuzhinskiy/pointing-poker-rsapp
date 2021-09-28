import React, { FC, useState } from 'react';
import './deckCreateForm.scss';
import WrapForm from './../../../login-components/form/constans';
import { IIssues } from './../../../../interfaces';
import WrapFormIssueButtons, { FormBody } from '../../../../constStyledComponent';
import DeckCreateInput from '../deckCreateInput/DeckCreateInput';

export interface IForm {
  closeForm(): void;
  addIssue?(issueInfo: IIssues): void;
}
export interface IDeck {
  name: string;
  value: string;
}

const DeckCreateForm: FC<IForm> = ({ closeForm, addIssue }: IForm) => {
  const [valueIssueForm, setValueissueForm] = useState<IDeck>({
    name: 'My custom deck',
    value: '1, 2, 3, 5, 8, 13',
  });

  const ChangeStateForm = (title: string, value: string) => {
    const copy = Object.assign({}, valueIssueForm);
    copy[title] = value;
    setValueissueForm(copy);
  };

  const closeFormIssue = (e: React.FormEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };
  const closeFormIssueButton = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    closeForm();
  };

  const addCardDeck = (e: React.FormEvent<HTMLButtonElement>) => {};
  return (
    <WrapForm onClick={closeFormIssue}>
      <form className="deckAdd" action="">
        <div className="deckAdd__title">Create deck</div>
        <FormBody>
          <DeckCreateInput
            title="Deck name:"
            id="name"
            value={valueIssueForm.name}
            onChangeValue={ChangeStateForm}
          ></DeckCreateInput>
          <DeckCreateInput
            title="Deck value:"
            id="value"
            value={valueIssueForm.value}
            onChangeValue={ChangeStateForm}
          ></DeckCreateInput>
        </FormBody>
        <WrapFormIssueButtons>
          <button className="confirmButton" onClick={addCardDeck}>
            Yes
          </button>
          <button className="closeButton" onClick={closeFormIssueButton}>
            No
          </button>
        </WrapFormIssueButtons>
      </form>
    </WrapForm>
  );
};

export default DeckCreateForm;
