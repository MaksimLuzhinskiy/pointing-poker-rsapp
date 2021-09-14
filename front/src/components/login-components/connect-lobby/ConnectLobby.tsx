import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import React, { FC, useState } from 'react';
import Title from '../title/Title';
import './ConnectLobby.scss';
import SmallForm from './../smallForm/SmallForm';
import { useTranslation } from 'react-i18next';

const ConnectLobby = () => {
  const { t, i18n } = useTranslation();
  return (
    <Row className="connectToLobby">
      <Col span={12}>
        <Title title={t('connectToRoomsTitle.or')} textalign="center" />
      </Col>
      <Col className="margintop" span={14}>
        <div className="help-title">
          {t('connectToRoomsTitle.connectTitle')}{' '}
          <span>{t('connectToRoomsTitle.colorConnectTitle')}</span>
        </div>
        <SmallForm />
      </Col>
    </Row>
  );
};

export default ConnectLobby;
