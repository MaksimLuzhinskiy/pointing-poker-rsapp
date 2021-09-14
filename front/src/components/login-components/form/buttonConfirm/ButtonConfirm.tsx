import React from 'react';
import { useTranslation } from 'react-i18next';
import './ButtonConfirm.scss';

const ButtonConfirm = () => {
  const { t, i18n } = useTranslation();
  return <button className="confirmButton">{t('form.button.confirm')}</button>;
};

export default ButtonConfirm;
