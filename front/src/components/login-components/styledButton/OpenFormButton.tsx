import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './OpenFormButton.scss';
import { openForm } from '../../../store/slice';
import { typeConnectRoom } from '../../../store/typeOpenLoginFormslice';
import { useDispatch, useSelector } from 'react-redux';
import { IRedux, ItypeNamePaylod } from '../../../interfaces';

export interface IButton {
  type: string;
  title: string;
  link: string;
}

const OpenFormButton: FC<IButton> = ({ type, title, link }: IButton) => {
  const dispatch = useDispatch();
  const isOpen = useSelector<IRedux>((state) => state.login);
  const payload: ItypeNamePaylod = {
    type,
    link,
  };
  const click = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(openForm());
    dispatch(typeConnectRoom(payload));
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
