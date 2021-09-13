import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRedux } from '../../../../interfaces';
import { closeForm } from '../../../../store/slice';
import './ButtonClose.scss';

const ButtonClose = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector<IRedux>((state) => state.login);
  const click = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(closeForm());
  };
  return (
    <button className="closeButton" onClick={click}>
      Cancel
    </button>
  );
};

export default ButtonClose;
