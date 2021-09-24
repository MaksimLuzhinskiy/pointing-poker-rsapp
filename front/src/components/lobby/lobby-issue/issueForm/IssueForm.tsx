import axios from 'axios';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IRedux, IRoomInfo, IValueIssueForm } from '../../../../interfaces';
import WrapForm from './../../../login-components/form/constans';
import './IssueForm.scss';
import IssueFormSelect from './issueFormSelect/IssueFormSelect';
import IssueFormTextInput from './issueFormTextInput/IssueFormTextInput';
import { IIssues } from './../../../../interfaces';
import WrapFormIssueButtons, { FormBody } from '../../../../constStyledComponent';

export interface IForm {
  closeForm(): void;
  addIssue(issueInfo: IIssues): void;
}

const IssueForm: FC<IForm> = ({ closeForm, addIssue }: IForm) => {
  const infoRoom = useSelector<IRedux, IRoomInfo>((state) => state.roomInfo);
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
    axios
      .post<IIssues>(`https://pointing-poker-rsapp.herokuapp.com/api/issue`, {
        title: valueIssueForm.title,
        link: valueIssueForm.link,
        priority: valueIssueForm.priority,
        roomId: infoRoom.id,
      })
      .then((res) => {
        return addIssue(res.data);
      });
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
