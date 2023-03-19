import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/gamecard.css';

function DayzCard() {
  return (
    <Link to="/dayz" className="game-card dayz">
      <div className="game-card-content">
        <h2>DayZ</h2>
        <p>Survive and scavenge in a post-apocalyptic world full of dangers.</p>
      </div>
    </Link>
  );
}

export default DayzCard;
