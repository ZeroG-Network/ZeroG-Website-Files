import React from 'react';
import rustIcon from '../../../assets/images/rust-icon.png';
import rustBackground from '../../../assets/images/rust-background.jpg';
import '../styles/GameCard.css';

const RustCard = () => {
  return (
    <div className="game-card rust-card">
      <img src={rustIcon} alt="Rust Icon" className="game-card-icon" />
      <div className="game-card-info">
        <h3>Rust</h3>
        <p>A multiplayer survival game where players must gather resources, build bases, and fend off other players and wildlife.</p>
      </div>
      <img src={rustBackground} alt="Rust Background" className="game-card-background" />
    </div>
  );
};

export default RustCard;
