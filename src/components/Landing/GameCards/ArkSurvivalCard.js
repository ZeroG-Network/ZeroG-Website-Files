import React from 'react';
import arkSurvivalIcon from '../../../assets/images/ark-survival-icon.png';
import arkSurvivalBackground from '../../../assets/images/ark-survival-background.jpg';
import '../styles/GameCard.css';

const ArkSurvivalCard = () => {
  return (
    <div className="game-card ark-survival-card">
      <img src={arkSurvivalIcon} alt="Ark: Survival Evolved Icon" className="game-card-icon" />
      <div className="game-card-info">
        <h3>Ark: Survival Evolved</h3>
        <p>A survival game where players must survive on an island filled with prehistoric creatures, gather resources, and build bases.</p>
      </div>
      <img src={arkSurvivalBackground} alt="Ark: Survival Evolved Background" className="game-card-background" />
    </div>
  );
};

export default ArkSurvivalCard;
