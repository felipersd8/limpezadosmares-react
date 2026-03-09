import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Anchor } from 'lucide-react';

const Agenda = () => {
  return (
    <section id="agenda" className="py-24 relative overflow-hidden bg-bg">
      <div className="container-mega relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-5 py-2 rounded-full border border-primary/20 text-primary shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <Calendar size={18} />
              <span className="font-bold tracking-widest text-xs uppercase">Próxima Etapa</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white leading-tight" style={{ fontFamily: 'Syncopate, sans-serif' }}>
              Vem aí: <br/>
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">21/03</span>
            </h2>
            
            <p className="text-xl text-white mb-8 leading-relaxed font-light max-w-xl">
              Próxima Etapa: <span className="text-white font-bold underline decoration-primary/40">Praia do Tinguá</span>.<br/>
              Governador Celso Ramos/SC. Ação especial em alusão ao Dia Mundial da Água!<br/>
              📅 21 de março · Das 9h às 12h
            </p>

            {/* Beach Registration */}
            <div className="mb-6">
              <p className="text-sm text-text-muted mb-3 uppercase tracking-widest font-bold">Inscrições para a Praia — Tartaruga e Estrela do Mar:</p>
              <motion.button
                onClick={() => window.location.href = '/inscricao'}
                className="btn-2026 shadow-glow inline-flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clique aqui para se inscrever!
                <Anchor size={18} />
              </motion.button>
            </div>

            {/* Boat / Dive Registration */}
            <div className="mb-10 p-5 rounded-2xl border border-white/20 bg-white/10 max-w-xl shadow-lg">
              <p className="text-sm font-bold uppercase tracking-widest text-white mb-3">Vagas Embarcado / Mergulhador (Golfinho) — saída de Canasvieiras:</p>
              <p className="text-sm text-white/90 mb-4 leading-relaxed">Vagas limitadas · Inscrições via Acquanauta Floripa:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="https://wa.me/5548999330062?text=Olá, gostaria de me inscrever para a etapa embarcada/mergulho no Tinguá."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-2026 !bg-white !text-secondary shadow-glow inline-flex items-center justify-center gap-3 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp Acquanauta
                  <Anchor size={16} />
                </motion.a>
                <div className="flex flex-col justify-center text-sm text-white font-medium">
                  <span>📞 (48) 99933-0062</span>
                  <span>📞 (48) 3266-1137</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-10 glass-2026 p-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="space-y-12">
              {/* Patrocínio Mantenedor */}
              <div className="flex flex-col items-center">
                <h3 className="text-white/70 text-sm font-bold tracking-[0.2em] mb-8 pb-2 border-b border-white/10">
                  PATROCÍNIO MANTENEDOR
                </h3>
                <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 w-full max-w-[280px] group">
                  <img 
                    src="/uploads/2025/07/logofort.png" 
                    alt="Fort Atacadista" 
                    className="w-full h-auto object-contain filter group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Apoio Oficial */}
              <div className="flex flex-col items-center">
                <h3 className="text-white/70 text-sm font-bold tracking-[0.2em] mb-8 pb-2 border-b border-white/10">
                  APOIO OFICIAL
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl px-4">
                  {[
                    { src: "/uploads/2025/04/LogoSanautica-1-pdf.jpg", alt: "Sanáutica" },
                    { src: "/uploads/2025/07/Marina-Atlantida-Logotipo.png", alt: "Marina Atlântida" },
                    { src: "/uploads/2025/04/LOGO_MARINA_BLUE_FOX_HORIZ_FUNDO_BRANCO.png", alt: "Marina Blue Fox" },
                    { src: "/uploads/2025/04/navitec.jpeg", alt: "Navitec" }
                  ].map((logo, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex items-center justify-center group">
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="max-h-20 w-auto object-contain filter group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen -z-10" />
    </section>
  );
};

export default Agenda;
