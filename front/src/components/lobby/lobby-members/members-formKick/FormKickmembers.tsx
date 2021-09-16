import React, { FC } from 'react';
import styled from 'styled-components';
import WrapForm from './../../../login-components/form/constans';
import './FormKickmember.scss';

export interface IFormKick {
  name: string;
  closeKick(): void;
}

const WrapFormKickButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormKickmembers: FC<IFormKick> = ({ name, closeKick }: IFormKick) => {
  const closeFormLogin = (e: React.FormEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      closeKick();
    }
  };

  const closeKickFormButton = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeKick();
  };

  return (
    <WrapForm onClick={closeFormLogin}>
      <form className="form-kick" action="">
        <div className="form-kick__title">Kick Player</div>
        <div className="form-kick__info">
          Are you really want to remove player {name} from game session?
        </div>
        <WrapFormKickButtons>
          {/* Ожидаю сервер, потом пишу функционал */}
          <button className="confirmButton">Yes</button>
          <button onClick={closeKickFormButton} className="closeButton">
            No
          </button>
        </WrapFormKickButtons>
      </form>
    </WrapForm>
  );
};

export default FormKickmembers;
