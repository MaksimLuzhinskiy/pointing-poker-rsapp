import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './ButtonConfirm.scss';

export interface IButtonConfirm {
  conf(e: React.FormEvent<HTMLButtonElement>): void;
}

const ButtonConfirm: FC<IButtonConfirm> = ({ conf }: IButtonConfirm) => {
  const { t, i18n } = useTranslation();
  return (
    <button onClick={conf} className="confirmButton">
      {t('form.button.confirm')}
    </button>
  );
};

export default ButtonConfirm;
