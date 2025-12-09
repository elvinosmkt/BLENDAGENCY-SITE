import React from 'react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: '1',
    client: 'NeoFinance',
    title: 'App de Investimentos',
    category: 'App Nativo (iOS/Android)',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '2',
    client: 'LogiTech SaaS',
    title: 'Dashboard Logístico',
    category: 'Plataforma Web / SaaS',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '3',
    client: 'Retail Giants',
    title: 'E-commerce High Scale',
    category: 'Vendas & Performance',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '4',
    client: 'HealthPlus',
    title: 'Telemedicina Integrada',
    category: 'Desenvolvimento Web',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600'
  }
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h3 className="text-indigo-500 font-mono text-sm tracking-widest mb-4">CASES DE SUCESSO</h3>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white">
            Software que gera impacto <br /> real nos seus resultados.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="overflow-hidden rounded-none mb-6 relative border border-white/5">
                 <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <img 
                   src={project.imageUrl} 
                   alt={project.title} 
                   className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                 />
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <p className="text-indigo-400 font-mono text-xs mb-2 uppercase">{project.category}</p>
                  <h3 className="text-2xl text-white font-display font-medium group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                </div>
                <span className="text-gray-500 text-sm group-hover:text-white transition-colors">{project.client}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase font-bold text-sm tracking-widest">
            Ver Portfolio Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;