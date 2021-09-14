import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { IRedux } from '../../../../interfaces';
import { closeForm } from '../../../../store/slice';
import './ButtonClose.scss';

const ButtonClose = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const isOpen = useSelector<IRedux>((state) => state.login);
  const click = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(closeForm());
  };
  return (
    <button className="closeButton" onClick={click}>
      {t('form.button.cancel')}
    </button>
  );
};

export default ButtonClose;
