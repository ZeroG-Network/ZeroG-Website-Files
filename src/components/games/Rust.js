import React from 'react';
import GamePage from './GamePage';
import spaceEngineersImg from '../../images/space-engineers.jpg';

function SpaceEngineers() {
  return (
    <GamePage
      title="Space Engineers"
      description="Space Engineers is a sandbox game about engineering, construction, exploration and survival in space and on planets. Players build space ships, space stations, planetary outposts of various sizes and uses, pilot ships and travel through space to explore planets and gather resources to survive."
      image={spaceEngineersImg}
      alt="Space Engineers"
    />
  );
}

export default SpaceEngineers;
