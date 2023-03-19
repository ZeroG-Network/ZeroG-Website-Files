import React from 'react';
import MinecraftCard from './MinecraftCard';
import RustCard from './RustCard';
import ArkSurvivalCard from './ArkSurvivalCard';
import DayzCard from './DayzCard';
import FarmingSimulator22Card from './FarmingSimulator22Card';
import FiveMCard from './FiveMCard';
import SpaceEngineersCard from './SpaceEngineersCard';
import '../styles/GameCard.css';

const GameCards = () => {
  return (
    <div className="game-cards-container">
      <table className="game-cards">
        <tbody>
          <tr>
            <td><MinecraftCard /></td>
            <td><RustCard /></td>
            <td><ArkSurvivalCard /></td>
            <td><DayzCard /></td>
            <td><FarmingSimulator22Card /></td>
          </tr>
          <tr>
            <td></td>
            <td><FiveMCard /></td>
            <td><SpaceEngineersCard /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameCards;