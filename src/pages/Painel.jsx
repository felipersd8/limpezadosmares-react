import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import * as XLSX from 'xlsx';
import {
  LogOut, Download, Search, Users, RefreshCw,
  MessageCircle, Mail, MapPin, Tag, Calendar,
  Filter, ChevronDown, Anchor, AlertCircle, Loader2,
  TrendingUp, CheckCircle2
} from 'lucide-react';

// ─── Login ───────────────────────────────────────────────────────────────────
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError('E-mail ou senha incorretos.');
      setLoading(false);
    }
    // onLogin é chamado pelo listener de sessão no componente pai
  };

  return (
    <div className="min-h-screen bg-[#05203a] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <img src="/images/logo-blue.png" alt="Limpeza dos Mares" className="h-16 mx-auto mb-4" />
          <h1 className="text-white font-bold text-xl tracking-widest uppercase" style={{ fontFamily: 'Syncopate, sans-serif' }}>
            Painel Admin
          </h1>
          <p className="text-[#93c5d8] text-sm mt-1">Limpeza dos Mares</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-5">
          {error && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl p-3 text-sm">
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-[10px] font-black tracking-widest uppercase text-[#93c5d8]">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@limpezadosmares.org"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#10b981]/50 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black tracking-widest uppercase text-[#93c5d8]">Senha</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#10b981]/50 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#10b981] hover:bg-[#0d9e6e] text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Anchor size={18} />}
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
};

// ─── Badge categoria ─────────────────────────────────────────────────────────
const CategoriaBadge = ({ cat }) => {
  const map = {
    voluntario: { label: 'Voluntário Praia', color: 'bg-[#10b981]/20 text-[#10b981] border-[#10b981]/30' },
    tartaruga:  { label: 'Tartaruga (Kids)', color: 'bg-[#38bdf8]/20 text-[#38bdf8] border-[#38bdf8]/30' },
    estrela:    { label: 'Estrela do Mar',   color: 'bg-purple-400/20 text-purple-300 border-purple-400/30' },
  };
  const { label, color } = map[cat] ?? { label: cat, color: 'bg-white/10 text-white border-white/20' };
  return (
    <span className={`text-[10px] font-bold tracking-wider uppercase border rounded-full px-2.5 py-0.5 ${color}`}>
      {label}
    </span>
  );
};

// ─── Formata número para WhatsApp ─────────────────────────────────────────────
const waLink = (numero) => {
  const digits = numero.replace(/\D/g, '');
  const br = digits.startsWith('55') ? digits : `55${digits}`;
  return `https://wa.me/${br}`;
};

// ─── Formata data ─────────────────────────────────────────────────────────────
const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
};

// ─── Dashboard ───────────────────────────────────────────────────────────────
const Dashboard = ({ user, onLogout }) => {
  const [inscricoes, setInscricoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterEtapa, setFilterEtapa] = useState('');
  const [filterCat, setFilterCat] = useState('');

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('inscricoes')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setInscricoes(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  // listas únicas para filtros
  const etapas = useMemo(() => [...new Set(inscricoes.map(i => i.etapa))], [inscricoes]);

  // dados filtrados
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return inscricoes.filter(i => {
      const matchSearch = !q || i.nome.toLowerCase().includes(q) || i.email.toLowerCase().includes(q) || i.cidade.toLowerCase().includes(q) || i.whatsapp.includes(q);
      const matchEtapa = !filterEtapa || i.etapa === filterEtapa;
      const matchCat   = !filterCat   || i.categoria === filterCat;
      return matchSearch && matchEtapa && matchCat;
    });
  }, [inscricoes, search, filterEtapa, filterCat]);

  // stats
  const stats = useMemo(() => ({
    total:      inscricoes.length,
    voluntario: inscricoes.filter(i => i.categoria === 'voluntario').length,
    tartaruga:  inscricoes.filter(i => i.categoria === 'tartaruga').length,
    estrela:    inscricoes.filter(i => i.categoria === 'estrela').length,
  }), [inscricoes]);

  // export XLSX
  const exportXLSX = () => {
    const rows = filtered.map(i => ({
      'Nome':       i.nome,
      'E-mail':     i.email,
      'WhatsApp':   i.whatsapp,
      'Cidade':     i.cidade,
      'Categoria':  i.categoria,
      'Etapa':      i.etapa,
      'Inscrição':  formatDate(i.created_at),
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Inscrições');
    // largura das colunas
    ws['!cols'] = [30,30,20,20,20,20,22].map(w => ({ wch: w }));
    XLSX.writeFile(wb, `inscricoes_${new Date().toISOString().slice(0,10)}.xlsx`);
  };

  return (
    <div className="min-h-screen bg-[#05203a] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* ── Top bar ── */}
      <div className="sticky top-0 z-50 bg-[#05203a]/95 backdrop-blur border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo-blue.png" alt="Logo" className="h-8" />
          <div>
            <h1 className="text-white font-bold text-sm tracking-widest uppercase" style={{ fontFamily: 'Syncopate, sans-serif' }}>
              Painel
            </h1>
            <p className="text-[#93c5d8] text-[10px]">{user.email}</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-[#93c5d8] hover:text-white text-sm transition-colors px-3 py-1.5 rounded-xl hover:bg-white/5"
        >
          <LogOut size={16} /> Sair
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Total inscritos', value: stats.total,      icon: Users,       color: 'text-[#10b981]', bg: 'bg-[#10b981]/10' },
            { label: 'Voluntário Praia', value: stats.voluntario, icon: TrendingUp,  color: 'text-[#10b981]', bg: 'bg-[#10b981]/10' },
            { label: 'Tartaruga (Kids)', value: stats.tartaruga,  icon: CheckCircle2, color: 'text-[#38bdf8]', bg: 'bg-[#38bdf8]/10' },
            { label: 'Estrela do Mar',   value: stats.estrela,    icon: Tag,          color: 'text-purple-400', bg: 'bg-purple-400/10' },
          ].map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                <Icon size={20} className={color} />
              </div>
              <div>
                <div className="text-white text-2xl font-black">{value}</div>
                <div className="text-[#93c5d8] text-[10px] uppercase tracking-wider">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Filtros + ações ── */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#93c5d8]" />
            <input
              type="text"
              placeholder="Buscar por nome, e-mail, cidade ou WhatsApp..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#10b981]/40 transition-all"
            />
          </div>

          {/* filtro etapa */}
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#93c5d8]" />
            <select
              value={filterEtapa}
              onChange={e => setFilterEtapa(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-2.5 pl-8 pr-8 text-sm text-white focus:outline-none focus:border-[#10b981]/40 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#05203a]">Todas as etapas</option>
              {etapas.map(e => <option key={e} value={e} className="bg-[#05203a]">{e}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#93c5d8] pointer-events-none" />
          </div>

          {/* filtro categoria */}
          <div className="relative">
            <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#93c5d8]" />
            <select
              value={filterCat}
              onChange={e => setFilterCat(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-2.5 pl-8 pr-8 text-sm text-white focus:outline-none focus:border-[#10b981]/40 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#05203a]">Todas categorias</option>
              <option value="voluntario" className="bg-[#05203a]">Voluntário Praia</option>
              <option value="tartaruga"  className="bg-[#05203a]">Tartaruga (Kids)</option>
              <option value="estrela"    className="bg-[#05203a]">Estrela do Mar</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#93c5d8] pointer-events-none" />
          </div>

          {/* botões */}
          <button
            onClick={fetchData}
            title="Atualizar"
            className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-[#93c5d8] hover:text-white rounded-xl px-4 py-2.5 text-sm transition-all"
          >
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
          </button>

          <button
            onClick={exportXLSX}
            className="flex items-center gap-2 bg-[#10b981] hover:bg-[#0d9e6e] text-white font-bold rounded-xl px-5 py-2.5 text-sm transition-all shrink-0"
          >
            <Download size={15} />
            Exportar XLSX
          </button>
        </div>

        {/* ── Tabela ── */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {/* header */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <span className="text-white font-semibold text-sm">
              {filtered.length} inscrição{filtered.length !== 1 ? 'ões' : ''}
              {filtered.length !== inscricoes.length && <span className="text-[#93c5d8]"> (de {inscricoes.length})</span>}
            </span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20 text-[#93c5d8]">
              <Loader2 size={28} className="animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-[#93c5d8] gap-3">
              <Users size={36} className="opacity-30" />
              <p className="text-sm">Nenhuma inscrição encontrada.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5 text-[10px] uppercase tracking-widest text-[#93c5d8]">
                    <th className="text-left px-6 py-3 font-semibold">Nome</th>
                    <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">E-mail</th>
                    <th className="text-left px-4 py-3 font-semibold">WhatsApp</th>
                    <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Cidade</th>
                    <th className="text-left px-4 py-3 font-semibold">Categoria</th>
                    <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell">Etapa</th>
                    <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((i, idx) => (
                    <tr
                      key={i.id}
                      className={`border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors ${idx % 2 === 0 ? '' : 'bg-white/[0.02]'}`}
                    >
                      {/* Nome */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center font-bold text-sm shrink-0">
                            {i.nome.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-white font-medium">{i.nome}</span>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="px-4 py-4 hidden md:table-cell">
                        <a
                          href={`mailto:${i.email}`}
                          className="flex items-center gap-1.5 text-[#93c5d8] hover:text-[#38bdf8] transition-colors"
                        >
                          <Mail size={13} />
                          {i.email}
                        </a>
                      </td>

                      {/* WhatsApp */}
                      <td className="px-4 py-4">
                        <a
                          href={waLink(i.whatsapp)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] rounded-xl px-3 py-1.5 transition-all w-fit font-medium text-xs"
                        >
                          <MessageCircle size={14} />
                          {i.whatsapp}
                        </a>
                      </td>

                      {/* Cidade */}
                      <td className="px-4 py-4 hidden sm:table-cell">
                        <div className="flex items-center gap-1.5 text-[#93c5d8]">
                          <MapPin size={13} />
                          {i.cidade}
                        </div>
                      </td>

                      {/* Categoria */}
                      <td className="px-4 py-4">
                        <CategoriaBadge cat={i.categoria} />
                      </td>

                      {/* Etapa */}
                      <td className="px-4 py-4 hidden lg:table-cell">
                        <div className="flex items-center gap-1.5 text-[#93c5d8] text-xs">
                          <Anchor size={12} className="text-[#10b981]" />
                          {i.etapa}
                        </div>
                      </td>

                      {/* Data */}
                      <td className="px-4 py-4 hidden lg:table-cell">
                        <div className="flex items-center gap-1.5 text-[#93c5d8] text-xs whitespace-nowrap">
                          <Calendar size={12} />
                          {formatDate(i.created_at)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Painel (root) ────────────────────────────────────────────────────────────
const Painel = () => {
  const [session, setSession] = useState(undefined); // undefined = carregando

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // carregando sessão
  if (session === undefined) {
    return (
      <div className="min-h-screen bg-[#05203a] flex items-center justify-center">
        <Loader2 size={32} className="text-[#10b981] animate-spin" />
      </div>
    );
  }

  if (!session) return <LoginScreen />;

  return <Dashboard user={session.user} onLogout={handleLogout} />;
};

export default Painel;
