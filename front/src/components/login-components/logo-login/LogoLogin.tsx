import { Col, Row } from 'antd/lib/grid';
import React from 'react';
import './logoLogin.scss';

const LogoLogin = () => {
  return (
    <Row className="logo" justify="center">
      <Col span={24}>
        <div className="">
          <img src="../logo-login.png" alt="" />
        </div>
      </Col>
    </Row>
  );
};

export default LogoLogin;
