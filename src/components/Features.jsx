import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trash2, Award, Zap } from 'lucide-react';

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const cards = [
    {
      icon: <Users size={32} />,
      title: "Voluntários",
      desc: "Uma rede global de pessoas dedicadas a proteger o ecossistema marinho."
    },
    {
      icon: <Trash2 size={32} />,
      title: "Ações Reais",
      desc: "Mutirões intensivos de remoção de resíduos em todo o litoral catarinense."
    },
    {
      icon: <Award size={32} />,
      title: "Reconhecimento",
      desc: "Premiado como um dos projetos ambientais mais eficazes do Brasil."
    },
    {
      icon: <Zap size={32} />,
      title: "Inovação",
      desc: "Uso de tecnologias modernas para triagem e destinação correta de resíduos."
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container-mega">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
              Nossa Infraestrutura
            </span>
            <h2 className="text-4xl md:text-6xl font-black leading-none">
              PILARES DA <br />
              <span className="text-reveal">TRANSFORMAÇÃO</span>
            </h2>
          </div>
          <p className="text-text-muted text-lg max-w-sm font-medium">
            Atuamos em múltiplas frentes para garantir que o oceano continue sendo fonte de vida.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="glass-card p-10 flex flex-col group h-full"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 text-primary">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
