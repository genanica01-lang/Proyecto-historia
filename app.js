/* ==========================================================================
   Nicaragua a través del tiempo — lógica principal
   Portada, línea de tiempo, navegación por períodos, ventana de detalle,
   fuentes y créditos.
   ========================================================================== */

/* ---------- Utilidades ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ---------- Almacenamiento local (con respaldo en memoria) ---------- */
const store = (() => {
  const KEY = 'nicaragua-tiempo.v2';
  let data = null;
  let persistent = true;

  function load() {
    if (data) return data;
    try {
      data = JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      data = {};
      persistent = false;
    }
    return data;
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
      persistent = true;
    } catch (e) {
      persistent = false;
    }
  }

  return {
    get() { return load(); },
    save,
    isPersistent() { load(); return persistent; },
    reset() { data = {}; save(); }
  };
})();

function markViewed(id) {
  const d = store.get();
  d.viewed = d.viewed || {};
  if (!d.viewed[id]) {
    d.viewed[id] = true;
    store.save();
    const badge = $(`.card[data-id="${id}"] .seen`);
    if (badge) badge.hidden = false;
    if (window.renderProgress) window.renderProgress();
  }
}
function viewedCount() {
  return Object.keys(store.get().viewed || {}).length;
}

/* ---------- Períodos (siglos y décadas) ---------- */
const ROMAN = { 16: 'XVI', 17: 'XVII', 18: 'XVIII' };

function eventYear(e) {
  const m = e.date.match(/\d{4}/);
  if (m) return Number(m[0]);
  const s = e.date.match(/Siglo\s+([IVX]+)/);
  if (s) return { XVI: 1550, XVII: 1650, XVIII: 1750 }[s[1]] || 1500;
  return 0;
}

function groupOf(e) {
  const y = eventYear(e);
  if (y < 1800) {
    const c = Math.floor(y / 100) + 1;
    return { key: 'g-s' + c, label: 'Siglo ' + (ROMAN[c] || c) };
  }
  const dec = Math.floor(y / 10) * 10;
  return { key: 'g-' + dec, label: dec + 's' };
}

function excerpt(text, max) {
  if (!text) return '';
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.]$/, '') + '…';
}

const CATEGORY_LABEL = {
  nicaragua: 'Historia de Nicaragua',
  sandino: 'Lucha de Sandino',
  fsln: 'Frente Sandinista (FSLN)',
  cultura: 'Cultura y educación',
  economia: 'Economía',
  vida: 'Vida cotidiana'
};

/* ---------- Portada ---------- */
function setupHero() {
  const years = eventsData.map(eventYear).filter(Boolean);
  const stat = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  stat('statEvents', eventsData.length);
  stat('statSpan', Math.max(...years) - Math.min(...years));
  stat('statQuestions', typeof quizBank !== 'undefined' ? quizBank.length : '—');

  const uniqueSources = new Set();
  eventsData.forEach((e) => (e.sources || []).forEach((s) => uniqueSources.add(s.url)));
  stat('statSources', uniqueSources.size);

  const fig = $('#heroFigure');
  (async () => {
    for (const cand of HERO_IMAGE_CANDIDATES) {
      const img = await loadSummaryImage(cand);
      if (!img) continue;
      const credit = await loadCredit(img.file);
      const el = document.createElement('img');
      el.alt = 'Imagen histórica: ' + img.articleTitle;
      el.decoding = 'async';
      el.referrerPolicy = 'no-referrer';
      el.addEventListener('load', () => fig.classList.add('has-photo'));
      el.src = sizedThumb(img.thumb, 960);
      $('.hero-photo', fig).appendChild(el);
      $('#heroCaption').innerHTML = creditLine(img, credit, img.articleTitle);
      return;
    }
  })();
}

function creditLine(img, credit, title) {
  const parts = [`<strong>${esc(title || img.articleTitle)}</strong>`];
  if (credit && credit.author) parts.push('Autor: ' + esc(credit.author));
  if (credit && credit.license) {
    parts.push(credit.licenseUrl
      ? `<a href="${esc(credit.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(credit.license)}</a>`
      : esc(credit.license));
  }
  const links = [
    `<a href="${esc(img.fileUrl)}" target="_blank" rel="noopener noreferrer">Archivo en Commons</a>`,
    `<a href="${esc(img.page)}" target="_blank" rel="noopener noreferrer">Artículo</a>`
  ];
  return parts.join(' · ') + ' · ' + links.join(' · ');
}

/* ---------- Línea de tiempo ---------- */
const timelineEl = $('#timeline');
let groups = [];

