import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Anchor } from 'lucide-react';

const Agenda = () => {
  return (
    <section id="agenda" className="py-24 relative overflow-hidden">
      <div className="container-mega relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-white/20 px-5 py-2 rounded-full border border-white/30 text-white shadow-lg backdrop-blur-sm">
              <Calendar size={18} className="text-cyan-300" />
              <span className="font-black tracking-widest text-xs uppercase">Próxima Etapa</span>
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
            className="flex flex-col items-center justify-center gap-10 glass-2026 p-12 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          {/* Sponsorship & Partners with specialized tiers */}
          <div className="space-y-8 w-full">
            {/* Main Sponsor - Diamond Tier */}
            <div className="glass-2026 p-6 border-cyan-500/30 bg-cyan-950/20">
              <h3 className="text-xs font-bold tracking-[0.2em] text-cyan-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-cyan-400/50"></span>
                PATROCINADOR DIAMANTE
              </h3>
              <div className="flex justify-center">
                <img
                  src="/logoforttransparente.png"
                  alt="Fort Atacadista"
                  className="w-full h-auto max-w-[180px] md:max-w-[220px] object-contain hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                />
              </div>
            </div>

            {/* Patrocinadores Oficiais — 2x2 grid com logos generosos */}
            <div className="glass-2026 p-6 border-white/10">
              <h3 className="text-xs font-bold tracking-[0.2em] text-white/60 mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/20"></span>
                PATROCINADORES OFICIAIS
              </h3>
              <div className="grid grid-cols-2 gap-6 items-center justify-items-center">
                <img
                  src="/sanauticalogotransparente.png"
                  alt="Sanáutica"
                  className="w-full h-auto max-w-[150px] object-contain hover:scale-105 transition-all duration-500 drop-shadow-md"
                />
                <img
                  src="/marinaatlantidatransparente.png"
                  alt="Marina Atlântida"
                  className="w-full h-auto max-w-[150px] object-contain hover:scale-105 transition-all duration-500 drop-shadow-md"
                />
                <img
                  src="/bluefoxlogotrasnparente.png"
                  alt="Marina Blue Fox"
                  className="w-full h-auto max-w-[150px] object-contain hover:scale-105 transition-all duration-500 drop-shadow-md"
                />
                <img
                  src="/logonavitectransparente.png"
                  alt="Navitec"
                  className="w-full h-auto max-w-[100px] object-contain hover:scale-105 transition-all duration-500 drop-shadow-md"
                />
              </div>
            </div>

            {/* Apoiadores Oficiais */}
            <div className="glass-2026 p-8 border-white/10">
              <h3 className="text-xs font-bold tracking-[0.2em] text-white/60 mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/20"></span>
                APOIADORES OFICIAIS
              </h3>
              <div className="flex justify-center">
                <img
                  src="/logomanoscomunica%C3%A7%C3%A3ovisual.png"
                  alt="Manos Comunicação Visual"
                  className="w-full h-auto object-contain hover:scale-105 transition-all duration-500 drop-shadow-md"
                />
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
