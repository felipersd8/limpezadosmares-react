import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('projeto'), path: '/#features' },
    { name: t('etapas'), path: '/#etapas' },
    { name: t('impacto'), path: '/#stats' },
    { name: t('noticias'), path: '/noticias' },
    { name: t('agenda'), path: '/#agenda' },
    { name: t('loja'), path: '/loja' },
  ];

  return (
    <header 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-700 px-4 flex justify-center w-full`}
    >
      <nav className={`w-full transition-all duration-700 origin-top transform ${isScrolled ? 'max-w-4xl scale-95 translate-y-2' : 'max-w-7xl'}`}>
        <div className={`glass-2026 px-6 py-3 flex items-center justify-between transition-all duration-700 shadow-glass ${isScrolled ? 'rounded-[2rem] bg-secondary/80 border-white/10' : 'rounded-[1.5rem] bg-primary/20 backdrop-blur-md border-white/5 hover:border-white/20'}`}>
          {/* Logo */}
            <Link to="/" className="flex items-center group relative z-20">
              <img 
                src="/uploads/2025/03/LOGO-BRANCO-FUNDO-TRANSPARENTE-1-1024x889.png" 
                alt="Limpeza dos Mares Logo" 
                className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute -inset-2 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
            </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6 bg-white/5 px-6 py-2 rounded-full border border-white/5">
              {navLinks.map((link) => {
                // Match exact path for styling, or hash anchor
                const isActive = location.pathname === link.path || location.hash === link.path.replace('/', '');
                
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[0.7rem] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative group overflow-hidden px-1 py-1
                    ${isActive ? 'text-white' : 'text-text-muted hover:text-white'}`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-primary transform origin-left transition-transform duration-300 ease-out 
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>
                );
              })}
            </div>
            
            <Link to="/inscricao" className="btn-2026 py-2 px-6 text-xs bg-white text-bg hover:bg-primary shadow-glow">
              {t('inscreva_se')}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-4 glass-2026 p-6 flex flex-col space-y-4 shadow-2xl border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-bg/95 z-0" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-[50px] z-0 rounded-full" />
              
              <div className="relative z-10 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-bold tracking-widest uppercase py-3 border-b border-white/5 transition-colors ${
                      location.pathname === link.path ? 'text-primary pl-2' : 'text-white hover:text-primary hover:pl-2'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <button className="btn-2026 w-full mt-4 text-xs py-3 relative z-10">{t('quero_ajudar')}</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
