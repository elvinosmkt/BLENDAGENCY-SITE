import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Work from './components/Work';
import BrandAI from './components/BrandAI';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-indigo-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <BrandAI />
      </main>
      <Footer />
    </div>
  );
}

export default App;