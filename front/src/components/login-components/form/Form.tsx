import { Col, Row } from 'antd/lib/grid';
import React, { useState } from 'react';
import './Form.scss';
import InputText from './inputText/inputText';
import InputFile from './inputFile/inputFile';
import { useDispatch, useSelector } from 'react-redux';
import { IRedux, ItypeNamePaylod } from '../../../interfaces';
import { closeForm } from '../../../store/slice';
import ButtonConfirm from './buttonConfirm/ButtonConfirm';
import ButtonClose from './buttonClose/ButtonClose';
import Switcher from './switcher/Switcher';
import { useTranslation } from 'react-i18next';
import WrapForm, { WrapFlex, WrapSwitcher } from './constans';
import socket from '../../../socket';
import { useHistory } from 'react-router-dom';
import Role from '../../../enum';
import { setRole } from '../../../store/role';
import { loginAuth } from '../../../store/authslice';

export interface IStateForm {
  name: string;
  surname: string;
  jobPosition: string;
  image?: string;
}

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isOpen = useSelector<IRedux>((state) => state.login);
  const typeForm = useSelector<IRedux, ItypeNamePaylod>((state) => state.typeForm);
  const [isObserver, setIsObserver] = useState(false);
  const [formName, setFormName] = useState<IStateForm>({
    name: '',
    surname: '',
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

  const role = (): string => {
    if (isObserver) {
      return Role.spectator;
    } else {
      return Role.player;
    }
  };

  const buttonConf = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    switch (typeForm.type) {
      case 'create':
        {
          dispatch(loginAuth());
          socket.emit('create-room', { ...formName, role: Role.dealer });
          socket.on('create-room', (res: { code: string }) => {
            dispatch(setRole(Role.dealer));
            localStorage.setItem(
              res.code,
              JSON.stringify({ ...formName, role: Role.dealer, idSocket: socket.id })
            );
          });
        }
        break;
      case 'connect': {
        dispatch(loginAuth());
        socket.emit('join-room', {
          userInfo: { ...formName, role: role() },
          code: typeForm.link,
        });
        dispatch(setRole(role()));
        localStorage.setItem(
          typeForm.link,
          JSON.stringify({ ...formName, role: role(), idSocket: socket.id })
        );
        history.push(`/lobby/${typeForm.link}`);
      }
    }
  };

  return (
    <WrapForm onClick={closeFormLogin}>
      <form className="form-login" action="">
        <Row className="form-login__margin">
          <Col span={15}>
            <div className="form-login__title">{t('form.formTitle')}</div>
            <InputText
              title={t('form.inputFirstName')}
              id="name"
              value={formName.name}
              onChange={onchangeStateForm}
            ></InputText>
            <InputText
              title={t('form.inputLastName')}
              id="surname"
              value={formName.surname}
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
              <ButtonConfirm conf={buttonConf}></ButtonConfirm>
              <ButtonClose></ButtonClose>
            </WrapFlex>
          </Col>
        </Row>
      </form>
    </WrapForm>
  );
};

export default Form;
