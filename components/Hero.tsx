import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Cosmic Glow Effects - complement SpaceBackground */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)` }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-[140px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-xs md:text-sm font-mono mb-6 border border-indigo-500/20 animate-fade-in-up backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-[0.2em]">Software House & Growth Partner</span>
          </div>

          {/* Main Heading with Gradient Animation */}
          <h1 className="font-display font-medium text-5xl md:text-8xl lg:text-[7rem] leading-[1.1] md:leading-[1.1] lg:leading-[1] text-white mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transformamos <span className="text-gray-500 italic font-light relative">
              código
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,4 Q50,0 100,4 T200,4" stroke="rgba(156,163,175,0.3)" strokeWidth="2" fill="none" />
              </svg>
            </span> em <span className="text-gradient-accent relative inline-block">
              receita
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </span> e escala.
          </h1>

          {/* Description & CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed">
              A Blend Agency desenvolve aplicativos de <span className="text-white font-semibold">alta performance</span> e ecossistemas digitais focados em uma única métrica: o seu <span className="text-indigo-400">resultado financeiro</span>.
            </p>
            <a href="#contact" className="group flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/20 hover:border-indigo-500 hover:bg-indigo-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] shrink-0">
              <ArrowDown className="text-white group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-display font-bold text-white">50+</span>
              <span className="text-gray-500 text-sm font-mono">Projetos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-display font-bold text-white">300%</span>
              <span className="text-gray-500 text-sm font-mono">ROI Médio</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-display font-bold text-white">10M+</span>
              <span className="text-gray-500 text-sm font-mono">Usuários</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Badge */}
      <div className="absolute bottom-10 right-10 hidden md:block">
        <p className="text-xs text-gray-500 font-mono text-right backdrop-blur-sm bg-black/20 px-4 py-2 rounded-lg border border-white/5">
          BA &copy; {new Date().getFullYear()} <br />
          FOCO EM ROI
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;