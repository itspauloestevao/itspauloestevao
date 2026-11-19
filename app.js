(function () {
  const S = window.SITE || {};
  const C = (window.CONTEUDOS || []).slice().sort((a, b) => (b.data || "").localeCompare(a.data || ""));
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (t = "") => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const inline = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  const titulo = (t) => esc(t).replace(/\*(.+?)\*/g, '<em class="hl">$1</em>');
  const plano = (t) => String(t || "").replace(/\*/g, "");
  const ig = S.instagram ? "https://instagram.com/" + S.instagram : "#";
  const dm = S.instagram ? "https://ig.me/m/" + S.instagram : ig;
  const oferta = S.oferta && S.oferta.url ? S.oferta : null;

  // link bonito (/p/slug) quando hospedado; ?p=slug ao abrir o arquivo no computador
  const pretty = /^https?:$/.test(location.protocol) && !/claude|artifact|usercontent/.test(location.hostname);
  const linkPost = (slug) => (pretty ? "/p/" + slug : "post.html?p=" + encodeURIComponent(slug));
  const home = pretty ? "/" : "index.html";
  const hoje = new Date();
  const isNovo = (d) => d && (hoje - new Date(d + "T12:00:00")) / 864e5 < 2;

  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 1800);
  }
  async function copiar(texto) {
    try { await navigator.clipboard.writeText(texto); return true; }
    catch (e) {
      const ta = document.createElement("textarea"); ta.value = texto; ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select(); let ok = false;
      try { ok = document.execCommand("copy"); } catch (_) {}
      ta.remove(); return ok;
    }
  }
  function observe() {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.06 });
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
  }
  function rodape() {
    const f = $("#foot"); if (!f) return;
    f.innerHTML = `<div class="wrap"><div><b>${esc(S.nome)}</b> · ${esc(plano(S.titulo))} · © ${hoje.getFullYear()}</div>
      <div class="foot-links"><a href="${home}">Voltar ao início</a><a href="${ig}" target="_blank" rel="noopener">Instagram @${esc(S.instagram)}</a><a href="${dm}" target="_blank" rel="noopener">Fale comigo na DM</a></div></div>`;
  }

  /* ---------- card ---------- */
  function card(p) {
    const ler = (p.blocos || []).some((b) => b.tipo === "prompt") ? "Abrir prompt" : "Abrir tutorial";
    return `<article class="card reveal">
      ${isNovo(p.data) ? '<span class="new">Recente</span>' : ""}
      <a class="card-link" href="${linkPost(p.slug)}">
        <span class="tag">${esc(p.categoria)}</span>
        <h3>${titulo(p.titulo)}</h3>
        ${p.selo ? `<div class="selo">${esc(p.selo)}</div>` : ""}
        <p>${esc(p.resumo || "")}</p>
      </a>
      <div class="card-actions">
        <a class="btn solid sm" href="${linkPost(p.slug)}">${ler}</a>
        ${p.github ? `<a class="btn sm" href="${esc(p.github)}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}
        <a class="btn sm" href="${linkPost(p.slug)}${pretty ? "?" : "&"}baixar=1">↓ Salvar</a>
      </div></article>`;
  }

  /* ---------- central ---------- */
  function renderHome() {
    document.title = `${plano(S.titulo)} · ${S.nome}`;
    $("#hero").innerHTML = `<div class="wrap">
      <div class="kicker reveal">@${esc(S.instagram)}</div>
      <h1 class="hub-title reveal">${titulo(S.titulo)}</h1>
      <p class="hub-desc reveal">${esc(S.descricao)}</p>
      <div class="divider"></div>
      ${S.aviso ? `<div class="notice reveal">${esc(S.aviso)}</div>` : ""}
      <div class="tools">
        <label class="search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
          <input id="q" type="search" placeholder="Pesquise por tema, ferramenta ou a palavra que você comentou…" autocomplete="off"></label>
        <div class="chips" id="chips"></div>
      </div></div>`;

    const cats = ["Todos"].concat((S.categorias || []).filter((c) => C.some((p) => p.categoria === c)));
    C.forEach((p) => { if (p.categoria && !cats.includes(p.categoria)) cats.push(p.categoria); });
    $("#chips").innerHTML = cats.map((c, i) => `<button class="chip${i ? "" : " on"}" data-c="${esc(c)}">${esc(c)}</button>`).join("");

    let filtro = "Todos", busca = new URLSearchParams(location.search).get("q") || "", limite = 18;
    $("#q").value = busca;
    const norm = (t) => (t || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    function draw() {
      const q = norm(busca);
      const lista = C.filter((p) => (filtro === "Todos" || p.categoria === filtro) &&
        (!q || norm([p.titulo, p.resumo, p.categoria, p.palavraChave, p.selo].join(" ")).includes(q)));
      $("#count").textContent = `${lista.length} ${lista.length === 1 ? "conteúdo disponível" : "conteúdos disponíveis"}`;
      $("#grid").innerHTML = lista.length ? lista.slice(0, limite).map(card).join("") : `<div class="empty">Nenhum resultado por aqui. Experimente outro termo.</div>`;
      $("#more").innerHTML = lista.length > limite ? `<button class="btn" id="btnMore">Mostrar mais</button>` : "";
      const b = $("#btnMore"); if (b) b.onclick = () => { limite += 18; draw(); };
      observe();
    }
    $("#chips").addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      document.querySelectorAll(".chip").forEach((x) => x.classList.toggle("on", x === b));
      filtro = b.dataset.c; limite = 18; draw();
    });
    $("#q").addEventListener("input", (e) => { busca = e.target.value; limite = 18; draw(); });
    draw();
  }

  /* ---------- blocos ---------- */
  function bloco(b) {
    switch (b.tipo) {
      case "secao": return `<div class="b-sec">${b.rotulo ? `<small>${esc(b.rotulo)}</small>` : ""}<h2>${titulo(b.titulo || b.conteudo || "")}</h2></div>`;
      case "titulo": return `<div class="b-sec"><h2>${titulo(b.conteudo || "")}</h2></div>`;
      case "texto": return `<p class="b-text">${inline(b.conteudo)}</p>`;
      case "lista": return `<ul class="b-list">${(b.itens || []).map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`;
      case "passos": return `<ol class="b-steps">${(b.itens || []).map((i) => `<li><span>${inline(i)}</span></li>`).join("")}</ol>`;
      case "dica": return `<div class="b-tip">${inline(b.conteudo)}</div>`;
      case "alerta": return `<div class="b-warn">${inline(b.conteudo)}</div>`;
      case "prompt":
      case "codigo": {
        const cmd = b.tipo === "codigo";
        return `<div class="b-code${cmd ? " cmd" : ""}"><div class="b-code-head"><span>${esc(b.titulo || (cmd ? "Comando" : "Prompt"))}</span>
          <button class="btn sm copy" type="button" data-label="${cmd ? "Copiar" : "Copiar prompt"}">${cmd ? "Copiar" : "Copiar prompt"}</button></div><pre>${esc((b.conteudo || "").trim())}</pre></div>`;
      }
      case "imagem": return `<figure class="b-img"><img src="${esc(b.src)}" alt="${esc(b.legenda || "")}" loading="lazy">${b.legenda ? `<figcaption>${esc(b.legenda)}</figcaption>` : ""}</figure>`;
      case "video": return `<div class="b-video"><iframe src="https://www.youtube.com/embed/${esc(b.youtube)}" allowfullscreen loading="lazy" title="Vídeo"></iframe></div>`;
      case "botao": return `<div><a class="btn solid" href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.texto || "Acessar")} ↗</a></div>`;
      default: return "";
    }
  }
  function heroGuia(p) {
    const n = (p.blocos || []).filter((b) => b.tipo === "prompt").length;
    const stats = [];
    if (n) stats.push(`<span><b>${n}</b> ${n > 1 ? "prompts prontos" : "prompt pronto"}</span>`);
    (p.destaques || []).forEach((d) => stats.push(`<span>${inline(d)}</span>`));
    return `<header class="g-hero"><div class="narrow">
      <span class="g-badge">Tutorial liberado · ${esc(p.categoria)}</span>
      <h1 class="g-title">${titulo(p.titulo)}</h1>
      ${p.resumo ? `<p class="g-lead">${esc(p.resumo)}</p>` : ""}
      ${stats.length ? `<div class="g-stats">${stats.join("")}</div>` : ""}
    </div></header>`;
  }

  /* ---------- baixar guia (HTML offline) ---------- */
  async function baixar(p) {
    let css = "";
    try { const r = await fetch("assets/style.css"); if (r.ok) css = await r.text(); } catch (_) {}
    if (!css) for (const sh of document.styleSheets) { try { for (const r of sh.cssRules) css += r.cssText + "\n"; } catch (_) {} }
    css += "\n.hl{-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}";
    const corpo = `${heroGuia(p)}<main class="narrow g-body">${(p.blocos || []).map(bloco).join("")}
      <p class="b-text" style="margin-top:40px;font-size:14px;color:#6e6e74;text-align:center">${esc(S.nome)} · @${esc(S.instagram)} · ${esc(location.href.split("?")[0])}</p></main>`;
    const js = `document.addEventListener('click',async e=>{const b=e.target.closest('.copy');if(!b)return;const t=b.closest('.b-code').querySelector('pre').innerText;try{await navigator.clipboard.writeText(t)}catch(_){const a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove()}b.textContent='Copiado ✓';setTimeout(()=>b.textContent=b.dataset.label,1600)});`;
    const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(plano(p.titulo))}</title>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Unbounded:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <style>${css}</style></head><body>${corpo}<script>${js}<\/script></body></html>`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    a.download = p.slug + ".html"; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    toast("Tutorial salvo");
  }

  /* ---------- página do guia ---------- */
  function renderPost() {
    const m = location.pathname.match(/\/p\/([^/?#]+)/);
    const qs = new URLSearchParams(location.search);
    const slug = decodeURIComponent((m && m[1]) || qs.get("p") || "").replace(/\/$/, "");
    const p = C.find((x) => x.slug === slug);
    const root = $("#post");
    $("#bar").innerHTML = `<div class="wrap"><a class="bar-back" href="${home}">← ${esc(plano(S.titulo))}</a>
      ${p ? `<div class="bar-title"><b>${esc(plano(p.titulo))}</b>${p.selo ? " · " + esc(p.selo) : ""}</div>
      <div class="bar-actions"><button class="btn sm" id="dl1">↓ Salvar</button>${oferta ? `<a class="btn solid sm opt" href="${esc(oferta.url)}" target="_blank" rel="noopener">${esc(oferta.botao)}</a>` : ""}</div>` : ""}</div>`;
    if (!p) {
      document.title = `Conteúdo não encontrado · ${S.nome}`;
      root.innerHTML = `<header class="g-hero" style="border:0"><div class="narrow"><span class="g-badge">Ops</span>
        <h1 class="g-title">Não achamos <em class="hl">esse conteúdo.</em></h1>
        <p class="g-lead">Talvez o endereço tenha mudado. Volte ao início e pesquise pelo tema ou pela palavra que você comentou.</p>
        <div style="margin-top:30px"><a class="btn solid" href="${home}">Ir para o início</a></div></div></header>`;
      return;
    }
    document.title = `${plano(p.titulo)} · ${S.nome}`;
    const md = $('meta[name="description"]'); if (md) md.content = p.resumo || "";
    const outros = C.filter((x) => x.slug !== p.slug && x.categoria === p.categoria).concat(C.filter((x) => x.slug !== p.slug && x.categoria !== p.categoria)).slice(0, 3);

    root.innerHTML = `${heroGuia(p)}
      <article class="narrow g-body">${(p.blocos || []).map(bloco).join("")}
        ${p.github ? `<div><a class="btn" href="${esc(p.github)}" target="_blank" rel="noopener">Ver no GitHub ↗</a></div>` : ""}
        <div class="save"><p>Salve este tutorial no seu celular ou computador e consulte quando precisar, mesmo offline.</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn solid" id="dl2">↓ Salvar tutorial</button><button class="btn" id="share">Enviar para alguém</button></div></div>
        <div class="save" style="border-style:solid"><p>Ficou com alguma dúvida? Me chama na DM do Instagram que eu te ajudo.</p>
          <a class="btn" href="${dm}" target="_blank" rel="noopener">Chamar na DM ↗</a></div>
        ${oferta ? `<div class="offer"><small>${esc(oferta.titulo)}</small><h3>${esc(oferta.texto)}</h3>
          <a class="btn solid" href="${esc(oferta.url)}" target="_blank" rel="noopener">${esc(oferta.botao)} ↗</a></div>` : ""}
      </article>
      ${outros.length ? `<section class="wrap related"><h4>Continue explorando</h4><div class="grid">${outros.map(card).join("")}</div></section>` : ""}`;

    root.addEventListener("click", async (e) => {
      const b = e.target.closest(".copy"); if (!b) return;
      if (await copiar(b.closest(".b-code").querySelector("pre").innerText)) {
        b.textContent = "Copiado ✓"; b.classList.add("done"); toast("Copiado");
        setTimeout(() => { b.textContent = b.dataset.label; b.classList.remove("done"); }, 1800);
      }
    });
    $("#dl1").onclick = $("#dl2").onclick = () => baixar(p);
    $("#share").onclick = async () => {
      const url = location.href.split("?")[0];
      if (navigator.share) { try { await navigator.share({ title: plano(p.titulo), url }); } catch (_) {} }
      else if (await copiar(url)) toast("Link copiado");
    };
    if (qs.get("baixar")) setTimeout(() => baixar(p), 400);
    observe();
  }

  rodape();
  if (document.body.dataset.page === "home") renderHome();
  if (document.body.dataset.page === "post") renderPost();
})();
