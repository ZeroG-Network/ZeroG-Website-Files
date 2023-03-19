import React from 'react';
import GamePage from './GamePage';
import minecraftImg from '../../images/minecraft.jpg';

function Minecraft() {
  return (
    <GamePage
      title="Minecraft"
      description="Minecraft is a sandbox video game developed and published by Mojang Studios. In the game, players can build and explore virtual worlds made of blocks."
      image={minecraftImg}
      alt="Minecraft"
    />
  );
}

export default Minecraft;
