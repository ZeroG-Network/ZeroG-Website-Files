import React from 'react';
import GamePage from './GamePage';
import arkSurvivalImg from '../../images/ark-survival.jpg';

function ArkSurvival() {
  return (
    <GamePage
      title="Ark: Survival Evolved"
      description="Ark: Survival Evolved is a multiplayer survival video game developed and published by Studio Wildcard. In the game, players must survive on an island filled with dinosaurs and other prehistoric creatures."
      image={arkSurvivalImg}
      alt="Ark: Survival Evolved"
    />
  );
}

export default ArkSurvival;
