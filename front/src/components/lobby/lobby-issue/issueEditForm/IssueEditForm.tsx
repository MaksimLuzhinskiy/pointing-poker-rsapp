import axios from 'axios';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import WrapFormIssueButtons, { FormBody } from '../../../../constStyledComponent';
import { IIssues, IRedux, IRoomInfo, IValueIssueForm } from '../../../../interfaces';
import WrapForm from '../../../login-components/form/constans';
import IssueFormSelect from '../issueForm/issueFormSelect/IssueFormSelect';
import IssueFormTextInput from '../issueForm/issueFormTextInput/IssueFormTextInput';

export interface IForm {
  closeForm(): void;
  editForm(issueInfo: IIssues): void;
  issue: IIssues;
}

const IssueEditForm: FC<IForm> = ({ closeForm, editForm, issue }: IForm) => {
  const infoRoom = useSelector<IRedux, IRoomInfo>((state) => state.roomInfo);
  const [valueIssueForm, setValueissueForm] = useState<IValueIssueForm>(issue);

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
  const editIssueButton = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .put<IIssues>(
        `https://pointing-poker-rsapp.herokuapp.com/api/issue/${issue.id}`,
        {
          title: valueIssueForm.title,
          link: valueIssueForm.link,
          priority: valueIssueForm.priority,
          roomId: infoRoom.id,
        }
      )
      .then((res) => {
        editForm(res.data);
      });
    closeForm();
  };
  return (
    <WrapForm onClick={closeFormIssue}>
      <form className="issueForm" action="">
        <div className="issueForm__title">Change Issue</div>
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
          <button className="confirmButton" onClick={editIssueButton}>
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

export default IssueEditForm;
