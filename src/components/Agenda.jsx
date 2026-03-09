import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Anchor } from 'lucide-react';

const Agenda = () => {
  return (
    <section id="agenda" className="py-24 relative overflow-hidden bg-[#2596be]">
      {/* Ocean Wave Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg className="absolute bottom-0 w-full h-[500px]" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="#2a2a6b" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
              M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,218.7C672,192,768,160,864,149.3C960,139,1056,149,1152,176C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            " />
          </path>
        </svg>
        <svg className="absolute bottom-0 w-full h-[400px] left-[-100px]" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="#3489c9" fillOpacity="0.4" d="M0,224L60,208C120,192,240,160,360,170.7C480,181,600,235,720,245.3C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
            <animate attributeName="d" dur="15s" repeatCount="indefinite" values="
              M0,224L60,208C120,192,240,160,360,170.7C480,181,600,235,720,245.3C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
              M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,213.3C840,203,960,149,1080,144C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
              M0,224L60,208C120,192,240,160,360,170.7C480,181,600,235,720,245.3C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z
            " />
          </path>
        </svg>
      </div>
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
            
            <h2 className="text-4xl md:text-8xl font-black mb-8 text-white leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]" style={{ fontFamily: 'Syncopate, sans-serif' }}>
              Vem aí: <br/>
              <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)] animate-pulse">21/03</span>
            </h2>
            
            <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-md border border-white/10 mb-8 max-w-xl">
              <p className="text-xl text-white mb-4 leading-relaxed font-bold">
                Próxima Etapa: <span className="text-cyan-300 underline underline-offset-8 decoration-cyan-400/60">Praia do Tinguá</span>.<br/>
              </p>
              <p className="text-lg text-white/90 mb-4 font-medium leading-relaxed">
                Governador Celso Ramos/SC. Ação especial em alusão ao Dia Mundial da Água!
              </p>
              <div className="flex items-center gap-3 text-cyan-400 font-black text-xl bg-cyan-400/10 p-4 rounded-xl border border-cyan-400/20">
                <span>📅 21 de março</span>
                <span className="text-white/40">·</span>
                <span>Das 9h às 12h</span>
              </div>
            </div>

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
