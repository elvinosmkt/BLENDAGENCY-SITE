import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Stats from './components/Stats';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import BrandAI from './components/BrandAI';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Cosmic Space Background */}
      <SpaceBackground />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Stats />
          <Services />
          <Work />
          <Testimonials />
          <BrandAI />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;