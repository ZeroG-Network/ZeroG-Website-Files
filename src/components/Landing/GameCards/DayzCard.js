import React from 'react';
import dayzIcon from '../../../assets/images/dayz-icon.png';
import dayzBackground from '../../../assets/images/dayz-background.jpg';
import '../styles/GameCard.css';

const DayzCard = () => {
  return (
    <div className="game-card dayz-card">
      <img src={dayzIcon} alt="DayZ Icon" className="game-card-icon" />
      <div className="game-card-info">
        <h3>DayZ</h3>
        <p>A survival game where players must scavenge for supplies, fight off zombies and other players, and survive in a post-apocalyptic world.</p>
      </div>
      <img src={dayzBackground} alt="DayZ Background" className="game-card-background" />
    </div>
  );
};

export default DayzCard;
