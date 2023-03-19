import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/gamecard.css';

function FiveMCard() {
  return (
    <Link to="/fivem" className="game-card fivem">
      <div className="game-card-content">
        <h2>FiveM</h2>
        <p>Join an open-world multiplayer mod for Grand Theft Auto V.</p>
      </div>
    </Link>
  );
}

export default FiveMCard;
