import React from 'react';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-medium mb-8">
              Vamos construir <br />
              <span className="text-gray-500">algo</span> icônico.
            </h2>
            <a href="mailto:hello@blend.agency" className="inline-flex items-center gap-4 text-2xl hover:text-indigo-400 transition-colors border-b border-white/20 pb-2 hover:border-indigo-400">
              hello@blend.agency <ArrowUpRight />
            </a>
          </div>

          <div className="flex flex-col justify-end">
             <div className="grid grid-cols-2 gap-8">
               <div>
                 <h4 className="font-mono text-gray-500 text-sm mb-4">SÃO PAULO</h4>
                 <p className="text-lg">Av. Paulista, 1000<br/>Bela Vista, SP</p>
               </div>
               <div>
                 <h4 className="font-mono text-gray-500 text-sm mb-4">SOCIAL</h4>
                 <div className="flex gap-4">
                   <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                     <Instagram size={18} />
                   </a>
                   <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                     <Linkedin size={18} />
                   </a>
                   <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                     <Twitter size={18} />
                   </a>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} Blend Agency. Todos os direitos reservados.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;