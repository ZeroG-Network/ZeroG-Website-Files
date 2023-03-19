import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/gamecard.css';

function MinecraftCard() {
  return (
    <Link to="/minecraft" className="game-card minecraft">
      <div className="game-card-content">
        <h2>Minecraft</h2>
        <p>Explore and build in a blocky 3D world.</p>
      </div>
    </Link>
  );
}

export default MinecraftCard;
