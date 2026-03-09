import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Agenda from './components/Agenda';
import Blog from './components/Blog';
import PostDetails from './components/PostDetails';

const Home = () => (
  <>
    <Hero />
    <Features />
    <Stats />
    <Agenda />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen pt-20">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<Blog />} />
            <Route path="/noticia/:slug" element={<PostDetails />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="glass mt-20 py-12 text-center border-t border-white/5">
          <div className="container mx-auto px-4">
               <Link to="/" className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group overflow-hidden border border-white/5 hover:border-primary/20 transition-colors">
                 <img 
                   src="/images/logo-blue.png" 
                   alt="Logo" 
                   className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110"
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
    </Router>
  );
}

export default App;
