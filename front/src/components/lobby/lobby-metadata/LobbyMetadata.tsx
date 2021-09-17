import React from 'react';
import MetadataScramMaster from './metadata-scrammaster/MetadataScramMaster';
import TitleMetadata from './metadata-title/TitleMetadata';
import MetadataCopylink from './metadata-copylink/MetadataCopylink';
import MetadataButtons from './metadata-buttons/MetadataButtons';

const LobbyMetadata = () => {
  return (
    <div className="lobby-metadata">
      <TitleMetadata />
      <MetadataScramMaster />
      <MetadataCopylink />
      <MetadataButtons />
    </div>
  );
};

export default LobbyMetadata;