function renderTimeline() {
  timelineEl.innerHTML = '';
  groups = [];
  let lastKey = null;
  let side = 0;

  eventsData.forEach((event) => {
    const g = groupOf(event);
    if (g.key !== lastKey) {
      lastKey = g.key;
      groups.push({ ...g, count: 0 });
      const marker = document.createElement('div');
      marker.className = 'timeline-marker';
      marker.id = g.key;
      marker.innerHTML = `<span>${esc(g.label)}</span>`;
      timelineEl.appendChild(marker);
    }
    groups[groups.length - 1].count++;

    const item = document.createElement('div');
    item.className = 'timeline-item ' + (side++ % 2 === 0 ? 'is-left' : 'is-right');
    const seen = !!(store.get().viewed || {})[event.id];
    item.innerHTML = `
      <a class="card" href="#evento-${event.id}" data-id="${event.id}">
        <div class="card-media" data-media="${event.id}">
          <span class="card-media-date">${esc(event.date)}</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="event-date">${esc(event.date)}</span>
            <span class="seen" ${seen ? '' : 'hidden'}>✓ Visto</span>
          </div>
          <h3 class="event-title">${esc(event.title)}</h3>
          <p class="event-excerpt">${esc(excerpt(event.context || event.details, 150))}</p>
          <span class="card-cta">Ver detalles <span aria-hidden="true">→</span></span>
        </div>
      </a>`;
    timelineEl.appendChild(item);
  });

  renderDecadeNav();
  setupReveal();
  setupCardImages();
  updateTimelineProgress();
  updateSpy();
}

function renderDecadeNav() {
  const box = $('#decadeScroll');
  box.innerHTML = groups.map((g) =>
    `<button type="button" class="decade-chip" data-group="${g.key}" aria-label="Ir a ${esc(g.label)}, ${g.count} acontecimientos">
       ${esc(g.label)}<span class="decade-count">${g.count}</span>
     </button>`).join('');

  box.addEventListener('click', (e) => {
    const btn = e.target.closest('.decade-chip');
    if (!btn) return;
    const target = document.getElementById(btn.dataset.group);
    if (target) target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  });
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function setupReveal() {
  const items = $$('.timeline-item');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
  items.forEach((el) => observer.observe(el));
}

function setupCardImages() {
  const media = $$('.card-media');
  const load = (el) => {
    const id = Number(el.dataset.media);
    loadFirstEventImage(id).then((img) => {
      if (!img || !el.isConnected) return;
      const tag = document.createElement('img');
      tag.alt = 'Imagen histórica relacionada: ' + img.articleTitle;
      tag.loading = 'lazy';
      tag.decoding = 'async';
      tag.referrerPolicy = 'no-referrer';
      tag.addEventListener('load', () => el.classList.add('has-photo'));
      tag.addEventListener('error', () => tag.remove());
      tag.src = sizedThumb(img.thumb, 500);
      el.prepend(tag);
    });
  };
  if (!('IntersectionObserver' in window)) { media.forEach(load); return; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        load(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '500px 0px' });
  media.forEach((el) => observer.observe(el));
}

function updateTimelineProgress() {
  const rect = timelineEl.getBoundingClientRect();
  const reached = window.innerHeight * 0.55 - rect.top;
  const fraction = Math.max(0, Math.min(1, reached / rect.height));
  timelineEl.style.setProperty('--progress', (fraction * 100).toFixed(2) + '%');
}

/* ---------- Seguimiento al hacer scroll (sección activa y período activo) ---------- */
let spyTick = false;
function updateSpy() {
  spyTick = false;

  // Sección activa en la navegación
  const sections = ['inicio', 'linea', 'epocas', 'aprender', 'fuentes'];
  const line = window.innerHeight * 0.35;
  let current = sections[0];
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= line) current = id;
  });
  $$('[data-nav]').forEach((a) => {
    const on = a.dataset.nav === current;
    a.classList.toggle('active', on);
    if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });

  // Período activo en la barra de décadas
  const decadeBar = $('#decadeNav');
  if (!decadeBar) return;
  const offset = decadeBar.getBoundingClientRect().bottom + 24;
  let activeKey = groups.length ? groups[0].key : null;
  groups.forEach((g) => {
    const m = document.getElementById(g.key);
    if (m && !m.classList.contains('is-hidden') && m.getBoundingClientRect().top <= offset) activeKey = g.key;
  });
  const scroller = $('#decadeScroll');
  $$('.decade-chip', scroller).forEach((chip) => {
    const on = chip.dataset.group === activeKey;
    if (on && !chip.classList.contains('active')) {
      const left = chip.offsetLeft - scroller.clientWidth / 2 + chip.offsetWidth / 2;
      scroller.scrollTo({ left, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
    chip.classList.toggle('active', on);
  });
}

function onScroll() {
  updateTimelineProgress();
  if (!spyTick) {
    spyTick = true;
    requestAnimationFrame(updateSpy);
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);

/* ---------- Ventana de detalle ---------- */
const modalOverlay = $('#modalOverlay');
const modalBody = $('#modalBody');
const modalCounter = $('#modalCounter');
const modalPrev = $('#modalPrev');
const modalNext = $('#modalNext');
let currentId = null;
let lastFocus = null;
let pushed = false;
let afterClose = null;

function personInitials(name) {
  return name.replace(/\(.*?\)/g, '').trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

function renderModal(id) {
  const event = eventsData.find((e) => e.id === id);
  if (!event) return false;
  currentId = id;
  const media = EVENT_MEDIA[id];
  const idx = eventsData.findIndex((e) => e.id === id);
  const prev = eventsData[idx - 1];
  const next = eventsData[idx + 1];

  modalCounter.textContent = `${idx + 1} de ${eventsData.length}`;
  modalPrev.disabled = !prev;
  modalNext.disabled = !next;
  modalPrev.setAttribute('aria-label', prev ? 'Acontecimiento anterior: ' + prev.title : 'No hay acontecimiento anterior');
  modalNext.setAttribute('aria-label', next ? 'Acontecimiento siguiente: ' + next.title : 'No hay acontecimiento siguiente');

  const panel = (title, html, cls = '') => html ? `<section class="panel ${cls}"><h3>${title}</h3>${html}</section>` : '';

  const protagonists = (event.protagonists || []).map((p) =>
    `<li class="proto" data-name="${esc(cleanName(p))}">
       <span class="proto-avatar" aria-hidden="true">${esc(personInitials(p))}</span>
       <span class="proto-name">${esc(p)}</span>
     </li>`).join('');

  const datos = (event.datos && event.datos.length)
    ? `<ul class="datos-list">${event.datos.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>` : '';

  const sources = event.sources || [];
  const sourcesHtml = sources.length ? `
    <details class="sources-box">
      <summary>Fuentes consultadas <span class="count-pill">${sources.length}</span></summary>
      <ul class="sources-list">
        ${sources.map((s, i) => {
          let host = '';
          try { host = new URL(s.url).hostname.replace(/^www\./, ''); } catch (e) { /* sin dominio */ }
          return `<li><a class="source-item" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">
            <span class="source-num">${i + 1}</span>
            <span class="source-text"><span class="source-title">${esc(s.title)}</span><span class="source-domain">${esc(host)}</span></span>
          </a></li>`;
        }).join('')}
      </ul>
    </details>` : '';

  const mapHtml = media ? `
    <section class="panel panel-map">
      <h3>Dónde ocurrió</h3>
      <p class="map-place">📍 ${esc(media.place)}</p>
      <div class="map-wrap" id="mapWrap">
        <iframe title="Mapa de ubicación: ${esc(media.place)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${mapEmbedUrl(media)}"></iframe>
        <button type="button" class="map-activate" id="mapActivate">Tocar para mover el mapa</button>
      </div>
      <p class="map-credit">Mapa © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">colaboradores de OpenStreetMap</a>. Ubicación aproximada de la zona.
        <a href="${mapLinkUrl(media)}" target="_blank" rel="noopener noreferrer">Abrir mapa grande</a></p>
    </section>` : '';

  const practiceCount = (typeof quizBank !== 'undefined') ? quizBank.filter((q) => q.event === id).length : 0;
  const practiceHtml = practiceCount ? `
    <section class="panel panel-practice">
      <div>
        <h3>¿Qué aprendiste?</h3>
        <p>Practica con ${practiceCount} ${practiceCount === 1 ? 'pregunta' : 'preguntas'} sobre este acontecimiento.</p>
      </div>
      <button type="button" class="btn btn-primary" id="practiceBtn">Practicar este tema</button>
    </section>` : '';

  modalBody.innerHTML = `
    <article class="modal-article" data-event="${id}">
      <figure class="m-figure is-loading" id="mFigure">
        <div class="m-photo"><span class="m-photo-date">${esc(event.date)}</span></div>
        <figcaption class="m-caption" id="mCaption">Buscando imagen histórica…</figcaption>
        <div class="m-thumbs" id="mThumbs" hidden></div>
      </figure>

      <header class="modal-hero">
        <span class="modal-date">${esc(event.date)}</span>
        <h2 id="modalTitle">${esc(event.title)}</h2>
        <span class="modal-tag">${esc(CATEGORY_LABEL[event.category] || CATEGORY_LABEL.nicaragua)}</span>
      </header>

      ${panel('Contexto histórico', event.context ? `<p>${esc(event.context)}</p>` : '')}
      ${panel('¿Cómo ocurrió?', `<p>${esc(event.details)}</p>`)}
      ${panel('Consecuencias', `<p>${esc(event.consequences)}</p>`)}
      ${panel('Datos relevantes', datos, 'panel-datos')}
      ${mapHtml}
      ${panel('Personajes principales', `<ul class="proto-list">${protagonists}</ul><p class="photo-credit" id="photoCredit" hidden>Fotos de Wikimedia Commons. Toca una foto para ver su autor y licencia.</p>`)}
      ${practiceHtml}

      <details class="credits-box" id="creditsBox">
        <summary>Créditos de imágenes y mapa</summary>
        <ul class="credits-list" id="creditsList"><li>Cargando créditos…</li></ul>
      </details>

      ${sourcesHtml}

      <nav class="modal-nav" aria-label="Cambiar de acontecimiento">
        <button type="button" class="nav-btn" id="navPrev" ${prev ? '' : 'disabled'}>← ${prev ? esc(excerpt(prev.title, 34)) : 'Anterior'}</button>
        <button type="button" class="nav-btn" id="navNext" ${next ? '' : 'disabled'}>${next ? esc(excerpt(next.title, 34)) : 'Siguiente'} →</button>
      </nav>
    </article>`;

  $('#mapActivate', modalBody) && $('#mapActivate', modalBody).addEventListener('click', () => $('#mapWrap').classList.add('active'));
  const practice = $('#practiceBtn', modalBody);
  if (practice) practice.addEventListener('click', () => closeEvent(() => {
    document.getElementById('aprender').scrollIntoView({ behavior: 'auto', block: 'start' });
    if (window.startEventPractice) window.startEventPractice(id);
  }));
  $('#navPrev', modalBody).addEventListener('click', () => prev && goToEvent(prev.id));
  $('#navNext', modalBody).addEventListener('click', () => next && goToEvent(next.id));

  modalBody.scrollTop = 0;
  fillModalImages(id);
  attachPhotos(modalBody);
  markViewed(id);
  return true;
}

async function fillModalImages(id) {
  const images = await loadEventImages(id, 3);
  if (currentId !== id) return;
  const figure = $('#mFigure');
  const caption = $('#mCaption');
  const list = $('#creditsList');
  if (!figure) return;

  const media = EVENT_MEDIA[id];
  const mapItem = media
    ? `<li><strong>Mapa:</strong> © colaboradores de <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> (licencia ODbL). <a href="${mapLinkUrl(media)}" target="_blank" rel="noopener noreferrer">Ver en OpenStreetMap</a></li>`
    : '';

  if (!images.length) {
    figure.classList.remove('is-loading');
    caption.textContent = 'No se encontró una imagen libre para este acontecimiento. Los mapas y las fuentes sí están disponibles abajo.';
    list.innerHTML = '<li>No hay imágenes para este acontecimiento.</li>' + mapItem;
    return;
  }

  const credits = await Promise.all(images.map((img) => loadCredit(img.file)));
  if (currentId !== id) return;
  images.forEach((img, i) => registerCredit(img, credits[i], id));

  const photo = $('.m-photo', figure);
  const show = (i) => {
    const img = images[i];
    let tag = $('img', photo);
    if (!tag) {
      tag = document.createElement('img');
      tag.decoding = 'async';
      tag.referrerPolicy = 'no-referrer';
      photo.appendChild(tag);
    }
    tag.onload = () => figure.classList.remove('is-loading');
    tag.onerror = () => { figure.classList.remove('is-loading'); };
    tag.alt = 'Imagen histórica relacionada con el acontecimiento: ' + img.articleTitle;
    tag.src = sizedThumb(img.thumb, 960);
    caption.innerHTML = creditLine(img, credits[i], img.articleTitle);
    $$('.m-thumb', figure).forEach((b, j) => b.setAttribute('aria-pressed', String(j === i)));
  };

  const thumbs = $('#mThumbs');
  if (images.length > 1) {
    thumbs.hidden = false;
    thumbs.innerHTML = images.map((img, i) =>
      `<button type="button" class="m-thumb" aria-label="Ver imagen ${i + 1}: ${esc(img.articleTitle)}" aria-pressed="${i === 0}">
         <img src="${esc(sizedThumb(img.thumb, 250))}" alt="" referrerpolicy="no-referrer" loading="lazy"></button>`).join('');
    $$('.m-thumb', thumbs).forEach((b, i) => b.addEventListener('click', () => show(i)));
  }
  show(0);

  list.innerHTML = images.map((img, i) => `<li>${creditLine(img, credits[i], img.articleTitle)}</li>`).join('') + mapItem;
}

function attachPhotos(root) {
  const credit = $('#photoCredit', root);
  $$('.proto', root).forEach((li) => {
    loadPhoto(li.dataset.name).then((photo) => {
      if (!photo || !li.isConnected) return;
      const link = document.createElement('a');
      link.className = 'proto-img';
      link.href = photo.fileUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = 'Ver autor y licencia de esta foto';

      const img = document.createElement('img');
      img.alt = 'Fotografía de ' + li.dataset.name;
      img.referrerPolicy = 'no-referrer';
      img.addEventListener('load', () => {
        li.classList.add('has-photo');
        if (credit) credit.hidden = false;
      });
      img.addEventListener('error', () => link.remove());
      img.src = sizedThumb(photo.thumb, 250);
      link.appendChild(img);
      li.prepend(link);
    });
  });
}

/* ---------- Abrir / cerrar la ventana (con botón "atrás" del celular) ---------- */
function showModal() {
  if (!modalOverlay.classList.contains('active')) {
    lastFocus = document.activeElement;
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('modal-open');
    $('#closeModal').focus({ preventScroll: true });
  }
}

function hideModal() {
  if (!modalOverlay.classList.contains('active')) return;
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.documentElement.classList.remove('modal-open');
  currentId = null;
  if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  const cb = afterClose;
  afterClose = null;
  if (cb) setTimeout(cb, 30);
}

function openEvent(id) {
  if (!eventsData.some((e) => e.id === id)) return;
  const wasOpen = modalOverlay.classList.contains('active');
  if (!renderModal(id)) return;
  showModal();
  const hash = '#evento-' + id;
  try {
    if (!wasOpen) { history.pushState({ evento: id }, '', hash); pushed = true; }
    else if (location.hash !== hash) history.replaceState({ evento: id }, '', hash);
  } catch (e) { /* algunos entornos no permiten modificar el historial */ }
}

function goToEvent(id) {
  openEvent(id);
  modalBody.scrollTop = 0;
}

function closeEvent(cb) {
  if (!modalOverlay.classList.contains('active')) { if (cb) cb(); return; }
  afterClose = cb || null;
  if (pushed) {
    pushed = false;
    history.back();
  } else {
    try { history.replaceState(null, '', location.pathname + location.search + '#linea'); } catch (e) { /* ignorar */ }
    hideModal();
  }
}

function syncWithHash() {
  const m = location.hash.match(/^#evento-(\d+)$/);
  if (m) {
    const id = Number(m[1]);
    if (renderModal(id)) showModal();
  } else {
    pushed = false;
    hideModal();
  }
}
window.addEventListener('popstate', syncWithHash);

document.addEventListener('click', (e) => {
  const card = e.target.closest('a.card');
  if (card && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
    e.preventDefault();
    openEvent(Number(card.dataset.id));
    return;
  }
  const opener = e.target.closest('[data-open-event]');
  if (opener) {
    e.preventDefault();
    openEvent(Number(opener.dataset.openEvent));
  }
});

$('#closeModal').addEventListener('click', () => closeEvent());
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeEvent(); });
modalPrev.addEventListener('click', () => {
  const i = eventsData.findIndex((e) => e.id === currentId);
  if (i > 0) goToEvent(eventsData[i - 1].id);
});
modalNext.addEventListener('click', () => {
  const i = eventsData.findIndex((e) => e.id === currentId);
  if (i >= 0 && i < eventsData.length - 1) goToEvent(eventsData[i + 1].id);
});

document.addEventListener('keydown', (e) => {
  if (!modalOverlay.classList.contains('active')) return;
  if (e.key === 'Escape') { closeEvent(); return; }
  if (e.key === 'ArrowLeft' && !modalPrev.disabled) modalPrev.click();
  if (e.key === 'ArrowRight' && !modalNext.disabled) modalNext.click();
  if (e.key === 'Tab') {
    const focusable = $$('button:not([disabled]), a[href], summary, select, input', $('#modalSheet')).filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

// Deslizar a los lados para cambiar de acontecimiento (celular)
(() => {
  let sx = 0, sy = 0, t0 = 0, ignore = false;
  modalBody.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    sx = t.clientX; sy = t.clientY; t0 = Date.now();
    ignore = !!e.target.closest('.m-thumbs, .map-wrap, .sources-list, select');
  }, { passive: true });
  modalBody.addEventListener('touchend', (e) => {
    if (ignore) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - sx;
    const dy = t.clientY - sy;
    if (Date.now() - t0 > 600 || Math.abs(dx) < 90 || Math.abs(dy) > 50) return;
    if (dx < 0 && !modalNext.disabled) modalNext.click();
    if (dx > 0 && !modalPrev.disabled) modalPrev.click();
  }, { passive: true });
})();

/* ---------- Fuentes y créditos ---------- */
const creditRegistry = new Map();

function registerCredit(img, credit, eventId) {
  const entry = creditRegistry.get(img.file) || { img, credit, events: new Set() };
  entry.credit = credit;
  entry.events.add(eventId);
  creditRegistry.set(img.file, entry);
  renderCreditRegistry();
}

function renderCreditRegistry() {
  const box = $('#creditRegistry');
  if (!box) return;
  const entries = Array.from(creditRegistry.values());
  if (!entries.length) {
    box.innerHTML = '<p class="muted">Aún no se han cargado imágenes. Abre acontecimientos o toca el botón para cargar todos los créditos.</p>';
    return;
  }
  entries.sort((a, b) => a.img.file.localeCompare(b.img.file));
  box.innerHTML = `<ul class="credits-list">${entries.map((en) =>
    `<li>${creditLine(en.img, en.credit, en.img.file.replace(/_/g, ' ').replace(/\.[a-z0-9]+$/i, ''))}
       <span class="used-in">Usada en: ${Array.from(en.events).sort((a, b) => a - b).map((id) => `<button type="button" class="chip-link small" data-open-event="${id}">${id}</button>`).join(' ')}</span></li>`).join('')}</ul>
    <p class="muted">${entries.length} imágenes con crédito registrado.</p>`;
}

function renderSources() {
  const map = new Map();
  eventsData.forEach((ev) => (ev.sources || []).forEach((s) => {
    const entry = map.get(s.url) || { ...s, events: [] };
    entry.events.push(ev.id);
    map.set(s.url, entry);
  }));
  const all = Array.from(map.values()).sort((a, b) => b.events.length - a.events.length || a.title.localeCompare(b.title, 'es'));

  const html = all.map((s) => {
    let host = '';
    try { host = new URL(s.url).hostname.replace(/^www\./, ''); } catch (e) { /* sin dominio */ }
    return `<li class="biblio-item">
      <a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer"><span class="source-title">${esc(s.title)}</span><span class="source-domain">${esc(host)}</span></a>
      <span class="used-in">Citada en ${s.events.length} ${s.events.length === 1 ? 'acontecimiento' : 'acontecimientos'}:
        ${s.events.slice(0, 12).map((id) => `<button type="button" class="chip-link small" data-open-event="${id}">${id}</button>`).join(' ')}${s.events.length > 12 ? ' …' : ''}</span>
    </li>`;
  }).join('');

  $('#biblioList').innerHTML = html;
  $('#biblioCount').textContent = all.length;

  const btn = $('#loadAllCredits');
  btn.addEventListener('click', async () => {
    btn.disabled = true;
    let done = 0;
    for (const ev of eventsData) {
      const imgs = await loadEventImages(ev.id, 3);
      const creds = await Promise.all(imgs.map((i) => loadCredit(i.file)));
      imgs.forEach((img, i) => registerCredit(img, creds[i], ev.id));
      done++;
      btn.textContent = `Cargando créditos… ${done}/${eventsData.length}`;
    }
    btn.textContent = 'Créditos cargados ✓';
  });
  renderCreditRegistry();
}


/* ---------- Buscador y filtros ---------- */
const FILTER_ERAS = [
  { id: 'todas', name: 'Todas las épocas', from: -Infinity, to: Infinity },
  { id: 'previo', name: 'Contacto y conquista (hasta 1523)', from: 0, to: 1523 },
  { id: 'colonial', name: 'Época colonial (1524–1820)', from: 1524, to: 1820 },
  { id: 'independencia', name: 'Independencia y guerras civiles (1821–1892)', from: 1821, to: 1892 },
  { id: 'liberal', name: 'Zelaya e intervención (1893–1933)', from: 1893, to: 1933 },
  { id: 'somoza', name: 'Dinastía somocista (1934–1978)', from: 1934, to: 1978 },
  { id: 'revolucion', name: 'Revolución Popular Sandinista (1979–1989)', from: 1979, to: 1989 },
  { id: 'actual', name: 'Transición y Nicaragua actual (1990–2025)', from: 1990, to: Infinity }
];
const THEME_FILTERS = [
  ['todos', 'Todos'],
  ['nicaragua', 'Historia de Nicaragua'],
  ['sandino', 'Lucha de Sandino'],
  ['fsln', 'Frente Sandinista (FSLN)'],
  ['cultura', 'Cultura y educación'],
  ['economia', 'Economía'],
  ['vida', 'Vida cotidiana']
];

// Quita acentos sin cambiar la longitud del texto (para poder resaltar coincidencias)
function norm(s) {
  return String(s || '')
    .replace(/[\u00C0-\u017F]/g, (ch) => ch.normalize('NFD')[0])
    .toLowerCase();
}

const filterState = { q: '', theme: 'todos', era: 'todas', unseen: false };

function eventFields(ev) {
  return [
    ['Contexto', ev.context],
    ['Cómo ocurrió', ev.details],
    ['Consecuencias', ev.consequences],
    ['Datos', (ev.datos || []).join(' · ')],
    ['Personajes', (ev.protagonists || []).join(', ')]
  ];
}

const searchIndex = new Map();
function buildSearchIndex() {
  eventsData.forEach((ev) => {
    const text = [ev.date, ev.title, ...eventFields(ev).map((f) => f[1])].join(' | ');
    searchIndex.set(ev.id, norm(text));
  });
}

function highlight(text, terms) {
  if (!terms.length) return esc(text);
  const n = norm(text);
  const ranges = [];
  terms.forEach((t) => {
    let i = n.indexOf(t);
    while (i !== -1) { ranges.push([i, i + t.length]); i = n.indexOf(t, i + t.length); }
  });
  if (!ranges.length) return esc(text);
  ranges.sort((x, y) => x[0] - y[0]);
  const merged = [ranges[0].slice()];
  ranges.slice(1).forEach((r) => {
    const last = merged[merged.length - 1];
    if (r[0] <= last[1]) last[1] = Math.max(last[1], r[1]); else merged.push(r.slice());
  });
  let out = '';
  let pos = 0;
  merged.forEach(([s, e]) => {
    out += esc(text.slice(pos, s)) + '<mark>' + esc(text.slice(s, e)) + '</mark>';
    pos = e;
  });
  return out + esc(text.slice(pos));
}

// Fragmento del texto donde aparece la búsqueda (si no está en el resumen de la tarjeta)
function snippetFor(ev, terms) {
  const base = ev.context || ev.details || '';
  if (!terms.length) return { label: '', html: esc(excerpt(base, 150)) };
  const shown = norm(excerpt(base, 150));
  if (terms.some((t) => shown.includes(t))) return { label: '', html: highlight(excerpt(base, 150), terms) };
  for (const [label, text] of eventFields(ev)) {
    if (!text) continue;
    const n = norm(text);
    const idxs = terms.map((t) => n.indexOf(t)).filter((i) => i >= 0);
    if (!idxs.length) continue;
    const at = Math.min(...idxs);
    let start = Math.max(0, at - 50);
    if (start > 0) { const sp = text.indexOf(' ', start); start = sp === -1 ? start : sp + 1; }
    const piece = text.slice(start, start + 150);
    return { label, html: (start > 0 ? '…' : '') + highlight(piece, terms) + (start + 150 < text.length ? '…' : '') };
  }
  return { label: '', html: esc(excerpt(base, 150)) };
}

function matchesFilters(ev, terms) {
  if (filterState.theme !== 'todos' && ev.category !== filterState.theme) return false;
  const era = FILTER_ERAS.find((e) => e.id === filterState.era);
  const y = eventYear(ev);
  if (era && (y < era.from || y > era.to)) return false;
  if (filterState.unseen && (store.get().viewed || {})[ev.id]) return false;
  if (terms.length) {
    const hay = searchIndex.get(ev.id) || '';
    if (!terms.every((t) => hay.includes(t))) return false;
  }
  return true;
}

function applyFilters() {
  const terms = norm(filterState.q).split(/\s+/).filter(Boolean);
  const visibleByGroup = {};
  let visible = 0;
  let side = 0;

  $$('.timeline-item').forEach((item) => {
    const id = Number(item.querySelector('.card').dataset.id);
    const ev = eventsData.find((e) => e.id === id);
    const ok = matchesFilters(ev, terms);
    item.classList.toggle('is-hidden', !ok);
    if (!ok) return;
    visible++;
    const gk = groupOf(ev).key;
    visibleByGroup[gk] = (visibleByGroup[gk] || 0) + 1;
    item.classList.remove('is-left', 'is-right');
    item.classList.add(side++ % 2 === 0 ? 'is-left' : 'is-right', 'in-view');

    const snip = snippetFor(ev, terms);
    $('.event-title', item).innerHTML = highlight(ev.title, terms);
    $('.event-excerpt', item).innerHTML = (snip.label ? `<span class="snip-label">${esc(snip.label)}:</span> ` : '') + snip.html;
  });

  groups.forEach((g) => {
    const marker = document.getElementById(g.key);
    if (marker) marker.classList.toggle('is-hidden', !visibleByGroup[g.key]);
  });
  $$('.decade-chip').forEach((chip) => {
    const n = visibleByGroup[chip.dataset.group] || 0;
    chip.disabled = n === 0;
    chip.classList.toggle('is-empty', n === 0);
    const count = $('.decade-count', chip);
    if (count) count.textContent = n;
  });

  const active = (filterState.q.trim() ? 1 : 0) + (filterState.theme !== 'todos' ? 1 : 0) + (filterState.era !== 'todas' ? 1 : 0) + (filterState.unseen ? 1 : 0);
  const filtersOnly = active - (filterState.q.trim() ? 1 : 0);
  const badge = $('#filterBadge');
  badge.textContent = filtersOnly;
  badge.hidden = filtersOnly === 0;
  $('#searchClear').hidden = !filterState.q;
  $('#searchStatus').textContent = active
    ? `Mostrando ${visible} de ${eventsData.length} acontecimientos`
    : `${eventsData.length} acontecimientos`;
  $('#emptyState').hidden = visible !== 0;
  $('#timeline').classList.toggle('is-empty', visible === 0);
  updateTimelineProgress();
  updateSpy();
}

function resetFilters() {
  filterState.q = ''; filterState.theme = 'todos'; filterState.era = 'todas'; filterState.unseen = false;
  $('#searchInput').value = '';
  $('#filterEra').value = 'todas';
  $('#filterUnseen').checked = false;
  syncThemeChips();
  applyFilters();
}

function syncThemeChips() {
  $$('.theme-chip').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.theme === filterState.theme)));
}

function setupFilters() {
  buildSearchIndex();
  const counts = {};
  eventsData.forEach((e) => { counts[e.category] = (counts[e.category] || 0) + 1; });

  $('#filterTheme').innerHTML = THEME_FILTERS.map(([key, label]) =>
    `<button type="button" class="theme-chip" role="radio" data-theme="${key}" aria-checked="${key === 'todos'}">${esc(label)}${key === 'todos' ? '' : ` <span class="chip-n">${counts[key] || 0}</span>`}</button>`).join('');
  $('#filterEra').innerHTML = FILTER_ERAS.map((e) => `<option value="${e.id}">${esc(e.name)}</option>`).join('');

  let timer = null;
  $('#searchInput').addEventListener('input', (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => { filterState.q = e.target.value; applyFilters(); }, 120);
    $('#searchClear').hidden = !e.target.value;
  });
  $('#searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && e.target.value) { e.preventDefault(); resetSearchText(); }
    if (e.key === 'Enter') { e.preventDefault(); e.target.blur(); const first = $('.timeline-item:not(.is-hidden) .card'); if (first) first.scrollIntoView({ block: 'center' }); }
  });
  $('#searchClear').addEventListener('click', () => { resetSearchText(); $('#searchInput').focus(); });
  function resetSearchText() { $('#searchInput').value = ''; filterState.q = ''; applyFilters(); }

  $('#filterTheme').addEventListener('click', (e) => {
    const b = e.target.closest('.theme-chip');
    if (!b) return;
    filterState.theme = b.dataset.theme; syncThemeChips(); applyFilters();
  });
  $('#filterEra').addEventListener('change', (e) => { filterState.era = e.target.value; applyFilters(); });
  $('#filterUnseen').addEventListener('change', (e) => { filterState.unseen = e.target.checked; applyFilters(); });
  $('#filterReset').addEventListener('click', resetFilters);
  $('#emptyReset').addEventListener('click', resetFilters);
  $('#filterToggle').addEventListener('click', () => {
    const body = $('#filterBody');
    const open = body.hidden;
    body.hidden = !open;
    $('#filterToggle').setAttribute('aria-expanded', String(open));
  });

  // Atajo: "/" enfoca el buscador
  document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    if (/INPUT|SELECT|TEXTAREA/.test((document.activeElement || {}).tagName || '')) return;
    if (document.getElementById('modalOverlay').classList.contains('active')) return;
    e.preventDefault();
    $('#searchInput').focus();
    $('#searchPanel').scrollIntoView({ block: 'center' });
  });

  applyFilters();
}


