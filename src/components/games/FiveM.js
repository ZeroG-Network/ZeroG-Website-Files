import React from 'react';
import GamePage from './GamePage';
import fivemImg from '../../images/fivem.jpg';

function FiveM() {
  return (
    <GamePage
      title="FiveM"
      description="FiveM is a modification for the popular open-world video game Grand Theft Auto V. The modification allows players to play on custom servers with their own rules and game modes."
      image={fivemImg}
      alt="FiveM"
    />
  );
}

export default FiveM;
