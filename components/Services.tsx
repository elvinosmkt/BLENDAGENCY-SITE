import React from 'react';
import { ArrowUpRight, Code2, TrendingUp, Cpu } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Desenvolvimento de Software',
    description: 'Apps nativos, plataformas SaaS e sistemas web robustos. Arquitetura escalável pronta para milhões de usuários.',
    tags: ['React Native', 'Node.js', 'Cloud AWS']
  },
  {
    id: '2',
    title: 'Engenharia de Vendas',
    description: 'Otimização de funis de conversão (CRO), automação de marketing e implementação de CRM para maximizar receita.',
    tags: ['Automação', 'CRM', 'Conversão']
  },
  {
    id: '3',
    title: 'Data & Inteligência',
    description: 'Dashboards de BI em tempo real e integração de IA para tomada de decisão baseada em dados concretos.',
    tags: ['Analytics', 'AI', 'Big Data']
  }
];

const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-32 bg-brand-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h3 className="text-indigo-500 font-mono text-sm tracking-widest mb-4 uppercase">Nossas Soluções</h3>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white max-w-2xl leading-tight">
              Engenharia e estratégia para <span className="text-gradient-accent">alavancar</span> negócios.
            </h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-white group mt-8 md:mt-0">
            <span className="border-b border-white pb-1 group-hover:text-indigo-400 group-hover:border-indigo-400 transition-colors">Ver todas as soluções</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl"></div>

              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="text-indigo-400 w-6 h-6" />
              </div>

              {/* Icon with Animation */}
              <div className="mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                {index === 0 && (
                  <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Code2 className="w-7 h-7 text-indigo-500" />
                  </div>
                )}
                {index === 1 && (
                  <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-green-500" />
                  </div>
                )}
                {index === 2 && (
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Cpu className="w-7 h-7 text-purple-500" />
                  </div>
                )}
              </div>

              {/* Number Badge */}
              <div className="absolute top-6 left-6 text-6xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-display font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-gray-500 border border-gray-800 px-3 py-1.5 rounded-full group-hover:border-indigo-500/30 group-hover:text-indigo-300 group-hover:bg-indigo-500/5 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-500 font-mono text-sm">
            Stack completa para escalar do MVP ao unicórnio 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;