/* ---------- Modo oscuro ---------- */
function applyTheme(theme, save) {
  const dark = theme === 'dark';
  if (dark) document.documentElement.setAttribute('data-theme', 'dark'); else document.documentElement.removeAttribute('data-theme');
  const btn = $('#themeToggle');
  const label = dark ? 'Cambiar al modo claro' : 'Cambiar al modo oscuro';
  btn.setAttribute('aria-label', label);
  btn.setAttribute('aria-pressed', String(dark));
  $('#themeTip').textContent = label;
  if (save) { store.get().theme = dark ? 'dark' : 'light'; store.save(); }
}

function setupTheme() {
  const btn = $('#themeToggle');
  applyTheme(store.get().theme === 'dark' ? 'dark' : 'light', false);
  let tipTimer = null;
  btn.addEventListener('click', () => {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    btn.classList.add('show-tip');          // en celular no hay "hover": se muestra un momento
    clearTimeout(tipTimer);
    tipTimer = setTimeout(() => btn.classList.remove('show-tip'), 1800);
  });
}

/* ---------- Inicio ---------- */
document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  renderTimeline();
  setupFilters();
  setupHero();
  renderSources();
  if (window.renderCompare) window.renderCompare();
  updateSpy();
  if (/^#evento-\d+$/.test(location.hash)) syncWithHash();
});
