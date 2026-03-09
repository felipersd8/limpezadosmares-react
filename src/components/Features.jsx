import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPath = ({ d }) => (
  <motion.path
    d={d}
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
  />
);

const AnimatedCircle = ({ cx, cy, r }) => (
  <motion.circle
    cx={cx} cy={cy} r={r}
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
  />
);

const AnimatedPolygon = ({ points }) => (
  <motion.polygon
    points={points}
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
  />
);

const AnimatedPolyline = ({ points }) => (
  <motion.polyline
    points={points}
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
  />
);

const IconWrapper = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48" height="48"
    viewBox="0 0 24 24" fill="none"
    stroke="url(#gradient-icon)" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="gradient-icon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#818cf8" />
      </linearGradient>
    </defs>
    {children}
  </svg>
);

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const cards = [
    {
      icon: (
        <IconWrapper>
          <AnimatedPath d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <AnimatedCircle cx="9" cy="7" r="4" />
          <AnimatedPath d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <AnimatedPath d="M16 3.13a4 4 0 0 1 0 7.75" />
        </IconWrapper>
      ),
      title: "Voluntários",
      desc: "Uma rede global de pessoas dedicadas a proteger o ecossistema marinho."
    },
    {
      icon: (
        <IconWrapper>
          <AnimatedPath d="M3 6h18" />
          <AnimatedPath d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <AnimatedPath d="M10 11v6" />
          <AnimatedPath d="M14 11v6" />
        </IconWrapper>
      ),
      title: "Ações Reais",
      desc: "Mutirões intensivos de remoção de resíduos em todo o litoral catarinense."
    },
    {
      icon: (
        <IconWrapper>
          <AnimatedCircle cx="12" cy="8" r="7" />
          <AnimatedPolyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </IconWrapper>
      ),
      title: "Reconhecimento",
      desc: "Premiado como um dos projetos ambientais mais eficazes do Brasil."
    },
    {
      icon: (
        <IconWrapper>
          <AnimatedPolygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </IconWrapper>
      ),
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
