import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Studio from './components/Studio';
import Games from './components/Games';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Games />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;