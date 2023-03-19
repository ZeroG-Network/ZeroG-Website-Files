import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';

function App() {
  return (
    <div className='body'>
      <Header />
      <div className='landing'>
       <Landing />
      </div>
      <Footer />
    </div>
  );
}

export default App;