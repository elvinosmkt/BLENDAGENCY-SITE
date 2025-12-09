import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-black">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          <h2 className="text-sm md:text-base text-indigo-400 font-mono mb-6 uppercase tracking-[0.2em] animate-fade-in-up font-bold" style={{animationDelay: '0.1s'}}>
            Software House & Growth Partner
          </h2>
          
          <h1 className="font-display font-medium text-5xl md:text-8xl lg:text-[7rem] leading-[1.1] md:leading-[1.1] lg:leading-[1] text-white mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Transformamos <span className="text-gray-500 italic font-light">código</span> em <span className="text-gradient-accent">receita</span> e escala.
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             <p className="max-w-xl text-gray-400 text-lg leading-relaxed">
               A Blend Agency desenvolve aplicativos de alta performance e ecossistemas digitais focados em uma única métrica: o seu resultado financeiro.
             </p>
             <a href="#contact" className="group flex items-center justify-center w-16 h-16 rounded-full border border-white/20 hover:border-indigo-500 hover:bg-indigo-500 hover:scale-105 transition-all duration-300">
               <ArrowDown className="text-white group-hover:translate-y-1 transition-transform" />
             </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block">
        <p className="text-xs text-gray-500 font-mono text-right">
          BA &copy; {new Date().getFullYear()} <br /> 
          FOCO EM ROI
        </p>
      </div>
    </section>
  );
};

export default Hero;