/* =============================================================
   CONTEÚDOS DO SITE — o único arquivo que você edita no dia a dia
   -------------------------------------------------------------
   Publicar um conteúdo novo:
     1) Abra /novo.html no seu site, preencha e clique "Copiar código".
     2) Cole logo abaixo da linha  window.CONTEUDOS = [
     3) Salve (no GitHub: "Commit changes"). Em ~1 min a página está no ar em:
          https://itspauloestevao.pages.dev/p/SLUG-DO-CONTEUDO

   Dica de título: palavras entre *asteriscos* ganham o destaque prateado.
     titulo: "Seu *editor de vídeo* pessoal com IA"

   Blocos disponíveis (dentro de "blocos"):
     { tipo: "secao",  rotulo: "Passo 1", titulo: "Título da seção" }
     { tipo: "texto",  conteudo: "Parágrafo. Aceita **negrito** e [link](https://...)." }
     { tipo: "prompt", titulo: "Nome do prompt", conteudo: `texto do prompt` }
     { tipo: "codigo", titulo: "Instalação", conteudo: `comando` }
     { tipo: "passos", itens: ["Passo 1", "Passo 2"] }
     { tipo: "lista",  itens: ["Item", "Item"] }
     { tipo: "dica",   conteudo: "Dica em destaque." }
     { tipo: "alerta", conteudo: "Cuidado importante." }
     { tipo: "imagem", src: "imagens/arquivo.jpg", legenda: "opcional" }
     { tipo: "video",  youtube: "ID_DO_VIDEO" }
     { tipo: "botao",  texto: "Acessar ferramenta", url: "https://..." }
   ============================================================= */

window.SITE = {
  nome: "Paulo Estevão",
  instagram: "itspauloestevao",                 // sem @ — também é o contato (DM)
  titulo: "Biblioteca de *Prompts*",
  descricao: "Tudo o que eu ensino nos vídeos, reunido aqui. Prompts prontos, tutoriais e ferramentas de IA liberados para você aplicar hoje mesmo.",
  aviso: "Chegou pelo Instagram? O conteúdo do vídeo está logo abaixo. ↓",
  categorias: ["Claude", "ChatGPT", "Gemini", "Imagens", "Vídeo", "Produtividade", "Repositórios"],
  // Oferta opcional que aparece no topo e no fim de cada tutorial (deixe url vazia para esconder)
  oferta: {
    botao: "Quero saber mais",
    titulo: "Gostou do conteúdo?",
    texto: "Este tutorial é gratuito. Se quiser ir mais fundo, conheça o meu programa completo.",
    url: "",
  },
};

