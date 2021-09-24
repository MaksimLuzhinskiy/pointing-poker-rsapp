import React from 'react';
import './createRoom.scss';
import { Col, Row } from 'antd/lib/grid';
import OpenFormButton from '../styledButton/OpenFormButton';
import Title from '../title/Title';
import { useTranslation } from 'react-i18next';

const CreateRoom = () => {
  const { t, i18n } = useTranslation();
  return (
    <Row className="createRoom">
      <Col span={12}>
        <Title title={t('createRooms.createRoomsTitle')} textalign="left" />
      </Col>
      <Col className="createRoom__margin" span={14}>
        <div className="createRoom-form">
          <div className="help-title">{t('createRooms.createRoomsTitleHelp')}</div>
          <OpenFormButton
            link=""
            type="create"
            title={t('button.createRoomsButton')}
          />
        </div>
      </Col>
    </Row>
  );
};

export default CreateRoom;
