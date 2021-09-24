import axios from 'axios';
import React, { FC } from 'react';
import styled from 'styled-components';
import { IIssues } from '../../../../interfaces';
import './IssueCard.scss';

const WrapIssueTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WrapIssueOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export interface IIssueCard {
  id: string;
  title: string;
  priority: string;
  link: string;
  changeCard(selectedIssue: IIssues): void;
  deleteCard(id: string): void;
}

const IssueCard: FC<IIssueCard> = ({
  id,
  title,
  priority,
  link,
  changeCard,
  deleteCard,
}: IIssueCard) => {
  const changeIssue = () => {
    changeCard({ id, title, link, priority });
  };

  const deleteIssue = () => {
    axios
      .delete(`https://pointing-poker-rsapp.herokuapp.com/api/issue/${id}`)
      .then(() => {
        deleteCard(id);
      });
  };
  return (
    <div className="issueCard">
      <WrapIssueTitle>
        <div className="issueCard__title">{title}</div>
        <div className="issueCard__priority">{priority}</div>
      </WrapIssueTitle>
      <WrapIssueOptions>
        <svg
          onClick={changeIssue}
          className="issueCard__karandash"
          width="26"
          height="26"
          viewBox="0 0 43 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.8067 14.0467L27.9533 16.1933L6.81333 37.3333H4.66667V35.1867L25.8067 14.0467ZM34.2067 0C33.6233 0 33.0167 0.233333 32.5733 0.676667L28.3033 4.94667L37.0533 13.6967L41.3233 9.42667C42.2333 8.51667 42.2333 7.04667 41.3233 6.13667L35.8633 0.676667C35.3967 0.21 34.8133 0 34.2067 0ZM25.8067 7.44333L0 33.25V42H8.75L34.5567 16.1933L25.8067 7.44333Z"
            fill="black"
          />
        </svg>
        <svg
          onClick={deleteIssue}
          className="issueCard__trashbox"
          width="26"
          height="26"
          viewBox="0 0 34 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.3334 13.5V35.1667H7.66675V13.5H26.3334ZM22.8334 0.5H11.1667L8.83342 2.66667H0.666748V7H33.3334V2.66667H25.1667L22.8334 0.5ZM31.0001 9.16667H3.00008V35.1667C3.00008 37.55 5.10008 39.5 7.66675 39.5H26.3334C28.9001 39.5 31.0001 37.55 31.0001 35.1667V9.16667Z"
            fill="#FF0000"
          />
        </svg>
      </WrapIssueOptions>
    </div>
  );
};

export default IssueCard;
