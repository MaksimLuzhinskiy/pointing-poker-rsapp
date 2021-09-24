import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IIssues, IRedux, IRoomInfo, IValueIssueForm } from '../../../interfaces';
import IssueButton from './issueButton/IssueButton';
import IssueCard from './issueCard/IssueCard';
import IssueEditForm from './issueEditForm/IssueEditForm';
import IssueForm from './issueForm/IssueForm';
import './LobbyIssue.scss';

const LobbyIssue = () => {
  const issuesInitial = useSelector<IRedux, IRoomInfo>((state) => state.roomInfo);
  const [issue, setIssue] = useState<IIssues[]>([]);
  const [isCreatingIssue, setIsCreatingIssue] = useState(false);
  const [isEditIssue, setIsEditIssue] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<IIssues>({
    id: '',
    title: '',
    link: '',
    priority: '',
  });

  useEffect(() => {
    if (issuesInitial !== undefined) {
      setIssue(issuesInitial.issues);
    }
  }, [issuesInitial.issues]);

  const changeStatusForm = () => {
    setIsCreatingIssue(!isCreatingIssue);
  };

  const changeStatusEditForm = () => {
    setIsEditIssue(!isEditIssue);
  };

  const openEditForm = (issueEdit: IIssues) => {
    setSelectedIssue({ ...issueEdit });
    changeStatusEditForm();
  };

  const addIssue = (issueInfo: IIssues) => {
    const copy = [...issue];
    copy.push(issueInfo);
    setIssue(copy);
  };

  const changeIssue = (issueInfo: IIssues) => {
    const newIssue = issue.map((a) =>
      a.id === issueInfo.id ? Object.assign({}, issueInfo) : Object.assign({}, a)
    );
    setIssue(newIssue);
  };

  const deleteIssue = (id: string) => {
    const newIssue = issue
      .filter((e) => e.id !== id)
      .map((e) => Object.assign({}, e));
    setIssue(newIssue);
  };
  return (
    <div>
      <div className="members-title">Issues:</div>
      <div className="issueLoby">
        {issue.map((element) => {
          return (
            <IssueCard
              key={element.id}
              id={element.id}
              title={element.title}
              priority={element.priority}
              link={element.link}
              changeCard={openEditForm}
              deleteCard={deleteIssue}
            ></IssueCard>
          );
        })}
        <IssueButton openForm={changeStatusForm}></IssueButton>
        {isCreatingIssue && (
          <IssueForm addIssue={addIssue} closeForm={changeStatusForm}></IssueForm>
        )}
        {isEditIssue && (
          <IssueEditForm
            issue={selectedIssue}
            editForm={changeIssue}
            closeForm={changeStatusEditForm}
          />
        )}
      </div>
    </div>
  );
};

export default LobbyIssue;
