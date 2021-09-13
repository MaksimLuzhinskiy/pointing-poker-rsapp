import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './OpenFormButton.scss';
import { openForm } from '../../../store/slice';
import { useDispatch, useSelector } from 'react-redux';
import { IRedux } from '../../../interfaces';

export interface IButton {
  type: string;
  title: string;
}

const OpenFormButton: FC<IButton> = ({ type, title }: IButton) => {
  const dispatch = useDispatch();
  const isOpen = useSelector<IRedux>((state) => state.login);
  const click = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(openForm());
  };
  return (
    <div>
      <button type="submit" onClick={click} className="openFormButton">
        {title}
      </button>
    </div>
  );
};

export default OpenFormButton;
