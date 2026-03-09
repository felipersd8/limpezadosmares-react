import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts.json';

const PostDetails = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug || p.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-background pt-20">
        <h2 className="text-4xl font-bold mb-4 text-white">Etapa não encontrada</h2>
        <Link to="/noticias" className="btn-primary mt-6">Voltar para Etapas</Link>
      </div>
    );
  }

  const images = post.images || (post.image ? [post.image] : []);

  return (
    <article className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          to="/#etapas" 
          className="inline-flex items-center text-primary font-bold mb-8 hover:text-white transition-colors tracking-widest text-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="15 19l-7-7 7-7" />
          </svg>
          VOLTAR PARA AS ETAPAS
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-bold tracking-widest uppercase text-sm px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              {post.date || '2025-01-01'}
            </span>
            <span className="text-text-muted text-sm font-medium tracking-wider uppercase">
              {post.category || 'Etapa'}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-sm" style={{ fontFamily: 'Syncopate, sans-serif' }}>
            {post.title}
          </h1>
          
          {images.length > 0 && (
            <div className="rounded-[2.5rem] overflow-hidden glass p-3 mb-16 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10 pointer-events-none" />
              <img 
                src={images[0]} 
                alt={post.title} 
                className="w-full h-[60vh] rounded-[2rem] object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                onError={(e) => {
                   e.target.style.display = 'none';
                }}
              />
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-xl max-w-none 
            [&>p]:text-text-muted [&>p]:mb-8 [&>p]:leading-relaxed [&>p]:font-light
            [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-16 [&>h2]:mb-8 [&>h2]:text-white [&>h2]:tracking-tight
            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:text-white/90
            [&>ul]:text-text-muted [&>ul]:list-none [&>ul]:pl-0 [&>ul]:mb-8
            [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:mb-3
            [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-3 [&>ul>li::before]:w-2 [&>ul>li::before]:h-2 [&>ul>li::before]:bg-primary [&>ul>li::before]:rounded-full
            [&>figure]:my-16 [&>figure]:rounded-3xl [&>figure]:overflow-hidden [&>figure]:glass [&>figure]:p-3 [&>figure]:shadow-xl
            [&>figure>img]:w-full [&>figure>img]:rounded-2xl [&>figure>img]:transition-transform [&>figure>img]:duration-700 [&>figure:hover>img]:scale-[1.02]
            [&>img]:w-full [&>img]:rounded-3xl [&>img]:my-16 [&>img]:glass [&>img]:p-3 [&>img]:shadow-xl [&>img]:transition-transform [&>img]:duration-700 hover:[&>img]:scale-[1.02]
            [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:my-10 [&>blockquote]:text-white/80"
        >
          {post.content ? post.content.split('\n').filter(p => p.trim()).map((paragraph, idx) => (
             <p key={idx}>{paragraph}</p>
          )) : null}
        </div>
        
        {images.length > 1 && (
          <div className="mt-20 pt-16 border-t border-white/10">
            <h3 className="text-4xl font-bold mb-10 text-white" style={{ fontFamily: 'Syncopate, sans-serif' }}>Galeria da Etapa</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {images.slice(1).map((img, idx) => (
                  <div key={idx} className="rounded-3xl overflow-hidden glass p-2 hover:-translate-y-2 transition-transform duration-500 cursor-pointer group shadow-glass">
                     <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
                     <img src={img} alt={`Galeria ${idx}`} className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700" loading="lazy" onError={(e) => { e.target.style.display='none' }} />
                  </div>
               ))}
            </div>
          </div>
        )}

        <div className="mt-32 pt-16 border-t border-white/5 bg-gradient-to-b from-primary/5 to-transparent rounded-[3rem] p-12 text-center glass shadow-2xl relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md" style={{ fontFamily: 'Syncopate, sans-serif' }}>Junte-se ao Movimento</h3>
            <p className="text-text-muted mb-10 text-xl font-light max-w-2xl mx-auto leading-relaxed">Cada resíduo retirado é uma vitória para o oceano. Compartilhe essa etapa e faça parte da nossa história de preservação.</p>
            <Link to="/#etapas" className="btn-primary flex items-center justify-center mx-auto w-fit px-8 py-4 text-lg shadow-glow hover:scale-105 transition-all">
              Conheça Mais Etapas
              <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostDetails;
