import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/gamecard.css';

function ArkSurvivalCard() {
  return (
    <Link to="/ark-survival-evolved" className="game-card ark-survival-evolved">
      <div className="game-card-content">
        <h2>ARK: Survival Evolved</h2>
        <p>Tame, breed, and ride dinosaurs in a vast open world.</p>
      </div>
    </Link>
  );
}

export default ArkSurvivalCard;
