import React from 'react';
import seIcon from '../../../assets/images/se-icon.png';
import seBackground from '../../../assets/images/se-background.jpg';
import '../styles/GameCard.css';

const SpaceEngineersCard = () => {
  return (
    <div className="game-card se-card">
      <img src={seIcon} alt="Space Engineers Icon" className="game-card-icon" />
      <div className="game-card-info">
        <h3>Space Engineers</h3>
        <p>A sandbox game where players can build and pilot their own spaceships, as well as explore and mine asteroids.</p>
      </div>
      <img src={seBackground} alt="Space Engineers Background" className="game-card-background" />
    </div>
  );
};

export default SpaceEngineersCard;
