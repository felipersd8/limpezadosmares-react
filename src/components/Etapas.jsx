import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Anchor } from 'lucide-react';

const Etapas = ({ data = [] }) => {
  // If no data yet, use placeholders that match the User's "Etapa" concept
  const defaultEtapas = [
    { title: "20ª Etapa - Balneário Camboriú", date: "Março 2024", location: "Ilha do Siri", img: "/images/hero-scuba.png" },
    { title: "19ª Etapa - Florianópolis", date: "Dezembro 2023", location: "Praia do Forte", img: "/images/logo-white.png" },
    { title: "18ª Etapa - Itapema", date: "Setembro 2023", location: "Canto da Praia", img: "" },
  ];

  const displayData = data.length > 0 ? data : defaultEtapas;

  return (
    <section id="etapas" className="py-32 relative overflow-hidden">
      <div className="container-mega">
        <div className="mb-20">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Nossa Jornada
          </span>
          <h2 className="text-4xl md:text-7xl font-black">
            ETAPAS DO <br />
            <span className="text-reveal">PROJETO</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayData.map((etapa, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className="glass-card overflow-hidden h-full flex flex-col">
                {/* Image Placeholder/Real */}
                <div className="relative h-64 overflow-hidden">
                  {etapa.img ? (
                    <img 
                      src={etapa.img} 
                      alt={etapa.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center text-primary/20">
                      <Anchor size={64} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60" />
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-4 text-[10px] font-bold tracking-widest text-primary uppercase">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {etapa.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {etapa.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">
                    {etapa.title}
                  </h3>
                  <button className="mt-auto text-[10px] font-black tracking-[0.3em] uppercase text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                    Ver detalhes —
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Etapas;
