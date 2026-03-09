import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ from, to, duration = 2, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { label: "Resíduos Removidos", value: 191, suffix: "T+", sub: "Toneladas de impacto" },
    { label: "Etapas Realizadas", value: 42, suffix: "+", sub: "Ações coordenadas" },
    { label: "Anos de História", value: 11, suffix: "", sub: "Desde 2014" },
    { label: "Voluntários", value: 5000, suffix: "+", sub: "Engajamento total" },
  ];

  return (
    <section id="stats" className="relative py-32">
      <div className="container-mega">
        <div className="glass-2026 p-16 md:p-24 overflow-hidden relative">
          {/* Animated Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 text-center mb-20">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Resultados Mensuráveis
            </span>
            <h2 className="text-3xl md:text-7xl font-black">
              NOSSO <span className="text-reveal">IMPACTO</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="text-center"
              >
                <div className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                  <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">
                  {stat.label}
                </div>
                <div className="text-text-muted text-[10px] uppercase tracking-widest font-medium">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
