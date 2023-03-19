import React from 'react';
import { Link } from 'react-router-dom';
import MinecraftCard from './gamecards/MinecraftCard';
import RustCard from './gamecards/RustCard';
import ArkSurvivalCard from './gamecards/ArkSurvivalCard';
import DayzCard from './gamecards/DayzCard';
import FarmingSimulator22Card from './gamecards/FarmingSimulator22Card';
import FiveMCard from './gamecards/FiveMCard';
import SpaceEngineersCard from './gamecards/SpaceEngineersCard';
import Header from '../../admin/components/header/Header';
import Footer from '../../admin/components/footer/Footer';
import "./styles/App.css";
import "./styles/Landing.css";

function Landing() {
  return (
    <>
      <Header />
      <div className="Landing">
        <div className="hero-section">
          <h1>Welcome to our gaming community!</h1>
          <p>Explore our selection of games below and join our Discord server to get started.</p>
          <Link to="/discord">Join our Discord</Link>
        </div>
        <div className="GameCards">
          <MinecraftCard />
          <RustCard />
          <ArkSurvivalCard />
          <DayzCard />
          <FarmingSimulator22Card />
          <FiveMCard />
          <SpaceEngineersCard />
        </div>
        <div className="about-section">
          <h2>About Us</h2>
          <p>We are a gaming community dedicated to bringing gamers together to play and have fun. Learn more about us <Link to="/about">here</Link>.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
