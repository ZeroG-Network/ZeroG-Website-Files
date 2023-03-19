import React from 'react';
import minecraftIcon from '../../../assets/images/minecraft-icon.png';
import minecraftBackground from '../../../assets/images/minecraft-background.jpg';
import '../styles/GameCard.css';

const MinecraftCard = () => {
  return (
    <div className="game-card minecraft-card">
      <img src={minecraftIcon} alt="Minecraft Icon" className="game-card-icon" />
      <div className="game-card-info">
        <h3>Minecraft</h3>
        <p>A sandbox video game where players can build and explore virtual worlds made out of blocks.</p>
      </div>
      <img src={minecraftBackground} alt="Minecraft Background" className="game-card-background" />
    </div>
  );
};

export default MinecraftCard;
