-- Garante que anon pode inserir e authenticated pode ler
grant usage on schema public to anon, authenticated;
grant insert on public.inscricoes to anon;
grant select on public.inscricoes to authenticated;
