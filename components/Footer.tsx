import React from 'react';
import { Instagram, Linkedin, Twitter, ArrowUpRight, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-brand-dark to-black text-white pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Left Column - CTA */}
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-medium mb-8 leading-tight">
              Vamos construir <br />
              <span className="text-gray-500">algo</span> <span className="text-gradient-accent">icônico</span>.
            </h2>
            <a
              href="mailto:hello@blend.agency"
              className="group inline-flex items-center gap-4 text-2xl hover:text-indigo-400 transition-all duration-300 border-b-2 border-white/20 pb-2 hover:border-indigo-400"
            >
              <Mail className="w-6 h-6" />
              hello@blend.agency
              <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <p className="text-3xl font-display font-bold text-white">24h</p>
                <p className="text-gray-500 text-sm">Resposta</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">100%</p>
                <p className="text-gray-500 text-sm">Remoto</p>
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-12">
              {/* Location */}
              <div>
                <h4 className="font-mono text-indigo-400 text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  São Paulo
                </h4>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Av. Paulista, 1000<br />
                  Bela Vista, SP
                </p>
              </div>

              {/* Social */}
              <div>
                <h4 className="font-mono text-indigo-400 text-sm mb-4 uppercase tracking-wider">Social</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="group w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  >
                    <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="group w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  >
                    <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="group w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  >
                    <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-mono gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p>&copy; {new Date().getFullYear()} Blend Agency. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors hover:underline">Termos de Serviço</a>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-xs font-mono">
            Crafted with ❤️ and ☕ in São Paulo, Brazil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;