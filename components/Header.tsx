import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projetos', href: '#work' },
  { name: 'A Agência', href: '#agency' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
             <div className="w-4 h-4 bg-black rounded-full mix-blend-screen animate-pulse-slow"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">BLEND.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest text-xs"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            Começar Projeto <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-3xl font-display font-bold text-white hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="mt-8 px-8 py-4 bg-white text-black rounded-full text-sm font-bold uppercase tracking-widest"
          onClick={() => setIsOpen(false)}
        >
          Vamos Conversar
        </a>
      </div>
    </header>
  );
};

export default Header;