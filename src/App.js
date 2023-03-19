import React from 'react';
import { BrowserRouter as Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Discord from './components/discord/Discord';
import Minecraft from './components/games/Minecraft';
import Rust from './components/games/Rust';
import ArkSurvival from './components/games/ArkSurvival';
import Dayz from './components/games/Dayz';
import FarmingSimulator22 from './components/games/FarmingSimulator22';
import FiveM from './components/games/FiveM';
import SpaceEngineers from './components/games/SpaceEngineers';
import Header from './admin/components/header/Header';
import Footer from './admin/components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/discord">
          <Discord />
        </Route>
        <Route path="/minecraft">
          <Minecraft />
        </Route>
        <Route path="/rust">
          <Rust />
        </Route>
        <Route path="/ark-survival">
          <ArkSurvival />
        </Route>
        <Route path="/dayz">
          <Dayz />
        </Route>
        <Route path="/farming-simulator-22">
          <FarmingSimulator22 />
        </Route>
        <Route path="/fivem">
          <FiveM />
        </Route>
        <Route path="/space-engineers">
          <SpaceEngineers />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
