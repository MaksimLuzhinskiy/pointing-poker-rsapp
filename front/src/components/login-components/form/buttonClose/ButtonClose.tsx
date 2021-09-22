import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { IRedux, ItypeNamePaylod } from '../../../../interfaces';
import { closeForm } from '../../../../store/slice';
import { typeConnectRoom } from '../../../../store/typeOpenLoginFormslice';
import './ButtonClose.scss';

const ButtonClose = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const isOpen = useSelector<IRedux>((state) => state.login);
  const payload: ItypeNamePaylod = {
    type: '',
    link: '',
  };
  const click = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(closeForm());
    dispatch(typeConnectRoom(payload));
  };
  return (
    <button className="closeButton" onClick={click}>
      {t('form.button.cancel')}
    </button>
  );
};

export default ButtonClose;
