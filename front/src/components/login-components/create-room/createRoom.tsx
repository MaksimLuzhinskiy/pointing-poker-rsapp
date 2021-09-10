import React from 'react';
import './createRoom.scss';
import { Col, Row } from 'antd/lib/grid';
import OpenFormButton from '../styledButton/OpenFormButton';
import Title from '../title/Title';

const CreateRoom = () => {
  return (
    <Row className="createRoom">
      <Col span={12}>
        <Title title="Start your planning:" textalign="left" />
      </Col>
      <Col className="createRoom__margin" span={14}>
        <div className="createRoom-form">
          <div className="help-title">Create session:</div>
          <OpenFormButton type="create" title="Start new game" />
        </div>
      </Col>
    </Row>
  );
};

export default CreateRoom;
