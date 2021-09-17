import { Col, Row } from 'antd/lib/grid';
import React, { useState } from 'react';
import styled from 'styled-components';
import './Form.scss';
import InputText from './inputText/inputText';
import InputFile from './inputFile/inputFile';
import { useDispatch, useSelector } from 'react-redux';
import { IRedux } from '../../../interfaces';
import { closeForm } from '../../../store/slice';
import ButtonConfirm from './buttonConfirm/ButtonConfirm';
import ButtonClose from './buttonClose/ButtonClose';
import Switcher from './switcher/Switcher';
import { useTranslation } from 'react-i18next';
import WrapForm, { WrapFlex, WrapSwitcher } from './constans';

export interface IStateForm {
  firstName: string;
  lastName: string;
  jobPosition: string;
  image?: string;
}

const Form = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector<IRedux>((state) => state.login);

  const [isObserver, setIsObserver] = useState(false);

  const [formName, setFormName] = useState<IStateForm>({
    firstName: '',
    lastName: '',
    jobPosition: '',
    image: '',
  });

  const { t, i18n } = useTranslation();

  const onchangeStateForm = (name: string, title: string) => {
    const copyFormName = Object.assign({}, formName);
    copyFormName[name] = title;
    setFormName(copyFormName);
  };

  const closeFormLogin = (e: React.FormEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeForm());
    }
  };

  const changeisObserver = (title: boolean) => {
    setIsObserver(title);
  };

  return (
    <WrapForm onClick={closeFormLogin}>
      <form className="form-login" action="">
        <Row className="form-login__margin">
          <Col span={15}>
            <div className="form-login__title">{t('form.formTitle')}</div>
            <InputText
              title={t('form.inputFirstName')}
              id="firstName"
              value={formName.firstName}
              onChange={onchangeStateForm}
            ></InputText>
            <InputText
              title={t('form.inputLastName')}
              id="lastName"
              value={formName.lastName}
              onChange={onchangeStateForm}
            ></InputText>
            <InputText
              title={t('form.inputJobPosition')}
              id="jobPosition"
              value={formName.jobPosition}
              onChange={onchangeStateForm}
            ></InputText>
            <InputFile
              title=""
              value=""
              id="image"
              onChange={onchangeStateForm}
            ></InputFile>
            {formName.image && (
              <img
                className="form-img"
                src={formName.image}
                width="83"
                height="83"
              ></img>
            )}
          </Col>
          <Col span={9}>
            <WrapSwitcher>
              <div className="switcher-title">{t('form.ConnectObservertitle')}</div>
              <Switcher value={isObserver} setValue={changeisObserver} />
            </WrapSwitcher>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <WrapFlex>
              <ButtonConfirm></ButtonConfirm>
              <ButtonClose></ButtonClose>
            </WrapFlex>
          </Col>
        </Row>
      </form>
    </WrapForm>
  );
};

export default Form;
