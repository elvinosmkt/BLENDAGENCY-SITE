import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: '1',
    client: 'Times Square Brasil',
    title: 'Plataforma de Mídia Digital',
    category: 'Plataforma Web / SaaS',
    imageUrl: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '2',
    client: 'El Vinos',
    title: 'E-commerce Premium de Vinhos',
    category: 'Desenvolvimento Web / E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '3',
    client: 'Goldbull',
    title: 'Plataforma de Tokenização',
    category: 'Blockchain / FinTech',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '4',
    client: 'Cincoin',
    title: 'Ecossistema Cripto',
    category: 'Blockchain / Web3',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: '5',
    client: 'Techdry',
    title: 'E-commerce + Franquias',
    category: 'Plataforma Multi-sites',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600'
  }
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-gradient-to-b from-brand-black to-brand-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h3 className="text-indigo-500 font-mono text-sm tracking-widest mb-4 uppercase">Cases de Sucesso</h3>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white max-w-3xl leading-tight">
            Software que gera <span className="text-gradient-accent">impacto real</span> nos seus resultados.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-2xl mb-6 relative border border-white/10 group-hover:border-indigo-500/30 transition-all duration-500">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>

                {/* Indigo overlay that fades out on hover */}
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
                    Ver Projeto <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Project Info */}
              <div className="flex justify-between items-start border-b border-white/10 pb-4 group-hover:border-indigo-500/30 transition-colors">
                <div className="flex-1">
                  <p className="text-indigo-400 font-mono text-xs mb-2 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl text-white font-display font-medium group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm group-hover:text-white transition-colors ml-4">
                  <span>{project.client}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Hover Line */}
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mt-2 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <button className="group px-10 py-4 border-2 border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase font-bold text-sm tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Ver Portfolio Completo
          </button>
          <p className="text-gray-500 font-mono text-xs mt-6">
            +50 projetos entregues com sucesso
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;