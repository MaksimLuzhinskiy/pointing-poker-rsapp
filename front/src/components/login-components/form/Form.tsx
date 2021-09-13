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

const WrapForm = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(196, 196, 196, 0.6);
  left: 0;
  top: 0;
`;
const WrapFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrapSwitcher = styled.div`
  display: flex;
  align-items: center;
`;

export interface IStateForm {
  firstName: string;
  lastName: string;
  jobPosition: string;
  image?: string;
}

const Form = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector<IRedux>((state) => state.login);

  const [formName, setFormName] = useState<IStateForm>({
    firstName: '',
    lastName: '',
    jobPosition: '',
    image: '',
  });

  const onchangeStateForm = (name: string, title: string) => {
    console.log(name, title);
    const copyFormName = Object.assign({}, formName);
    copyFormName[name] = title;
    setFormName(copyFormName);
  };

  const closeFormLogin = (e: React.FormEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeForm());
    }
  };

  console.log(formName);
  return (
    <WrapForm onClick={closeFormLogin}>
      <form className="form-login" action="">
        <Row className="form-login__margin">
          <Col span={15}>
            <div className="form-login__title">Connect to lobby</div>
            <InputText
              title="Your first name:"
              id="firstName"
              value={formName.firstName}
              onChange={onchangeStateForm}
            ></InputText>
            <InputText
              title="Your last name:"
              id="lastName"
              value={formName.lastName}
              onChange={onchangeStateForm}
            ></InputText>
            <InputText
              title="Your job position:"
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
              <div className="switcher-title">Connect as Observer</div>
              <Switcher />
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
