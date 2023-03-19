import React from 'react';
import GamePage from './GamePage';
import farmingSimulator22Img from '../../images/farming-simulator-22.jpg';

function FarmingSimulator22() {
  return (
    <GamePage
      title="Farming Simulator 22"
      description="Farming Simulator 22 is a farming simulation video game developed and published by Giants Software. In the game, players can manage their own farm, raise livestock, and grow crops."
      image={farmingSimulator22Img}
      alt="Farming Simulator 22"
    />
  );
}

export default FarmingSimulator22;
