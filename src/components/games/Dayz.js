import React from 'react';
import GamePage from './GamePage';
import dayzImg from '../../images/dayz.jpg';

function Dayz() {
  return (
    <GamePage
      title="DayZ"
      description="DayZ is a multiplayer survival video game developed and published by Bohemia Interactive. In the game, players must survive in a post-apocalyptic world filled with zombies and other players."
      image={dayzImg}
      alt="DayZ"
    />
  );
}

export default Dayz;
