import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { IValueIssueForm } from '../../../../interfaces';
import WrapForm from './../../../login-components/form/constans';
import './IssueForm.scss';
import IssueFormSelect from './issueFormSelect/IssueFormSelect';
import IssueFormTextInput from './issueFormTextInput/IssueFormTextInput';

const WrapFormIssueButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: auto;
`;

export interface IForm {
  closeForm(): void;
  addIssue(issueInfo: IValueIssueForm): void;
}

const IssueForm: FC<IForm> = ({ closeForm, addIssue }: IForm) => {
  const [valueIssueForm, setValueissueForm] = useState<IValueIssueForm>({
    title: '',
    link: '',
    priority: '',
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

  const addIssueButton = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addIssue(valueIssueForm);
    closeForm();
  };
  return (
    <WrapForm onClick={closeFormIssue}>
      <form className="issueForm" action="">
        <div className="issueForm__title">Create Issue</div>
        <FormBody>
          <IssueFormTextInput
            title="Title:"
            id="title"
            value={valueIssueForm.title}
            onChangeValue={ChangeStateForm}
          ></IssueFormTextInput>
          <IssueFormTextInput
            title="Link:"
            id="link"
            value={valueIssueForm.link}
            onChangeValue={ChangeStateForm}
          ></IssueFormTextInput>
          <IssueFormSelect
            title="Priority:"
            id="priority"
            value={valueIssueForm.priority}
            onChangeValue={ChangeStateForm}
          ></IssueFormSelect>
        </FormBody>
        <WrapFormIssueButtons>
          {/* Ожидаю сервер, потом пишу функционал */}
          <button className="confirmButton" onClick={addIssueButton}>
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

export default IssueForm;
