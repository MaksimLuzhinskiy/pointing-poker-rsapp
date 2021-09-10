import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import React, { FC, useState } from 'react';
import Title from '../title/Title';
import './ConnectLobby.scss';
import SmallForm from './../smallForm/SmallForm';

const ConnectLobby = () => {
  return (
    <Row className="connectToLobby">
      <Col span={12}>
        <Title title="OR:" textalign="center" />
      </Col>
      <Col className="margintop" span={14}>
        <div className="help-title">
          Connect to lobby by <span>URL:</span>
        </div>
        <SmallForm />
      </Col>
    </Row>
  );
};

export default ConnectLobby;
