import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Agenda from './components/Agenda';
import Blog from './components/Blog';
import PostDetails from './components/PostDetails';
import Etapas from './components/Etapas';
import Inscricao from './pages/Inscricao';
import Painel from './pages/Painel';
import Store from './pages/Store';
import DeepSeaWrapper from './components/DeepSeaWrapper';

const Home = () => (
  <>
    <Hero />
    <DeepSeaWrapper>
      <Features />
      <Etapas />
      <Stats />
      <Agenda />
    </DeepSeaWrapper>
  </>
);

// Layout principal (com Header e Footer)
const PublicLayout = ({ children }) => (
  <div className="min-h-screen">
    <Header />
    <main>{children}</main>
    <footer className="glass mt-20 py-12 text-center border-t border-white/5">
      <div className="container mx-auto px-4">
        <Link to="/" className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center group overflow-hidden border border-white/5 hover:border-primary/20 transition-colors mx-auto mb-6">
          <img
            src="/uploads/2025/03/LOGO-BRANCO-FUNDO-TRANSPARENTE-1-1024x889.png"
            alt="Logo"
            className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        <p className="text-text-muted text-lg max-w-xl mx-auto mb-8 font-medium italic">
          "Juntos, transformamos a realidade dos mares e inspiramos mudanças para as próximas gerações."
        </p>
        <div className="flex justify-center space-x-6 mb-8 text-text-muted">
          <span className="hover:text-primary cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Facebook</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Contato</span>
        </div>
        <div className="text-xs text-text-muted opacity-50 uppercase tracking-widest">
          Limpeza dos Mares &copy; {new Date().getFullYear()} — Preservação em Ação
        </div>
      </div>
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        {/* Painel admin — sem Header/Footer */}
        <Route path="/painel" element={<Painel />} />

        {/* Páginas públicas */}
        <Route path="/*" element={
          <PublicLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/noticias" element={<Blog />} />
              <Route path="/noticia/:slug" element={<PostDetails />} />
              <Route path="/inscricao" element={<Inscricao />} />
              <Route path="/loja" element={<Store />} />
            </Routes>
          </PublicLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
