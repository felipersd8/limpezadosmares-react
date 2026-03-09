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
              <span className="text-primary drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]">21/03</span>
            </h2>
            
            <p className="text-xl text-text-muted mb-10 leading-relaxed font-light max-w-xl">
              Próxima Etapa: <span className="text-white font-bold">Praia do Tinguá</span>.<br/> 
              Governador Celso Ramos. Ação especial em alusão ao Dia Mundial da Água! 
              A saída do barco é em Canasvieiras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button 
                onClick={() => window.location.href = '/inscricao'} 
                className="btn-2026 shadow-glow inline-flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inscrição Praia
                <Anchor size={18} />
              </motion.button>

              <motion.a 
                href="https://wa.me/5548999330062?text=Olá, gostaria de me inscrever para a etapa embarcada/mergulho no Tinguá." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-2026 !bg-primary !text-white shadow-glow inline-flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Vagas Embarcado
                <Anchor size={18} />
              </motion.a>
            </div>

            <p className="text-xs text-text-muted italic max-w-sm">
              * Inscrição normal para categorias Tartaruga e Estrela do Mar. Vagas para embarque/mergulho sob consulta e aprovação via WhatsApp.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-10 glass-2026 p-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 w-full">
              <h3 className="text-sm font-bold text-center mb-6 tracking-[0.2em] text-text-muted uppercase">Patrocinador Mantenedor</h3>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl flex justify-center shadow-2xl hover:bg-white transition-colors duration-300">
                <img 
                  src="/images/logofort.png" 
                  alt="Fort Atacadista" 
                  className="max-h-[80px] object-contain hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
            
            <div className="relative z-10 w-full pt-10 border-t border-white/5">
              <h3 className="text-sm font-bold text-center mb-6 tracking-[0.2em] text-text-muted uppercase">Apoiadores Oficiais</h3>
              <div className="flex justify-center gap-10 items-center flex-wrap bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl hover:bg-white transition-colors duration-300">
                <img src="/images/navitec.jpeg" alt="Navitec" className="max-h-[50px] object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300" />
                <img src="/images/sitelimpezadosmares.jpg" alt="Apoiador Limpeza" className="max-h-[50px] object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300" />
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
