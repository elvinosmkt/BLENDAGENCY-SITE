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
    <section id="expertise" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h3 className="text-indigo-500 font-mono text-sm tracking-widest mb-4">NOSSAS SOLUÇÕES</h3>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white max-w-2xl">
              Engenharia e estratégia para alavancar negócios.
            </h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex text-white border-b border-white pb-1 hover:text-indigo-400 hover:border-indigo-400 transition-colors">
            Ver todas as soluções
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <div key={service.id} className="group bg-brand-black p-10 hover:bg-zinc-900 transition-colors duration-500 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <ArrowUpRight className="text-white" />
               </div>
               
               <div className="mb-12">
                 {index === 0 && <Code2 className="w-10 h-10 text-indigo-500 mb-6" />}
                 {index === 1 && <TrendingUp className="w-10 h-10 text-green-500 mb-6" />}
                 {index === 2 && <Cpu className="w-10 h-10 text-purple-500 mb-6" />}
               </div>

               <h3 className="text-2xl font-display font-semibold text-white mb-4">{service.title}</h3>
               <p className="text-gray-400 leading-relaxed mb-8">{service.description}</p>
               
               <div className="flex flex-wrap gap-2">
                 {service.tags.map(tag => (
                   <span key={tag} className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;