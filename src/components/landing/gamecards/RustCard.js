import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/gamecard.css';

function RustCard() {
  return (
    <Link to="/rust" className="game-card rust">
      <div className="game-card-content">
        <h2>Rust</h2>
        <p>Fight for survival and gather resources in a harsh environment.</p>
      </div>
    </Link>
  );
}

export default RustCard;
