import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/gamecard.css';

function SpaceEngineersCard() {
  return (
    <Link to="/space-engineers" className="game-card space-engineers">
      <div className="game-card-content">
        <h2>Space Engineers</h2>
        <p>Design and build your own spaceships and explore the galaxy.</p>
      </div>
    </Link>
  );
}

export default SpaceEngineersCard;
