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
  categorias: ["Instagram", "Imagens", "Vídeo", "Claude", "ChatGPT", "Gemini", "Produtividade", "Negócios", "Repositórios"],
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
    slug: "estilo-gta-vi",
    titulo: "Estilo GTA VI",
    categoria: "Imagens",
    data: "2026-11-19",
    palavraChave: "GTA",
    selo: "Prompt GTA 6",
    resumo: "Transforme qualquer foto em personagem do GTA VI com esse prompt. Copie, cole e gere a sua versão.",
    destaques: ["Escolha a imagem da pessoa que quer realizar a transformação.","Abra a ferramenta de IA que você usa e adicione a sua foto escolhida.","Envie a imagem, cole o prompt abaixo e gere. Faça 2 ou 3 versões e fique com a mais natural."],
    github: "",
    blocos: [
      { tipo: "prompt", titulo: "Transforme qualquer foto em personagem do GTA VI", conteudo: `Transform this image into a modern Grand Theft Auto VI-inspired visual style. Preserve the original composition, subject, pose, and facial features, but enhance it with a highly polished, next-gen video game aesthetic. Apply ultra-realistic rendering with cinematic lighting; high dynamic range (HDR) with realistic shadows and reflections; detailed skin textures and natural imperfections (not cartoonish); subtle stylization inspired by GTA VI character design — modern, grounded, semi-realistic, NOT exaggerated or comic-like; vibrant but controlled color grading with Miami/Vice City-inspired tones, warm highlights and teal shadows; depth of field and environmental atmosphere for immersion; and clean, sharp focus with AAA video game quality. If applicable, enhance the background to feel like a living open-world city, with a modern Vice City vibe: neon lights, palm trees, urban luxury, and night glow or sunset lighting. Do NOT convert into cartoon, comic, or GTA V-style illustration, avoid thick outlines or exaggerated proportions, and maintain realism with subtle stylization only, keeping the subject recognizable and authentic. The final result should be a cinematic, next-generation GTA VI-style render that looks like a character from a modern AAA open-world game.` },
    ],
  },
  /* ---------------------------------------------------------- */
  {
    slug: "gta",
    titulo: "Sua camisa *bordada ao vivo* no estilo GTA 6",
    categoria: "Vídeo",
    data: "2026-11-19",
    palavraChave: "GTA",
    selo: "prompt de vídeo",
    resumo: "O prompt do vídeo em que o logo do GTA VI se borda sozinho numa camisa, ponto por ponto, como um time-lapse real.",
    destaques: ["Vídeo vertical 9:16", "10 segundos"],
    github: "",
    blocos: [
      { tipo: "secao", rotulo: "Como usar", titulo: "Imagem de referência + prompt" },
      { tipo: "passos", itens: [
        "Escolha a imagem da camisa já bordada (é o resultado final que o vídeo vai \"construir\").",
        "Abra a ferramenta de vídeo com IA que você usa e selecione o modo **imagem para vídeo**.",
        "Envie a imagem, cole o prompt abaixo e gere. Faça 2 ou 3 versões e fique com a mais natural.",
      ]},
      { tipo: "prompt", titulo: "Geração de vídeo GTA 6", conteudo: `Exactly 10s, 9:16, one static macro shot of the navy jersey from the attached image; camera never moves, same angle, framing and light. Start: bare mesh fabric, no logo. Loose colored threads rise from the weave and pull tight by themselves, no needle, machine or hands, thousands of tiny stitches racing like a real time-lapse. First the gold and purple outline of the big “VI”, then rows of satin stitches fill it with a sunset gradient and purple palms, then the white puffy “grand theft auto” letters stitch on top. Real threads with fibers and sheen, relief rising, fabric puckering. Last second: finished embroidery identical to the image, still. No morphing or glow. Sound: thread pulling, fabric rustle.` },
      { tipo: "dica", conteudo: "O prompt está em inglês de propósito: a maioria das ferramentas de vídeo entende melhor os detalhes técnicos assim. Para outro logo, troque só a descrição das cores e das letras." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "metodo-papel-prompts",
    titulo: "O método *PAPEL* para escrever qualquer prompt",
    categoria: "ChatGPT",
    data: "2026-11-21",
    palavraChave: "PAPEL",
    selo: "método + modelo pronto",
    resumo: "Por que a IA te devolve respostas genéricas e a estrutura de 5 partes que resolve isso em qualquer ferramenta.",
    destaques: ["Serve para ChatGPT, Claude e Gemini", "O conteúdo base de todos os outros"],
    blocos: [
      { tipo: "secao", rotulo: "O conceito", titulo: "A IA não lê a sua mente" },
      { tipo: "texto", conteudo: "Quando você pede \"faça uma legenda sobre café\", a IA precisa adivinhar quem é você, para quem é, qual tom e qual tamanho. Ela chuta o meio-termo, e o meio-termo é sempre genérico. O método **PAPEL** tira o chute da equação." },
      { tipo: "lista", itens: [
        "**P — Papel:** quem a IA deve ser. \"Você é um copywriter especialista em cafeterias.\"",
        "**A — Assunto:** o contexto que só você conhece. Negócio, público, objetivo, o que já tentou.",
        "**P — Pedido:** a tarefa exata, com um verbo claro. \"Escreva 5 legendas…\"",
        "**E — Exemplo:** um modelo do que você considera bom (ou ruim). É o atalho mais poderoso.",
        "**L — Limites:** formato, tamanho, tom e o que evitar.",
      ]},
      { tipo: "secao", rotulo: "Modelo", titulo: "Copie e preencha" },
      { tipo: "prompt", titulo: "Modelo PAPEL", conteudo:
`PAPEL: Você é [ESPECIALISTA] com anos de experiência em [ÁREA].

ASSUNTO: Eu sou [QUEM VOCÊ É / SEU NEGÓCIO]. Meu público é [QUEM], que sente [DOR OU DESEJO]. O objetivo é [RESULTADO QUE VOCÊ QUER].

PEDIDO: [VERBO + TAREFA EXATA].

EXEMPLO: Este é um exemplo do estilo que eu gosto:
"[COLE UM EXEMPLO]"

LIMITES:
- Formato: [lista / tabela / texto corrido]
- Tamanho: [ex.: até 150 palavras]
- Tom: [ex.: direto, sem jargão]
- Evite: [ex.: emojis em excesso, frases clichê]

Antes de responder, faça até 3 perguntas se faltar alguma informação importante.` },
      { tipo: "secao", rotulo: "Na prática", titulo: "Antes e depois" },
      { tipo: "prompt", titulo: "Exemplo preenchido", conteudo:
`PAPEL: Você é um copywriter especialista em pequenos negócios de alimentação.

ASSUNTO: Tenho uma cafeteria de bairro em Curitiba. Meu público são pessoas de 25 a 40 anos que trabalham de casa e procuram um lugar tranquilo com Wi-Fi. Quero aumentar o movimento nas tardes de terça e quarta.

PEDIDO: Escreva 5 legendas para Instagram divulgando uma promoção de café + bolo por R$ 15 nesses dias.

EXEMPLO: "Terça tem cara de segunda? Aqui ela tem cheiro de café fresco."

LIMITES:
- Até 4 linhas cada
- Tom leve e acolhedor, sem exagero
- Termine cada uma com um convite para marcar um amigo
- Evite as palavras "imperdível" e "delicioso"` },
      { tipo: "dica", conteudo: "A última linha do modelo (\"faça até 3 perguntas\") é o truque que mais melhora o resultado: a IA para de chutar e pergunta o que falta." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "roteiro-de-reels",
    titulo: "Roteiro de *Reels* que prende até o final",
    categoria: "Instagram",
    data: "2026-11-21",
    palavraChave: "ROTEIRO",
    selo: "3 prompts prontos",
    resumo: "Do tema ao roteiro gravável: ganchos para os 3 primeiros segundos, roteiro cena a cena e uma revisão que corta o que dá sono.",
    destaques: ["Roteiro de 30 a 60 segundos", "Com indicação de cena e texto na tela"],
    blocos: [
      { tipo: "secao", rotulo: "O conceito", titulo: "Gancho, promessa, entrega, chamada" },
      { tipo: "texto", conteudo: "Todo Reels que retém segue a mesma espinha: um **gancho** que para o dedo, uma **promessa** do que a pessoa vai ganhar ficando, a **entrega** rápida e uma **chamada** no final. Os prompts abaixo fazem a IA trabalhar nessa ordem." },
      { tipo: "secao", rotulo: "Passo 1", titulo: "Gere os ganchos" },
      { tipo: "prompt", titulo: "10 ganchos", conteudo:
`Você é um roteirista de vídeos curtos especializado em retenção.

Meu perfil fala sobre [NICHO] para [PÚBLICO]. O vídeo de hoje é sobre: [TEMA].

Crie 10 ganchos para os 3 primeiros segundos do vídeo, usando estilos diferentes:
- 2 de curiosidade ("ninguém te conta que…")
- 2 de erro comum ("pare de fazer isso…")
- 2 de resultado ("fiz X e aconteceu Y")
- 2 de contraste ("todo mundo faz A, mas…")
- 2 de pergunta direta

Regras: até 12 palavras cada, linguagem falada, sem clickbait mentiroso. Marque com ★ os 3 que você considera mais fortes e explique em uma linha por quê.` },
      { tipo: "secao", rotulo: "Passo 2", titulo: "Monte o roteiro" },
      { tipo: "prompt", titulo: "Roteiro cena a cena", conteudo:
`Use este gancho: "[COLE O GANCHO ESCOLHIDO]"

Escreva o roteiro completo de um Reels de [30/45/60] segundos sobre [TEMA], em formato de tabela com as colunas:
Tempo | O que eu falo | O que aparece na tela | Texto na tela

Estrutura obrigatória:
1. Gancho (0–3s)
2. Promessa: por que vale ficar até o fim (3–6s)
3. Entrega em 3 pontos curtos e práticos
4. Chamada final: comentar a palavra [PALAVRA] para receber o material

Fale como eu falaria com um amigo: frases curtas, sem introdução, sem "fala, galera".` },
      { tipo: "secao", rotulo: "Passo 3", titulo: "Corte o que dá sono" },
      { tipo: "prompt", titulo: "Revisão de retenção", conteudo:
`Aja como um editor exigente de vídeos curtos. Analise o roteiro abaixo e aponte:
1. Os trechos onde alguém provavelmente arrastaria para o próximo vídeo, e por quê.
2. Frases que podem ser cortadas sem perder sentido.
3. Uma versão reescrita 20% mais curta, mantendo o gancho e a chamada final.

Roteiro:
[COLE O ROTEIRO]` },
      { tipo: "dica", conteudo: "Grave o gancho 3 vezes com entonações diferentes e escolha na edição. É a parte que mais muda o resultado." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "carrossel-que-gera-salvamento",
    titulo: "Carrossel que *gera salvamento*, slide por slide",
    categoria: "Instagram",
    data: "2026-11-21",
    palavraChave: "CARROSSEL",
    selo: "prompt + estrutura de 8 slides",
    resumo: "O prompt que transforma um tema em um carrossel de 8 slides com capa forte, conteúdo enxuto e o briefing visual para montar no Canva.",
    destaques: ["Texto + briefing de design", "Pronto para o Canva"],
    blocos: [
      { tipo: "secao", rotulo: "O conceito", titulo: "Carrossel bom é guia de bolso" },
      { tipo: "texto", conteudo: "As pessoas salvam o que querem consultar depois: listas, passo a passo, checklists e comparações. O prompt abaixo força esse formato e limita o texto por slide, que é onde a maioria erra." },
      { tipo: "prompt", titulo: "Carrossel completo", conteudo:
`Você é um estrategista de conteúdo para Instagram especializado em carrosséis educativos.

Tema: [TEMA]
Público: [PÚBLICO]
Objetivo: fazer a pessoa salvar o post e comentar [PALAVRA].

Crie um carrossel de 8 slides:
- Slide 1 (capa): título de até 8 palavras que prometa um resultado claro + subtítulo de até 10 palavras.
- Slide 2: o problema ou erro comum, em 2 frases.
- Slides 3 a 7: um passo, dica ou item por slide. Título curto + no máximo 25 palavras de explicação.
- Slide 8: resumo em 1 frase + chamada para salvar e comentar [PALAVRA].

Para cada slide, entregue também:
- Sugestão visual (ícone, imagem ou gráfico simples)
- Qual palavra destacar em cor

No fim, escreva a legenda do post (até 5 linhas) e 3 opções alternativas de capa.` },
      { tipo: "prompt", titulo: "Transformar um vídeo em carrossel", conteudo:
`Abaixo está a transcrição de um vídeo meu. Transforme o conteúdo em um carrossel de 8 slides seguindo a mesma estrutura: capa com promessa, problema, 5 slides de conteúdo e um slide final com chamada. Mantenha minhas expressões e meu jeito de falar.

Transcrição:
[COLE A TRANSCRIÇÃO]` },
      { tipo: "dica", conteudo: "Use a mesma fonte e as mesmas duas cores em todos os carrosséis. Em poucas semanas o seu post fica reconhecível antes mesmo de lerem o nome." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "calendario-30-dias",
    titulo: "*30 dias de conteúdo* planejados em uma tarde",
    categoria: "Instagram",
    data: "2026-11-21",
    palavraChave: "CALENDARIO",
    selo: "prompt + tabela",
    resumo: "Um calendário de um mês inteiro, equilibrado entre conteúdo que atrai, que educa e que vende, já com formato e gancho de cada post.",
    destaques: ["Saída em tabela", "Dá para colar no Google Planilhas"],
    blocos: [
      { tipo: "secao", rotulo: "O conceito", titulo: "Atrair, educar e vender" },
      { tipo: "texto", conteudo: "Perfil que só ensina não vende, e perfil que só vende não cresce. A regra que funciona para a maioria: cerca de **50% atração** (alcance), **35% educação** (confiança) e **15% venda**. O prompt monta o mês já nessa proporção." },
      { tipo: "prompt", titulo: "Calendário do mês", conteudo:
`Você é um estrategista de conteúdo para Instagram.

Sobre mim: [O QUE VOCÊ FAZ / SEU NICHO]
Público: [QUEM VOCÊ QUER ALCANÇAR]
O que eu vendo (ou vou vender): [PRODUTO, SERVIÇO OU "ainda nada"]
Quantos posts por semana consigo fazer: [NÚMERO]
Formatos que eu gosto: [Reels / carrossel / foto / stories]

Monte um calendário de 30 dias em tabela com as colunas:
Dia | Formato | Objetivo (Atrair/Educar/Vender) | Tema | Gancho | Chamada para ação

Regras:
- Cerca de 50% atrair, 35% educar, 15% vender.
- Não repita o mesmo formato mais de 2 dias seguidos.
- Inclua 2 posts que mostrem bastidores ou a minha rotina.
- Os posts de venda devem vir depois de pelo menos 2 posts educativos sobre o mesmo assunto.

No final, liste 5 ideias reserva para dias sem inspiração.` },
      { tipo: "dica", conteudo: "Peça em seguida: \"agora escreva os roteiros da semana 1\". Ir em blocos de uma semana dá resultados melhores do que pedir tudo de uma vez." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "bio-do-instagram",
    titulo: "Uma *bio de Instagram* que explica e converte",
    categoria: "Instagram",
    data: "2026-11-21",
    palavraChave: "BIO",
    selo: "prompt + checklist",
    resumo: "Em 150 caracteres a pessoa precisa entender quem você é, o que ganha te seguindo e o que fazer em seguida. O prompt gera 5 versões.",
    destaques: ["5 versões para testar"],
    blocos: [
      { tipo: "secao", rotulo: "Checklist", titulo: "O que toda bio precisa responder" },
      { tipo: "lista", itens: [
        "**Quem é você** ou o que você faz, em poucas palavras.",
        "**Para quem** é o seu conteúdo.",
        "**O que a pessoa ganha** te seguindo.",
        "**Uma prova** (número, resultado, experiência), se tiver.",
        "**Uma ação**: o que fazer agora (clicar no link, comentar, mandar DM).",
      ]},
      { tipo: "prompt", titulo: "Gerador de bio", conteudo:
`Escreva 5 opções de bio para o meu Instagram.

Sobre mim: [O QUE VOCÊ FAZ]
Para quem: [PÚBLICO]
O que a pessoa ganha me seguindo: [BENEFÍCIO]
Prova ou diferencial: [NÚMERO, RESULTADO, EXPERIÊNCIA — ou "nenhum ainda"]
Ação que eu quero: [ex.: acessar a biblioteca de prompts no link]

Regras:
- Máximo de 150 caracteres cada (conte e mostre a contagem).
- Use quebras de linha, uma ideia por linha.
- No máximo 2 emojis por bio, só se ajudarem a leitura.
- Cada opção com um estilo: direta, divertida, autoridade, curiosidade e minimalista.

Também sugira 3 opções para o campo "nome" do perfil, que aparece na busca, usando palavras que o meu público pesquisaria.` },
      { tipo: "dica", conteudo: "O campo **nome** (não o @) entra na busca do Instagram. \"Paulo | Prompts e IA\" é encontrado por quem pesquisa \"prompts\"; só \"Paulo\" não é." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "foto-de-perfil-profissional",
    titulo: "Selfie vira *foto de perfil profissional*",
    categoria: "Imagens",
    data: "2026-11-21",
    palavraChave: "PERFIL",
    selo: "3 estilos + correções",
    resumo: "Prompts para transformar uma selfie comum em retrato de estúdio, foto corporativa ou retrato criativo, mantendo o seu rosto.",
    destaques: ["Funciona com ferramentas de imagem que aceitam foto de referência"],
    blocos: [
      { tipo: "secao", rotulo: "Antes de começar", titulo: "A foto de origem faz metade do trabalho" },
      { tipo: "passos", itens: [
        "Use uma foto **de frente**, com o rosto bem iluminado (luz de janela é perfeita).",
        "Sem óculos escuros, boné ou filtros. Quanto mais nítido o rosto, mais fiel o resultado.",
        "Envie a foto na ferramenta de imagem, cole um dos prompts e gere de 3 a 4 versões.",
      ]},
      { tipo: "prompt", titulo: "Estúdio clássico", conteudo:
`Transforme a pessoa desta foto em um retrato profissional de estúdio.
Mantenha exatamente o mesmo rosto, traços, tom de pele, formato dos olhos e expressão.
Enquadramento: do peito para cima, olhando para a câmera, leve sorriso.
Luz: suave e lateral, como uma janela grande à esquerda, com sombra delicada.
Fundo: cinza neutro liso, levemente desfocado.
Roupa: camisa lisa em tom escuro, sem estampas nem logotipos.
Estilo: fotografia editorial, lente 85mm, nitidez nos olhos, cores naturais, textura real de pele.` },
      { tipo: "prompt", titulo: "Corporativo para LinkedIn", conteudo:
`Crie um retrato corporativo da pessoa desta foto, mantendo o rosto idêntico.
Cenário: escritório moderno e claro, bem desfocado ao fundo.
Roupa: blazer [COR] sobre camiseta ou camisa lisa.
Postura: confiante, ombros levemente virados, rosto para a câmera.
Luz natural de dia, aparência profissional e acessível, sem exagero de retoque.` },
      { tipo: "prompt", titulo: "Retrato criativo", conteudo:
`Retrato artístico da pessoa desta foto, mantendo o rosto idêntico.
Fundo de cor sólida [COR], luz de recorte nos ombros e no cabelo, contraste alto.
Estilo de capa de revista, composição centralizada, espaço livre acima da cabeça para texto.` },
      { tipo: "prompt", titulo: "Correção: o rosto mudou", conteudo:
`O rosto ficou diferente da foto original. Refaça mantendo 100% dos traços da pessoa: formato do rosto, nariz, olhos, sobrancelhas, boca, tom de pele e marcas. Altere apenas iluminação, roupa e fundo.` },
      { tipo: "alerta", conteudo: "Use apenas fotos suas ou de quem autorizou. Criar imagens realistas de outra pessoa sem permissão pode trazer problemas sérios." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "foto-de-produto-com-ia",
    titulo: "*Foto de produto* de catálogo sem estúdio",
    categoria: "Imagens",
    data: "2026-11-21",
    palavraChave: "PRODUTO",
    selo: "4 cenários prontos",
    resumo: "Fotografe o produto em casa e use estes prompts para criar fundo de estúdio, cenário de uso, flat lay e anúncio, sem distorcer o produto.",
    destaques: ["Ideal para lojas e marketplaces"],
    blocos: [
      { tipo: "secao", rotulo: "Passo 1", titulo: "Fotografe direito (2 minutos)" },
      { tipo: "lista", itens: [
        "Coloque o produto perto de uma janela, com uma folha branca atrás.",
        "Fotografe de frente e na altura do produto, sem zoom digital.",
        "Limpe o produto antes: a IA preserva poeira e marcas de dedo.",
      ]},
      { tipo: "secao", rotulo: "Passo 2", titulo: "Escolha o cenário" },
      { tipo: "prompt", titulo: "Fundo de estúdio (catálogo)", conteudo:
`Coloque o produto desta foto em um fundo de estúdio branco infinito.
Preserve exatamente o formato, as cores, o rótulo, os textos e as proporções do produto. Não invente detalhes.
Luz suave e uniforme, sombra natural curta no chão, reflexo discreto.
Imagem quadrada, produto centralizado ocupando 70% do quadro, nitidez máxima.` },
      { tipo: "prompt", titulo: "Cenário de uso", conteudo:
`Coloque o produto desta foto em [AMBIENTE: ex. bancada de cozinha de madeira clara com plantas ao fundo], como se estivesse sendo usado no dia a dia.
Preserve o produto exatamente igual. Luz natural de manhã entrando pela lateral, profundidade de campo rasa, fundo desfocado.
Estilo de foto de revista de decoração, sem pessoas.` },
      { tipo: "prompt", titulo: "Flat lay", conteudo:
`Crie uma composição flat lay (vista de cima) com o produto desta foto no centro, cercado por [OBJETOS RELACIONADOS: ex. grãos de café, uma xícara e um caderno].
Fundo [COR OU TEXTURA]. Organização limpa, espaços equilibrados, sombras suaves. Preserve o produto sem alterações.` },
      { tipo: "prompt", titulo: "Anúncio com espaço para texto", conteudo:
`Crie uma imagem publicitária vertical 4:5 com o produto desta foto em destaque na metade inferior.
Fundo em gradiente de [COR 1] para [COR 2], luz dramática de cima, leve brilho no produto.
Deixe a metade superior livre e limpa para eu colocar o texto do anúncio. Preserve o produto exatamente como é.` },
      { tipo: "alerta", conteudo: "Confira sempre rótulos e textos do produto na imagem final. Se a IA trocar alguma letra, peça para refazer: anunciar com o rótulo errado pode gerar reclamação." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "prompt-de-video-cinematografico",
    titulo: "A fórmula do *prompt de vídeo* cinematográfico",
    categoria: "Vídeo",
    data: "2026-11-21",
    palavraChave: "CINEMA",
    selo: "modelo + 3 exemplos",
    resumo: "A estrutura em 6 partes que faz as ferramentas de vídeo com IA entregarem cenas com cara de filme, e não de sonho confuso.",
    destaques: ["Serve para as principais ferramentas de vídeo com IA"],
    blocos: [
      { tipo: "secao", rotulo: "O conceito", titulo: "Escreva como um diretor" },
      { tipo: "texto", conteudo: "Prompt de vídeo vago gera movimento aleatório. O segredo é descrever **uma única cena** como um diretor descreveria para a equipe: o que está na câmera, o que acontece, como a câmera se move, a luz, o estilo e o som." },
      { tipo: "lista", itens: [
        "**Plano:** duração, formato e tipo de enquadramento (close, plano aberto, macro).",
        "**Assunto:** quem ou o que aparece, com detalhes visuais.",
        "**Ação:** o que acontece, em ordem, do começo ao fim.",
        "**Câmera:** parada, travelling, drone, câmera na mão…",
        "**Luz e estilo:** hora do dia, clima, referência de cor.",
        "**Som e restrições:** áudio desejado e o que NÃO pode acontecer.",
      ]},
      { tipo: "prompt", titulo: "Modelo (preencha em inglês para melhores resultados)", conteudo:
`[DURATION]s, [9:16 or 16:9], [SHOT TYPE: close-up / wide shot / macro] of [SUBJECT WITH VISUAL DETAILS].
Action: [WHAT HAPPENS, IN ORDER, START TO END].
Camera: [static / slow push-in / tracking shot / handheld / drone orbit].
Lighting: [golden hour / overcast / neon at night / soft window light].
Style: [cinematic, 35mm film, shallow depth of field / documentary / commercial].
Sound: [ambient sounds, music mood].
Avoid: [morphing, extra fingers, text, sudden cuts, camera shake].` },
      { tipo: "prompt", titulo: "Exemplo: café da manhã", conteudo:
`8s, 9:16, macro close-up of hot coffee being poured into a white ceramic cup on a wooden table.
Action: the stream starts thin, the cup fills, a swirl of crema forms and steam rises slowly.
Camera: static, then a very slow push-in during the last 3 seconds.
Lighting: soft morning window light from the left, warm tones.
Style: cinematic commercial, shallow depth of field, rich textures.
Sound: liquid pouring, distant birds.
Avoid: spills, distorted cup shape, text.` },
      { tipo: "prompt", titulo: "Exemplo: cidade à noite", conteudo:
`10s, 16:9, wide shot of a rainy downtown street at night, neon signs reflecting on wet asphalt.
Action: a person with a transparent umbrella walks away from the camera, cars pass with light trails.
Camera: slow tracking shot following the person at shoulder height.
Lighting: blue and magenta neon, light rain visible in the streetlights.
Style: cinematic, anamorphic look, 35mm film grain.
Sound: rain, distant traffic, soft synth music.
Avoid: faces in close-up, readable text on signs, morphing.` },
      { tipo: "prompt", titulo: "Traduzir sua ideia para o modelo", conteudo:
`Transforme esta ideia em um prompt de vídeo para IA, em inglês, usando exatamente esta estrutura: duração e formato, plano, assunto, ação em ordem, câmera, luz, estilo, som e o que evitar. Descreva uma única cena contínua, sem cortes.

Minha ideia: [DESCREVA EM PORTUGUÊS]` },
      { tipo: "dica", conteudo: "Uma cena por prompt. Se a ideia tem 3 momentos diferentes, gere 3 vídeos e junte na edição: o resultado fica muito mais estável." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "assistente-pessoal-com-ia",
    titulo: "Crie um *assistente com a sua cara* no Claude",
    categoria: "Claude",
    data: "2026-11-21",
    palavraChave: "ASSISTENTE",
    selo: "instruções prontas",
    resumo: "Pare de explicar quem você é em toda conversa. Configure um Projeto com instruções fixas e ganhe um assistente que já conhece o seu negócio e o seu tom.",
    destaques: ["Também funciona nos GPTs do ChatGPT e Gems do Gemini"],
    blocos: [
      { tipo: "secao", rotulo: "O conceito", titulo: "Contexto que fica salvo" },
      { tipo: "texto", conteudo: "No Claude, os **Projetos** guardam instruções e arquivos que valem para todas as conversas dentro deles. No ChatGPT o equivalente são os GPTs personalizados e os Projetos; no Gemini, os Gems. A lógica é a mesma: você escreve uma vez quem você é e como quer as respostas." },
      { tipo: "passos", itens: [
        "Crie um novo Projeto (ou GPT/Gem) com um nome claro, por exemplo \"Meu assistente de conteúdo\".",
        "Use o prompt abaixo para a IA escrever as instruções com você.",
        "Cole o resultado no campo de instruções do Projeto.",
        "Anexe arquivos úteis: posts que deram certo, descrição dos seus produtos, perguntas frequentes.",
      ]},
      { tipo: "prompt", titulo: "Gerar as instruções do assistente", conteudo:
`Quero criar instruções fixas para um assistente de IA que vai me ajudar com [ÁREA: ex. conteúdo para Instagram e atendimento].

Me entreviste com uma pergunta por vez (no máximo 10) para entender:
- quem eu sou e o que faço
- meu público e as dúvidas mais comuns dele
- meu tom de voz, com exemplos de frases que eu usaria e que eu nunca usaria
- os produtos ou serviços que ofereço
- os formatos de resposta que eu prefiro

No final, escreva as instruções completas em segunda pessoa ("Você é o assistente de…"), organizadas em seções: Quem eu sou, Público, Tom de voz, O que fazer, O que nunca fazer, Formatos padrão.` },
      { tipo: "prompt", titulo: "Exemplo de instruções (adapte)", conteudo:
`Você é o assistente de conteúdo do Paulo, criador do perfil @itspauloestevao, que ensina ferramentas de IA de forma prática para iniciantes.

TOM DE VOZ: direto, leve e próximo, como um amigo que entende do assunto. Frases curtas. Nada de jargão sem explicação.

SEMPRE:
- Entregue algo que a pessoa consiga aplicar hoje.
- Use exemplos do dia a dia de pequenos negócios e criadores.
- Em roteiros, comece com um gancho de até 12 palavras.

NUNCA:
- Prometa resultados financeiros.
- Use as expressões "fala, galera" e "nesse vídeo eu vou te mostrar".

FORMATOS PADRÃO:
- Roteiro de Reels: tabela com tempo, fala, cena e texto na tela.
- Legenda: até 6 linhas, termina com convite para comentar uma palavra.` },
      { tipo: "dica", conteudo: "Sempre que o assistente errar o tom, corrija e peça: \"atualize as instruções com essa preferência\". Em poucas semanas ele escreve como você." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "pesquisa-e-comparacao-com-ia",
    titulo: "Pesquise e *compare antes de comprar* com IA",
    categoria: "Gemini",
    data: "2026-11-21",
    palavraChave: "COMPARAR",
    selo: "2 prompts + checagem",
    resumo: "Como usar a pesquisa com fontes das IAs para comparar produtos, serviços ou ferramentas e chegar numa decisão, sem cair em resposta inventada.",
    destaques: ["Use com a pesquisa na web ativada"],
    blocos: [
      { tipo: "secao", rotulo: "O conceito", titulo: "Peça fontes, critérios e incertezas" },
      { tipo: "texto", conteudo: "IA sem pesquisa responde de memória, e a memória dela pode estar desatualizada. Ative a **pesquisa na web** (ou o modo de pesquisa aprofundada) e peça três coisas: critérios definidos por você, fontes linkadas e o que ela não conseguiu confirmar." },
      { tipo: "prompt", titulo: "Comparação para decidir", conteudo:
`Pesquise na web e me ajude a escolher entre [OPÇÃO A], [OPÇÃO B] e [OPÇÃO C] para [O QUE EU PRECISO FAZER].

Meu contexto: [ORÇAMENTO, NÍVEL DE EXPERIÊNCIA, ONDE MORO, PRIORIDADES].

Compare em uma tabela com os critérios: preço atual em reais, principais vantagens, principais limitações, para quem é melhor e nota de 0 a 10 para o meu caso.

Regras:
- Cite a fonte (com link) de cada preço e de cada informação técnica.
- Se não encontrar uma informação recente, escreva "não confirmado" em vez de estimar.
- No final, recomende uma opção para o meu caso e diga o que me faria mudar de ideia.` },
      { tipo: "prompt", titulo: "Pesquisa de mercado rápida", conteudo:
`Faça uma pesquisa sobre o mercado de [NICHO/PRODUTO] no Brasil e me entregue:
1. Quem são os 5 principais concorrentes e como cada um se posiciona.
2. Faixa de preço praticada.
3. As reclamações mais comuns dos clientes (busque em avaliações e fóruns).
4. 3 oportunidades que parecem pouco exploradas.

Cite as fontes de cada ponto e separe claramente o que é fato encontrado do que é interpretação sua.` },
      { tipo: "alerta", conteudo: "Antes de uma compra importante, abra pelo menos dois dos links que a IA citou e confira os números. Ela erra menos com fontes, mas ainda erra." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "estudar-qualquer-assunto-com-ia",
    titulo: "Aprenda *qualquer assunto* com a IA como tutora",
    categoria: "Produtividade",
    data: "2026-11-21",
    palavraChave: "ESTUDAR",
    selo: "4 prompts de estudo",
    resumo: "Explicação no seu nível, perguntas que testam de verdade, flashcards e um plano de estudo. Funciona com PDF, apostila ou só o nome do assunto.",
    destaques: ["Ótimo para concursos, faculdade e cursos"],
    blocos: [
      { tipo: "secao", rotulo: "O conceito", titulo: "Ler não é aprender, responder é" },
      { tipo: "texto", conteudo: "Reler resumo dá a sensação de que você aprendeu. O que fixa de verdade é **tentar lembrar** e **explicar com as suas palavras**. Use a IA como uma tutora que te faz perguntas, não só como quem resume." },
      { tipo: "prompt", titulo: "1. Explicação no meu nível", conteudo:
`Seja meu tutor de [ASSUNTO]. Meu nível atual: [iniciante / já vi o básico / revisando para prova].

Explique [TÓPICO] em 3 camadas:
1. Como se eu tivesse 12 anos, com uma analogia do dia a dia.
2. A explicação correta, com os termos técnicos definidos.
3. Os 3 erros mais comuns de quem está aprendendo esse tópico.

No final, me faça uma pergunta para verificar se eu entendi e espere a minha resposta antes de continuar.` },
      { tipo: "prompt", titulo: "2. Simulado que ensina", conteudo:
`Com base no material abaixo, faça um simulado de 10 questões de múltipla escolha, no estilo [BANCA OU TIPO DE PROVA].
Faça uma pergunta por vez e espere minha resposta.
Depois de cada resposta, diga se acertei e explique por que cada alternativa errada está errada.
No final, liste os tópicos em que eu errei para revisar.

Material:
[COLE O TEXTO OU ANEXE O PDF]` },
      { tipo: "prompt", titulo: "3. Flashcards", conteudo:
`Transforme o material abaixo em 20 flashcards no formato:
Pergunta | Resposta (no máximo 2 linhas)

Priorize conceitos, definições, datas e números que costumam cair em prova. Evite perguntas de sim ou não.

Material:
[COLE O TEXTO]` },
      { tipo: "prompt", titulo: "4. Plano de estudo", conteudo:
`Monte um plano de estudo para [OBJETIVO: ex. concurso X, prova de Y] com data final em [DATA].
Tenho [HORAS] horas por dia, em [DIAS DA SEMANA].
Conteúdo que preciso estudar: [LISTE OU COLE O EDITAL]

Organize por semana, priorizando o que mais cai e o que eu tenho mais dificuldade ([TÓPICOS DIFÍCEIS]). Inclua revisões espaçadas (1, 7 e 30 dias depois) e um simulado por semana.` },
      { tipo: "dica", conteudo: "Responda as perguntas da tutora sem consultar o material. Errar ali é o que faz você acertar na prova." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "mensagens-dificeis-com-ia",
    titulo: "Mensagens difíceis *escritas sem estresse*",
    categoria: "Produtividade",
    data: "2026-11-21",
    palavraChave: "MENSAGEM",
    selo: "3 prompts + revisão de tom",
    resumo: "Cobrar um cliente, negar um pedido, responder uma reclamação: prompts que deixam a mensagem firme, educada e no tamanho certo.",
    destaques: ["E-mail, WhatsApp ou DM"],
    blocos: [
      { tipo: "prompt", titulo: "Escrever do zero", conteudo:
`Preciso enviar uma mensagem por [WhatsApp / e-mail] para [QUEM É A PESSOA E QUAL A RELAÇÃO].

Situação: [O QUE ACONTECEU]
O que eu quero que aconteça depois da mensagem: [RESULTADO]
O que eu não posso abrir mão: [LIMITE]

Escreva 2 versões:
1. Firme e direta.
2. Mais cordial, preservando a relação.

As duas devem ser educadas, curtas (até 6 linhas no WhatsApp ou 120 palavras no e-mail), sem pedir desculpas em excesso e terminando com um próximo passo claro.` },
      { tipo: "prompt", titulo: "Cobrança educada", conteudo:
`Escreva uma mensagem de cobrança para [NOME], que está com o pagamento de [VALOR] referente a [SERVIÇO] atrasado há [DIAS] dias.
Tom: profissional e gentil, sem soar desesperado nem ameaçador.
Inclua: lembrete do combinado, forma de pagamento [PIX/LINK] e uma pergunta que facilite a resposta (ex.: "consegue resolver até sexta?").
Faça também uma segunda versão, mais firme, para enviar se não houver resposta em 3 dias.` },
      { tipo: "prompt", titulo: "Responder uma reclamação", conteudo:
`Um cliente enviou a reclamação abaixo. Escreva uma resposta que:
1. Reconheça o problema sem culpar o cliente.
2. Explique o que aconteceu em 1 frase, sem desculpas longas.
3. Ofereça uma solução concreta: [O QUE VOCÊ PODE OFERECER].
4. Termine com um próximo passo e um prazo.

Reclamação:
"[COLE A MENSAGEM]"` },
      { tipo: "prompt", titulo: "Revisar o tom antes de enviar", conteudo:
`Leia a mensagem que escrevi e me diga, com sinceridade:
- Como a outra pessoa provavelmente vai se sentir ao ler.
- Quais frases podem soar agressivas, passivo-agressivas ou inseguras.
- Uma versão revisada que mantenha o que eu quero dizer.

Minha mensagem:
[COLE]` },
      { tipo: "dica", conteudo: "Escreveu com raiva? Cole na revisão de tom, leia a versão sugerida e espere 10 minutos antes de enviar." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "planilhas-com-ia",
    titulo: "Fórmulas de planilha *sem decorar nada*",
    categoria: "Produtividade",
    data: "2026-11-21",
    palavraChave: "PLANILHA",
    selo: "3 prompts + modelo",
    resumo: "Descreva o que você quer calcular em português e receba a fórmula pronta, explicada, para Excel ou Google Planilhas. Inclui um controle financeiro simples.",
    destaques: ["Excel e Google Planilhas"],
    blocos: [
      { tipo: "prompt", titulo: "Criar uma fórmula", conteudo:
`Estou usando [Excel / Google Planilhas] em português.
Minha planilha tem estas colunas: [ex. A = Data, B = Cliente, C = Valor, D = Status].
Os dados vão da linha 2 até a linha [N].

Quero: [DESCREVA O CÁLCULO: ex. somar os valores dos clientes com status "Pago" no mês de novembro].

Me dê:
1. A fórmula pronta para colar (com os nomes das funções em português e separador ponto e vírgula).
2. Em qual célula colocar.
3. A explicação de cada parte da fórmula em linguagem simples.` },
      { tipo: "prompt", titulo: "Consertar uma fórmula com erro", conteudo:
`Esta fórmula está dando o erro [#N/D / #VALOR! / resultado errado]:
[COLE A FÓRMULA]

O que ela deveria fazer: [EXPLIQUE]
Exemplo dos dados: [COLE 3 OU 4 LINHAS]

Explique a causa do erro e me dê a fórmula corrigida.` },
      { tipo: "prompt", titulo: "Montar um controle financeiro", conteudo:
`Monte a estrutura de uma planilha de controle financeiro para [uso pessoal / pequeno negócio] no [Excel / Google Planilhas].

Quero:
- Uma aba de lançamentos com: data, descrição, categoria, tipo (entrada ou saída), valor e forma de pagamento.
- Uma aba de resumo mensal com: total de entradas, total de saídas, saldo e gasto por categoria.
- Uma lista de categorias sugeridas para o meu caso: [DESCREVA SUA ROTINA].

Entregue as colunas, as fórmulas exatas da aba de resumo e o passo a passo para criar a lista suspensa de categorias.` },
      { tipo: "dica", conteudo: "Sempre diga se a sua planilha está em português. As funções mudam de nome (SUMIFS vira SOMASES) e o separador costuma ser ponto e vírgula." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "validar-ideia-de-negocio",
    titulo: "Valide uma *ideia de negócio* antes de gastar",
    categoria: "Negócios",
    data: "2026-11-21",
    palavraChave: "IDEIA",
    selo: "3 prompts em sequência",
    resumo: "Use a IA como sócia cética: ela aponta riscos, desenha a proposta em uma página e monta um teste barato para ver se alguém pagaria.",
    destaques: ["Plano de 1 página", "Teste em até 7 dias"],
    blocos: [
      { tipo: "secao", rotulo: "Passo 1", titulo: "Chame a advogada do diabo" },
      { tipo: "prompt", titulo: "Análise crítica", conteudo:
`Aja como um investidor experiente e cético. Não seja gentil, seja útil.

Minha ideia: [DESCREVA A IDEIA]
Para quem: [CLIENTE]
Como ganho dinheiro: [MODELO]
Recursos que tenho: [TEMPO, DINHEIRO, HABILIDADES]

Aponte:
1. As 5 maiores razões pelas quais essa ideia pode dar errado.
2. Quais dessas razões dá para testar barato antes de começar.
3. Quem já resolve esse problema hoje (mesmo que de outro jeito) e por que alguém trocaria.
4. Uma versão menor e mais simples da ideia que eu poderia lançar em 30 dias.` },
      { tipo: "secao", rotulo: "Passo 2", titulo: "Coloque no papel" },
      { tipo: "prompt", titulo: "Plano de 1 página", conteudo:
`Com base na nossa conversa, escreva um plano de negócio de uma página com:
- Problema (em 2 frases)
- Cliente ideal (quem é, onde está, quanto pode pagar)
- Solução e diferencial
- Como vou conseguir os 10 primeiros clientes
- Preço e cálculo simples: quanto preciso vender por mês para cobrir [CUSTOS] e ter [META] de lucro
- 3 números para acompanhar toda semana` },
      { tipo: "secao", rotulo: "Passo 3", titulo: "Teste com gente de verdade" },
      { tipo: "prompt", titulo: "Teste de 7 dias", conteudo:
`Monte um teste de 7 dias, gastando no máximo [VALOR], para descobrir se as pessoas realmente pagariam pela minha ideia.
Inclua: o que publicar (com o texto pronto), onde divulgar, que pergunta fazer para os interessados e qual resultado mínimo significa "vale continuar".
Prefira testes em que a pessoa demonstra interesse com uma ação real (reserva, lista de espera, pré-venda) e não só com "eu compraria".` },
      { tipo: "dica", conteudo: "\"Eu compraria\" não é validação. Validação é alguém deixar o contato, reservar ou pagar." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "pagina-de-vendas-com-ia",
    titulo: "A estrutura de uma *página de vendas* que convence",
    categoria: "Negócios",
    data: "2026-11-21",
    palavraChave: "VENDAS",
    selo: "prompt + revisão",
    resumo: "O prompt que escreve a página de vendas seção por seção, da promessa à garantia, e um segundo que revisa com os olhos de um cliente desconfiado.",
    destaques: ["Para cursos, serviços e produtos"],
    blocos: [
      { tipo: "secao", rotulo: "A estrutura", titulo: "Cada seção responde uma dúvida" },
      { tipo: "passos", itens: [
        "**Promessa:** o que a pessoa conquista (\"isso é para mim?\").",
        "**Problema:** a situação atual dela, nas palavras dela.",
        "**Solução:** o produto e por que funciona.",
        "**O que está incluído:** entregáveis claros.",
        "**Prova:** resultados, depoimentos reais, demonstração.",
        "**Oferta:** preço, bônus e comparação de valor.",
        "**Garantia e perguntas frequentes:** remove o medo de errar.",
        "**Chamada final:** o que fazer agora.",
      ]},
      { tipo: "prompt", titulo: "Escrever a página", conteudo:
`Você é um copywriter especialista em páginas de vendas para o público brasileiro.

Produto: [NOME E O QUE É]
Para quem: [CLIENTE IDEAL]
Principal transformação: [ANTES → DEPOIS]
O que está incluído: [LISTA]
Preço: [VALOR] | Garantia: [DIAS]
Provas que tenho: [RESULTADOS, DEPOIMENTOS — ou "nenhuma ainda"]
Objeções comuns: [ex. "não tenho tempo", "é caro", "já tentei e não deu certo"]

Escreva a página seguindo a ordem: promessa, problema, solução, o que está incluído, prova, oferta, garantia, perguntas frequentes (respondendo às objeções) e chamada final.

Regras:
- Linguagem simples e direta, frases curtas.
- Não invente depoimentos, números ou resultados. Onde faltar prova, deixe [INSERIR DEPOIMENTO].
- Nada de promessas exageradas ou de urgência falsa.
- Sugira 3 opções de título principal.` },
      { tipo: "prompt", titulo: "Revisão do cliente desconfiado", conteudo:
`Leia a página de vendas abaixo como se você fosse um cliente desconfiado, que já comprou cursos ruins.
Liste:
1. Os pontos em que você pararia de ler e por quê.
2. As perguntas que ficaram sem resposta.
3. As frases que soam exageradas ou pouco confiáveis.
Depois, reescreva só as partes problemáticas.

Página:
[COLE O TEXTO]` },
      { tipo: "alerta", conteudo: "Nunca use depoimentos ou números inventados. Além de ilegal pelo Código de Defesa do Consumidor, destrói a confiança no primeiro cliente que perceber." },
    ],
  },

  /* ---------------------------------------------------------- */
  {
    slug: "respostas-para-dm-e-comentarios",
    titulo: "Respostas prontas para *DMs e comentários*",
    categoria: "Negócios",
    data: "2026-11-21",
    palavraChave: "RESPOSTAS",
    selo: "banco de respostas",
    resumo: "Monte um banco de respostas com o seu tom para as perguntas que mais chegam, de \"quanto custa?\" a crítica no comentário.",
    destaques: ["Ganhe tempo no atendimento"],
    blocos: [
      { tipo: "prompt", titulo: "Banco de respostas", conteudo:
`Crie um banco de respostas para o meu Instagram.

Sobre mim/meu negócio: [DESCREVA]
Tom de voz: [ex. próximo, direto, bem-humorado]
O que eu ofereço e o preço: [LISTE]

Escreva 2 versões de resposta (uma curta para comentário e uma para DM) para cada situação:
1. "Quanto custa?"
2. "Como funciona?"
3. "Vocês entregam/atendem em [CIDADE]?"
4. Elogio
5. Crítica educada
6. Crítica agressiva ou provocação
7. Pessoa que sumiu depois de pedir orçamento
8. Pedido de desconto

Regras: respostas humanas, nada de texto de robô, sempre com um próximo passo (pergunta ou convite), sem discutir em público.` },
      { tipo: "prompt", titulo: "Responder um caso específico", conteudo:
`Recebi esta mensagem: "[COLE A MENSAGEM]"
Contexto: [O QUE VOCÊ SABE SOBRE A PESSOA OU A SITUAÇÃO]
Escreva uma resposta no meu tom ([TOM]) que resolva a dúvida e leve a conversa para [OBJETIVO: fechar venda / agendar / encerrar com educação].` },
      { tipo: "dica", conteudo: "Salve as respostas aprovadas nas **respostas rápidas** do Instagram (Configurações → Ferramentas para criadores/empresas). Digitar um atalho e enviar leva 2 segundos." },
    ],
  },

  /* ---------------------------------------------------------- */
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

  /* ---------------------------------------------------------- */
  {
    slug: "5-prompts-para-legendas",
    titulo: "5 prompts para *legendas* que geram comentário",
    categoria: "Instagram",
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

  /* ---------------------------------------------------------- */
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
