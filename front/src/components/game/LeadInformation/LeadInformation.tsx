import React from 'react';
import ButtonCloseLobby from '../../lobby/lobby-metadata/metadata-buttons/buttonClose/ButtonCloseLobby';
import NameGame from './nameGame/NameGame';
import ScramGame from './scramGame/ScramGame';

const LeadInformation = () => {
  return (
    <>
      <NameGame></NameGame>
      <div className="scram">
        <ScramGame></ScramGame>
        <ButtonCloseLobby></ButtonCloseLobby>
      </div>
    </>
  );
};

export default LeadInformation;