window.CONTEUDOS = [   
   {
    slug: "gta",
    titulo: "GTA",
    categoria: "Claude",
    data: "2026-11-19",
    palavraChave: "PROMPT GERAÇÃO DE FOTO GTA 6",
    selo: "Prompt GTA 6",
    resumo: "Cole o prompt  abaixo para a geração da sua foto de GTA 6",
    destaques: [],
    github: "",
    blocos: [
      { tipo: "prompt", titulo: "Geração de foto GTA 6", conteudo: `Exactly 10s, 9:16, one static macro shot of the navy jersey from the attached image; camera never moves, same angle, framing and light. Start: bare mesh fabric, no logo. Loose colored threads rise from the weave and pull tight by themselves, no needle, machine or hands, thousands of tiny stitches racing like a real time-lapse. First the gold and purple outline of the big “VI”, then rows of satin stitches fill it with a sunset gradient and purple palms, then the white puffy “grand theft auto” letters stitch on top. Real threads with fibers and sheen, relief rising, fabric puckering. Last second: finished embroidery identical to the image, still. No morphing or glow. Sound: thread pulling, fabric rustle.` },
    ],
  },
  {
    slug: "cortes-automaticos-de-video",
    titulo: "Seu *editor de cortes* automático com IA",
    categoria: "Vídeo",
    data: "2026-11-19",
    palavraChave: "CORTES",
    selo: "prompt pronto",
    resumo: "Um prompt que cria um programa para separar os melhores trechos de um vídeo longo e transformar em cortes verticais legendados.",
    destaques: ["Ferramentas **gratuitas**", "Funciona no seu PC"],
    github: "",
    blocos: [
      { tipo: "secao", rotulo: "O conceito", titulo: "Deixe a transcrição escolher os cortes" },
      { tipo: "texto", conteudo: "Em vez de assistir horas de vídeo, você transcreve o áudio e pede para a IA encontrar os trechos com **começo, meio e fim** que funcionam sozinhos. O programa recorta, deixa vertical e coloca legenda." },
      { tipo: "secao", rotulo: "Passo 1", titulo: "Prepare o computador" },
      { tipo: "codigo", titulo: "Terminal", conteudo: `pip install openai-whisper moviepy` },
      { tipo: "secao", rotulo: "Passo 2", titulo: "Use o prompt" },
      { tipo: "prompt", titulo: "Prompt principal", conteudo:
`Crie um programa em Python que:
1. Receba o arquivo de vídeo [ARQUIVO.mp4] e transcreva o áudio com Whisper.
2. Analise a transcrição e escolha os 8 trechos mais interessantes, de 30 a 60 segundos, que façam sentido sozinhos.
3. Recorte cada trecho, converta para 9:16 e grave a legenda no vídeo.
4. Salve os cortes numerados na pasta /cortes, com um arquivo .txt explicando por que cada trecho foi escolhido.` },
      { tipo: "dica", conteudo: "Comece com um vídeo de até 20 minutos para testar mais rápido." },
    ],
  },
  {
    slug: "5-prompts-para-legendas",
    titulo: "5 prompts para *legendas* que geram comentário",
    categoria: "ChatGPT",
    data: "2026-11-18",
    palavraChave: "LEGENDA",
    selo: "5 prompts prontos",
    resumo: "Frase de abertura, legenda completa, ajuste de tom, versão enxuta e hashtags. Copie, troque os colchetes e use.",
    destaques: ["Serve para ChatGPT, Claude e Gemini"],
    blocos: [
      { tipo: "texto", conteudo: "Copie, troque o que está entre colchetes e cole na IA que você preferir." },
      { tipo: "prompt", titulo: "1. Frase de abertura", conteudo: `Escreva 10 primeiras frases para uma legenda de Instagram sobre [TEMA]. Cada uma deve gerar curiosidade em até 12 palavras.` },
      { tipo: "prompt", titulo: "2. Legenda completa", conteudo: `Escreva uma legenda para um post sobre [TEMA] para um público de [PÚBLICO]. Estrutura: abertura forte, 3 frases de valor, convite para comentar a palavra [PALAVRA].` },
      { tipo: "prompt", titulo: "3. Ajuste de tom", conteudo: `Reescreva esta legenda como um amigo que entende do assunto: direto, leve e sem formalidade. [COLE A LEGENDA]` },
      { tipo: "prompt", titulo: "4. Versão enxuta", conteudo: `Resuma esta legenda em no máximo 3 linhas, mantendo a abertura e o convite final: [COLE A LEGENDA]` },
      { tipo: "prompt", titulo: "5. Hashtags", conteudo: `Sugira 8 hashtags para um post sobre [TEMA]: 3 amplas, 3 de nicho e 2 bem específicas.` },
    ],
  },
  {
    slug: "agenda-da-semana-com-ia",
    titulo: "Planeje a *semana inteira* em 5 minutos",
    categoria: "Produtividade",
    data: "2026-11-17",
    palavraChave: "SEMANA",
    selo: "prompt + modelo",
    resumo: "Despeje todas as tarefas sem ordem nenhuma e receba uma agenda realista, organizada por prioridade e energia.",
    destaques: ["Sem instalar nada"],
    blocos: [
      { tipo: "secao", rotulo: "Como usar", titulo: "Uma lista bagunçada vira um plano" },
      { tipo: "passos", itens: [
        "Anote tudo o que precisa fazer na semana, do jeito que vier na cabeça.",
        "Informe quantas horas livres você tem por dia.",
        "Cole o prompt abaixo e peça ajustes até ficar do seu jeito.",
      ]},
      { tipo: "prompt", titulo: "Prompt da agenda", conteudo:
`Aqui está tudo o que preciso fazer esta semana:
[COLE SUA LISTA]

Tenho [X] horas livres por dia. Monte uma agenda de segunda a sexta,
colocando as tarefas mais difíceis de manhã, agrupando tarefas parecidas
e deixando 30 minutos de folga por dia. Responda em tabela.` },
      { tipo: "alerta", conteudo: "Evite colocar dados sensíveis (senhas, documentos) na lista." },
    ],
  },
];
