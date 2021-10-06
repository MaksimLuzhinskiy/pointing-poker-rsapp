import React, { FC, useState } from 'react';
import './deckCreateForm.scss';
import WrapForm from './../../../login-components/form/constans';
import { IIssues } from './../../../../interfaces';
import WrapFormIssueButtons, { FormBody } from '../../../../constStyledComponent';
import DeckCreateInput from '../deckCreateInput/DeckCreateInput';

export interface IForm {
  closeForm(): void;
  add(title: string, name: string, value: Array<string | number>): void;
}
export interface IDeck {
  name: string;
  short: string;
  value: string;
}

const DeckCreateForm: FC<IForm> = ({ closeForm, add }: IForm) => {
  const [valueCardForm, setValueCardForm] = useState<IDeck>({
    name: 'My custom deck',
    short: 'MD',
    value: '1, 2, 3, 5, 8, 13',
  });

  const ChangeStateForm = (title: string, value: string) => {
    const copy = Object.assign({}, valueCardForm);
    copy[title] = value;
    setValueCardForm(copy);
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

  const addDeck = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    add(valueCardForm.name, valueCardForm.short, valueCardForm.value.split(','));
    closeForm();
  };
  return (
    <WrapForm onClick={closeFormIssue}>
      <form className="deckAdd" action="">
        <div className="deckAdd__title">Create deck</div>
        <FormBody>
          <DeckCreateInput
            title="Deck name:"
            id="name"
            value={valueCardForm.name}
            onChangeValue={ChangeStateForm}
          ></DeckCreateInput>
          <DeckCreateInput
            title="Deck shortname:"
            id="short"
            value={valueCardForm.short}
            onChangeValue={ChangeStateForm}
          ></DeckCreateInput>
          <DeckCreateInput
            title="Deck value:"
            id="value"
            value={valueCardForm.value}
            onChangeValue={ChangeStateForm}
          ></DeckCreateInput>
        </FormBody>
        <WrapFormIssueButtons>
          <button className="confirmButton" onClick={addDeck}>
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
