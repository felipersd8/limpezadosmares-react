import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

const Blog = () => {
  return (
    <section id="etapas" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 mix-blend-screen mix-blend-color-dodge pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 relative">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Ocean Recovery 2026</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text" style={{ fontFamily: 'Syncopate, sans-serif' }}>
            Etapas do Projeto
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Acompanhe o impacto real das nossas operações de limpeza, etapa por etapa. Juntos estamos transformando a realidade dos mares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => {
            const displayImage = post.images && post.images.length > 0 ? post.images[0] : post.image;
            const slug = post.slug || post.id;
            
            return (
              <Link 
                to={`/noticia/${slug}`} 
                key={index}
                className="group relative flex flex-col h-[500px] rounded-3xl overflow-hidden glass hover:glass-hover transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-glass"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-surface">
                  {displayImage ? (
                    <img 
                      src={displayImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 opacity-70 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                      onError={(e) => {
                         e.target.onerror = null;
                         e.target.src = 'https://via.placeholder.com/800x600?text=LdM';
                      }}
                    />
                  ) : null}
                  {/* Overlay Gradient (Oceano Profundo) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent z-10" />
                </div>

                {/* Content */}
                <div className="relative z-20 flex flex-col justify-end h-full p-8">
                  <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-xs font-bold tracking-wider mb-4 shadow-glow">
                      {post.date || '2025-01-01'}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg" style={{ fontFamily: 'Syncopate, sans-serif' }}>
                      {post.title.replace('XXXXVII Etapa', 'Etapa 47').replace('XXXX', 'Etapa')}
                    </h3>
                  </div>
                  
                  {/* Description reveals on hover */}
                  <div className="overflow-hidden">
                    <p className="text-text-muted text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100 mb-6 drop-shadow-md">
                      {post.content ? post.content.replace(/<[^>]+>/g, '').substring(0, 150) : ''}...
                    </p>
                    
                    <div className="flex items-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out delay-200">
                      LER MATÉRIA COMPLETA
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
