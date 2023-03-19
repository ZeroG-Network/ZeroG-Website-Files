import React from 'react';
import fivemIcon from '../../../assets/images/fivem-icon.png';
import fivemBackground from '../../../assets/images/fivem-background.jpg';
import '../styles/GameCard.css';

const FiveMCard = () => {
  return (
    <div className="game-card fivem-card">
      <img src={fivemIcon} alt="FiveM Icon" className="game-card-icon" />
      <div className="game-card-info">
        <h3>FiveM</h3>
        <p>A modding platform for Grand Theft Auto V that allows players to create custom servers and game modes.</p>
      </div>
      <img src={fivemBackground} alt="FiveM Background" className="game-card-background" />
    </div>
  );
};

export default FiveMCard;
