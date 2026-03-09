import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MousePointer2, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.15]);

  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-0 pb-0 bg-bg">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1, scale, opacity }}
        className="absolute inset-0 z-0 origin-bottom h-full w-full"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videohome.mp4" type="video/mp4" />
        </video>
        {/* Deep Sea Overlay - Brand Identity Colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a6b]/40 via-[#2596be]/60 to-[#2596be] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2596be] via-transparent to-transparent z-10" />
      </motion.div>

      {/* Main Content */}
      <div className="container-mega relative z-20 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-8 block drop-shadow-lg">
              Projeto Limpeza dos Mares 
            </span>
            <h1 className="text-[clamp(1.5rem,7vw,2.5rem)] sm:text-6xl md:text-8xl lg:text-[7rem] font-bold mb-8 leading-[0.9] tracking-tighter text-white drop-shadow-2xl" style={{ fontFamily: 'Syncopate, sans-serif' }}>
              UM OCEANO <br />
              <span className="text-reveal inline-block mt-4">DESLUMBRANTE</span> <br />
              COMEÇA AQUI
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-16 font-light leading-relaxed drop-shadow-md"
          >
            Desde 2014, transformamos a realidade dos nossos mares. Junte-se à missão que já removeu mais de 193 toneladas de resíduos e inspira o mundo.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <button className="btn-2026 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]">
              DESCUBRA A MISSÃO
            </button>
            <span className="text-sm font-bold tracking-widest text-text-muted hover:text-white transition-colors uppercase flex items-center gap-3">
              <MousePointer2 size={16} className="text-primary animate-pulse" />
              Role para explorar
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-primary opacity-60 hidden md:flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-white/50">Scroll</span>
        <ChevronDown size={32} />
      </motion.div>

      {/* Decorative Blobs */}
      <div className="ocean-blob w-[600px] h-[600px] bg-primary -top-48 -left-48 mix-blend-screen" />
      <div className="ocean-blob w-[500px] h-[500px] bg-secondary -bottom-48 -right-48 mix-blend-screen" />
    </section>
  );
};

export default Hero;
