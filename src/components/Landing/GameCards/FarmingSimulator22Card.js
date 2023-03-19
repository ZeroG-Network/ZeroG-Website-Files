import React from 'react';
import fs22Icon from '../../../assets/images/fs22-icon.png';
import fs22Background from '../../../assets/images/fs22-background.jpg';
import '../styles/GameCard.css';

const FarmingSimulator22Card = () => {
  return (
    <div className="game-card fs22-card">
      <img src={fs22Icon} alt="Farming Simulator 22 Icon" className="game-card-icon" />
      <div className="game-card-info">
        <h3>Farming Simulator 22</h3>
        <p>A farming simulation game where players can cultivate crops, raise livestock, and manage their own farm.</p>
      </div>
      <img src={fs22Background} alt="Farming Simulator 22 Background" className="game-card-background" />
    </div>
  );
};

export default FarmingSimulator22Card;
