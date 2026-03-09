import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MapPin, Anchor, CheckCircle2 } from 'lucide-react';

const Inscricao = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: '',
    category: 'voluntario'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center container-mega pt-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-2026 p-12 text-center max-w-2xl w-full"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary shadow-[0_0_40px_rgba(16,185,129,0.3)]">
              <CheckCircle2 size={48} />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Inscrição Recebida!</h2>
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            Obrigado, <span className="text-white font-bold">{formData.name}</span>! Sua pré-inscrição para a etapa de <span className="text-primary font-bold">Governador Celso Ramos</span> foi realizada com sucesso. 
            Em breve entraremos em contato via WhatsApp para confirmar os detalhes.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="btn-2026 !bg-primary !text-white"
          >
            Fazer outra inscrição
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] ocean-blob bg-primary/20" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] ocean-blob bg-secondary/20" />

      <div className="container-mega relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Participe da Mudança
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-6">
              INSCRIÇÃO <br />
              <span className="text-reveal">ETAPA TINGUÁ</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto italic">
              "Juntos pelo Dia Mundial da Água. Sua atitude faz a diferença para a vida marinha."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-2026 p-8 md:p-16 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest uppercase text-text-muted ml-2">Nome Completo</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={18} />
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all focus:bg-white/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest uppercase text-text-muted ml-2">E-mail</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={18} />
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all focus:bg-white/10"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest uppercase text-text-muted ml-2">WhatsApp</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={18} />
                  <input 
                    required
                    type="tel" 
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(48) 99999-9999"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all focus:bg-white/10"
                  />
                </div>
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest uppercase text-text-muted ml-2">Cidade</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={18} />
                  <input 
                    required
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Ex: Florianópolis"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all focus:bg-white/10"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="md:col-span-2 space-y-4">
                <label className="text-[10px] font-black tracking-widest uppercase text-text-muted ml-2">Categoria de Participação</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { id: 'voluntario', label: 'Voluntário Praia' },
                    { id: 'tartaruga', label: 'Tartaruga (Kids)' },
                    { id: 'estrela', label: 'Estrela do Mar' },
                    { id: 'mergulho', label: 'Mergulho / Embarcado' }
                  ].map((cat) => (
                    <label key={cat.id} className="cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category" 
                        value={cat.id}
                        checked={formData.category === cat.id}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div className={`p-4 rounded-2xl border transition-all h-full text-center flex flex-col items-center justify-center gap-2 ${
                        formData.category === cat.id 
                          ? 'bg-primary/20 border-primary text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
                          : 'bg-white/5 border-white/10 text-text-muted group-hover:bg-white/10'
                      }`}>
                        <span className="capitalize font-bold text-[10px] tracking-wider leading-tight">{cat.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
                <p className="text-[10px] text-text-muted italic text-center mt-4">
                  * Inscrições para Mergulho e Embarcado estão sujeitas a confirmação de disponibilidade e aprovação prévia.
                </p>
              </div>

              <div className="md:col-span-2 pt-6">
                <button type="submit" className="btn-2026 !w-full !py-5 shadow-glow flex justify-center gap-3">
                  Confirmar Inscrição <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Inscricao;
