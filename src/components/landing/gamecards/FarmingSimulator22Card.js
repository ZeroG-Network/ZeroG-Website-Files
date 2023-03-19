import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/gamecard.css';

function FarmingSimulator22Card() {
  return (
    <Link to="/farming-simulator-22" className="game-card farming-simulator-22">
      <div className="game-card-content">
        <h2>Farming Simulator 22</h2>
        <p>Experience the life of a modern farmer and grow your own farm.</p>
      </div>
    </Link>
  );
}

export default FarmingSimulator22Card;
