# Biblioteca de Prompts — @itspauloestevao

## O que tem aqui

| Arquivo | Para que serve |
|---|---|
| `conteudos.js` | **O único arquivo que você edita.** Nome, Instagram (também é o contato via DM), oferta e a lista de conteúdos. |
| `novo.html` | Gerador: preenche o formulário e ele cria o código do conteúdo novo + o link do ManyChat. |
| `index.html` | Página inicial: busca, filtros por ferramenta e cards (Abrir prompt · GitHub · Salvar). |
| `post.html` | Modelo da página de cada guia (barra fixa, etapas, botões de copiar, download offline). |
| `assets/` | Visual e funcionamento. Não precisa mexer. |
| `imagens/` | Imagens que você quiser usar nos guias. |
| `_redirects` | Faz o link `/p/nome-do-conteudo` funcionar (Cloudflare Pages e Netlify). |
| `vercel.json` | Mesmo papel, caso um dia use a Vercel. |

## Onde hospedar: Cloudflare Pages + GitHub (grátis)

Por que essa e não as outras, para quem publica todo dia:
- **Cloudflare Pages:** 500 publicações por mês, tráfego ilimitado, pode usar comercialmente. Sobra muito.
- **Netlify grátis:** cada publicação gasta 15 dos 300 créditos do mês, então o limite é umas 20 por mês.
  Publicando todo dia, o site é pausado antes do fim do mês.
- **Vercel grátis (Hobby):** só para uso pessoal e não comercial. Com venda de curso ou link de afiliado, já não se encaixa.

### Configuração (uma vez só, ~15 min)
1. Crie uma conta no **github.com** → *New repository* (ex.: `itspauloestevao`) → *uploading an existing file* →
   arraste **o conteúdo** da pasta do site (não a pasta em si) → *Commit changes*.
2. Crie uma conta em **dash.cloudflare.com** → *Workers & Pages* → *Create* → aba *Pages* →
   *Connect to Git* → escolha o repositório. Em "Project name" coloque **itspauloestevao**
   (é isso que vira o endereço grátis `https://itspauloestevao.pages.dev`).
   Em "Build settings": Framework = **None**, Build command = **vazio**, Output directory = **/** (ou vazio). *Save and Deploy*.
3. Domínio próprio (opcional, pode ser feito depois): no projeto, *Custom domains* → *Set up a domain* → digite o seu domínio.
   O jeito mais simples é mover o DNS do domínio para a Cloudflare (no Registro.br: *DNS → Alterar servidores DNS*
   e cole os dois servidores que a Cloudflare mostrar). O HTTPS é automático.

## Rotina diária (2 minutos, dá para fazer pelo celular)

1. Abra `itspauloestevao.pages.dev/novo.html`, preencha e clique **Copiar código**.
   (Ou mande o roteiro do post para o Claude e peça o bloco pronto.)
2. No GitHub, abra `conteudos.js` → ícone de lápis (*Edit*) → cole logo abaixo de `window.CONTEUDOS = [` → *Commit changes*.
3. Em ~1 minuto a página está no ar. Copie o link no gerador e cole no ManyChat.

## ManyChat

*Automation → New → Instagram → Comments*: palavra-chave = a mesma do conteúdo (ex.: `CORTES`).
Resposta na DM com botão para `https://itspauloestevao.pages.dev/p/slug-do-conteudo`.
Dica: a busca da central também encontra pela palavra-chave, então quem chega pela página inicial acha o conteúdo digitando a palavra do reel.

## Dicas

- Palavras do título entre `*asteriscos*` ganham o destaque prateado: `"Seu *editor de cortes* automático com IA"`.
- O **slug** não pode se repetir e não deve mudar depois de publicado (senão o link do ManyChat quebra).
- Materiais publicados há menos de 2 dias ganham o selo **Recente** automaticamente.
- A oferta (curso, comunidade) aparece no topo e no fim de cada tutorial quando você preenche `oferta.url` no `conteudos.js`.
- O botão **Salvar** gera um arquivo HTML do tutorial que abre até sem internet, com os botões de copiar funcionando.

## Quando registrar o domínio

Nada muda no site. Só adicione o domínio em *Custom domains* na Cloudflare e, nos próximos posts,
troque o endereço no campo "Endereço do site" do gerador. Os links antigos `.pages.dev` continuam funcionando.
