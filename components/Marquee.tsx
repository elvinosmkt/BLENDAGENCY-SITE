import React from 'react';

const Marquee: React.FC = () => {
  const items = ["Desenvolvimento Web", "Apps Nativos", "SaaS", "Alta Performance", "Growth Hacking", "Automação", "Vendas B2B", "ROI", "Data Science"];

  return (
    <div className="py-12 border-y border-white/5 bg-brand-dark overflow-hidden relative">
       {/* Gradient Overlay for Fade Effect */}
       <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-black to-transparent z-10"></div>
       <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-black to-transparent z-10"></div>

       <div className="flex w-max animate-marquee">
         {[...items, ...items, ...items, ...items].map((item, index) => (
           <div key={index} className="flex items-center gap-8 mx-8">
             {/* Alterado para ter um contorno branco visível (rgba 255,255,255,0.4) e preenchimento branco ao passar o mouse */}
             <span className="text-5xl md:text-7xl font-display font-bold text-transparent uppercase hover:text-white transition-colors duration-300 cursor-default whitespace-nowrap" 
             style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)' }}>
               {item}
             </span>
             <span className="w-3 h-3 bg-indigo-500 rounded-full shrink-0"></span>
           </div>
         ))}
       </div>
    </div>
  );
};

export default Marquee;