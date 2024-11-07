import React from 'react';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <Footer />
    </div>
  );
}

export default App;
