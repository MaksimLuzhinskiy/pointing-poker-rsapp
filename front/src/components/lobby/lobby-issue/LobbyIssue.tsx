import React, { useState } from 'react';
import { IValueIssueForm } from '../../../interfaces';
import IssueButton from './issueButton/IssueButton';
import IssueCard from './issueCard/IssueCard';
import IssueForm from './issueForm/IssueForm';
import './LobbyIssue.scss';

const LobbyIssue = () => {
  const [issue, setIssue] = useState<IValueIssueForm[]>([]);
  const [isCreatingIssue, setIsCreatingIssue] = useState(false);

  const changeStatusForm = () => {
    setIsCreatingIssue(!isCreatingIssue);
  };

  const addIssue = (issueInfo: IValueIssueForm) => {
    const copy = [...issue];
    copy.push(issueInfo);
    setIssue(copy);
  };
  return (
    <div>
      <div className="members-title">Issues:</div>
      <div className="issueLoby">
        {issue.map((element) => {
          return (
            <IssueCard
              key={element.title}
              id={element.title}
              name={element.title}
              priority={element.priority}
            ></IssueCard>
          );
        })}
        <IssueButton openForm={changeStatusForm}></IssueButton>
        {isCreatingIssue && (
          <IssueForm addIssue={addIssue} closeForm={changeStatusForm}></IssueForm>
        )}
      </div>
    </div>
  );
};

export default LobbyIssue;
