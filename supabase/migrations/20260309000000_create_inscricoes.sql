create table public.inscricoes (
  id          uuid primary key default gen_random_uuid(),
  nome        text not null,
  email       text not null,
  whatsapp    text not null,
  cidade      text not null,
  categoria   text not null,
  etapa       text not null default 'Etapa Tinguá',
  created_at  timestamptz not null default now()
);

-- Habilita RLS
alter table public.inscricoes enable row level security;

-- Qualquer pessoa pode inserir (formulário público)
create policy "Insercao publica"
  on public.inscricoes
  for insert
  to anon
  with check (true);

-- Somente service_role / usuários autenticados podem ler
create policy "Leitura autenticada"
  on public.inscricoes
  for select
  to authenticated
  using (true);
