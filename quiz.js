/* ==========================================================================
   Zona de aprendizaje: quiz por niveles, resultados en %, revisión de
   errores, repaso de falladas, récord personal y progreso.
   Depende de: quizdata.js (quizBank), data.js (eventsData), app.js (store, esc, $)
   ========================================================================== */

const LEVELS = {
  facil:      { label: 'Fácil',      icon: '🌱', desc: 'Fechas y personajes principales' },
  intermedio: { label: 'Intermedio', icon: '📘', desc: 'Causas, lugares y consecuencias' },
  avanzado:   { label: 'Avanzado',   icon: '🏆', desc: 'Cifras, nombres y detalles' },
  mixto:      { label: 'Mixto',      icon: '🎲', desc: 'De fácil a difícil' }
};
const LEVEL_ORDER = ['facil', 'intermedio', 'avanzado'];
const LENGTHS = [5, 10];
const MASTERED_STREAK = 2; // aciertos seguidos para considerar una pregunta "dominada"

const quizCard = document.getElementById('quizCard');
const progressPanel = document.getElementById('progressPanel');

let config = { level: 'facil', length: 5 };
let session = null;

/* ---------- Datos guardados ---------- */
function qData() {
  const d = store.get();
  d.quiz = d.quiz || {};
  d.quiz.best = d.quiz.best || {};
  d.quiz.stats = d.quiz.stats || {};
  d.quiz.history = d.quiz.history || [];
  return d.quiz;
}

function loadPrefs() {
  const p = qData().prefs;
  if (p && LEVELS[p.level]) config.level = p.level;
  if (p && LENGTHS.includes(p.length)) config.length = p.length;
}

function isMastered(id) {
  const s = qData().stats[id];
  return !!(s && s.streak >= MASTERED_STREAK);
}

function recordAnswer(id, ok) {
  const stats = qData().stats;
  const s = stats[id] || { ok: 0, bad: 0, streak: 0 };
  if (ok) { s.ok++; s.streak++; } else { s.bad++; s.streak = 0; }
  stats[id] = s;
  store.save();
}

/* ---------- Utilidades ---------- */
function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function eventTitle(id) {
  const ev = eventsData.find((e) => e.id === id);
  return ev ? ev.title : '';
}

function poolFor(level) {
  return level === 'mixto' ? quizBank : quizBank.filter((q) => q.level === level);
}

function prepare(item) {
  const options = shuffle(item.options.map((text, i) => ({ text, correct: i === item.answer })));
  return { ...item, shuffled: options };
}

// Prioriza las preguntas que aún no se dominan, sin perder el azar.
function pickQuestions(level, length) {
  const take = (pool, n) => shuffle(pool).sort((a, b) => Number(isMastered(a.id)) - Number(isMastered(b.id))).slice(0, n);
  if (level !== 'mixto') return take(poolFor(level), length).map(prepare);

  const nHard = Math.max(1, Math.round(length * 0.2));
  const nMid = Math.round(length * 0.4);
  const nEasy = length - nHard - nMid;
  const chosen = [
    ...take(poolFor('facil'), nEasy),
    ...take(poolFor('intermedio'), nMid),
    ...take(poolFor('avanzado'), nHard)
  ];
  return chosen.map(prepare); // ya queda ordenado de fácil a difícil
}

function pct(score, total) {
  return total ? Math.round((score / total) * 100) : 0;
}

function formatDate(ts) {
  try {
    return new Date(ts).toLocaleDateString('es', { day: 'numeric', month: 'short' });
  } catch (e) { return ''; }
}

function bringIntoView() {
  const r = quizCard.getBoundingClientRect();
  if (r.top < 0 || r.top > window.innerHeight * 0.45) {
    quizCard.scrollIntoView({ behavior: 'auto', block: 'start' });
  }
}

function levelBadge(level) {
  const l = LEVELS[level];
  return `<span class="level-badge lvl-${level}"><span aria-hidden="true">${l.icon}</span> ${l.label}</span>`;
}

/* ---------- Pantalla de configuración ---------- */
function showSetup() {
  session = null;
  const best = qData().best;

  const levelCards = ['facil', 'intermedio', 'avanzado', 'mixto'].map((key) => {
    const l = LEVELS[key];
    const count = poolFor(key).length;
    const b5 = best[key + '-5'];
    const b10 = best[key + '-10'];
    const top = Math.max(b5 ? b5.pct : -1, b10 ? b10.pct : -1);
    return `<button type="button" class="level-card lvl-${key}" role="radio" aria-checked="${config.level === key}" data-level="${key}">
      <span class="level-icon" aria-hidden="true">${l.icon}</span>
      <span class="level-name">${l.label}</span>
      <span class="level-desc">${l.desc}</span>
      <span class="level-meta">${count} preguntas${top >= 0 ? ` · Récord ${top} %` : ''}</span>
    </button>`;
  }).join('');

  const lengthBtns = LENGTHS.map((n) =>
    `<button type="button" class="seg-btn" role="radio" aria-checked="${config.length === n}" data-length="${n}">${n} preguntas</button>`).join('');

  quizCard.innerHTML = `
    <p class="quiz-count">Quiz de historia</p>
    <h3 class="quiz-title">Elige tu reto</h3>
    <p class="quiz-lead">Cada pregunta tiene su propio nivel de dificultad. Las que aún no dominas aparecen primero.</p>

    <p class="field-label" id="lvlLabel">Nivel</p>
    <div class="level-grid" role="radiogroup" aria-labelledby="lvlLabel">${levelCards}</div>

    <p class="field-label" id="lenLabel">Cantidad de preguntas</p>
    <div class="seg" role="radiogroup" aria-labelledby="lenLabel">${lengthBtns}</div>

    <button type="button" class="quiz-btn big" id="quizStart">Empezar el quiz</button>
  `;

  $$('.level-card', quizCard).forEach((b) => b.addEventListener('click', () => {
    config.level = b.dataset.level;
    savePrefs();
    $$('.level-card', quizCard).forEach((x) => x.setAttribute('aria-checked', String(x === b)));
  }));
  $$('.seg-btn', quizCard).forEach((b) => b.addEventListener('click', () => {
    config.length = Number(b.dataset.length);
    savePrefs();
    $$('.seg-btn', quizCard).forEach((x) => x.setAttribute('aria-checked', String(x === b)));
  }));
  $('#quizStart', quizCard).addEventListener('click', () => startQuiz());
}

function savePrefs() {
  qData().prefs = { level: config.level, length: config.length };
  store.save();
}

/* ---------- Inicio de sesiones ---------- */
function startQuiz() {
  const length = Math.min(config.length, poolFor(config.level).length);
  begin({ mode: 'normal', title: `${LEVELS[config.level].label} · ${length} preguntas`, questions: pickQuestions(config.level, length), level: config.level, length });
}

function startRetry(items) {
  begin({ mode: 'retry', title: 'Repaso de preguntas falladas', questions: shuffle(items).map(prepare), level: config.level, length: items.length });
}

function startEventPractice(id) {
  const items = quizBank.filter((q) => q.event === id);
  if (!items.length) return;
  begin({
    mode: 'event',
    title: 'Practica: ' + eventTitle(id),
    questions: shuffle(items).map(prepare),
    level: config.level,
    length: items.length
  });
}

function begin(s) {
  session = { ...s, index: 0, score: 0, answers: [] };
  showQuestion();
  bringIntoView();
}

/* ---------- Pregunta ---------- */
function showQuestion() {
  const item = session.questions[session.index];
  const total = session.questions.length;
  const percent = (session.index / total) * 100;

  const optionsHtml = item.shuffled
    .map((opt, i) => `<button type="button" class="quiz-option" data-index="${i}"><span class="opt-key" aria-hidden="true">${i + 1}</span><span>${esc(opt.text)}</span></button>`)
    .join('');

  quizCard.innerHTML = `
    <div class="quiz-top">
      <p class="quiz-count">Pregunta ${session.index + 1} de ${total}</p>
      ${levelBadge(item.level)}
    </div>
    <div class="quiz-progress" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${session.index}"><span style="width:${percent}%"></span></div>
    <p class="quiz-mode">${esc(session.title)}</p>
    <h3 class="quiz-question" id="quizQuestion" tabindex="-1">${esc(item.q)}</h3>
    <div class="quiz-options">${optionsHtml}</div>
    <div class="quiz-feedback" id="quizFeedback" aria-live="polite"></div>
    <button type="button" class="quiz-exit" id="quizExit">Salir del quiz</button>
  `;

  $$('.quiz-option', quizCard).forEach((btn) => btn.addEventListener('click', () => answer(Number(btn.dataset.index))));
  $('#quizExit', quizCard).addEventListener('click', showSetup);
  $('#quizQuestion', quizCard).focus({ preventScroll: true });
}

function answer(chosen) {
  const item = session.questions[session.index];
  const total = session.questions.length;
  const buttons = $$('.quiz-option', quizCard);
  if (buttons[0] && buttons[0].disabled) return;
  const ok = item.shuffled[chosen].correct;

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (item.shuffled[i].correct) btn.classList.add('correct');
    else if (i === chosen) btn.classList.add('wrong');
  });

  if (ok) session.score++;
  session.answers.push({
    item,
    ok,
    chosenText: item.shuffled[chosen].text,
    correctText: item.shuffled.find((o) => o.correct).text
  });
  recordAnswer(item.id, ok);

  const isLast = session.index === total - 1;
  const feedback = $('#quizFeedback', quizCard);
  feedback.innerHTML = `
    <p class="quiz-verdict ${ok ? 'ok' : 'bad'}">${ok ? '¡Correcto!' : 'Respuesta incorrecta'}</p>
    <p>${esc(item.explain)}</p>
    <button type="button" class="chip-link" data-open-event="${item.event}">Leer: ${esc(eventTitle(item.event))}</button>
    <button type="button" class="quiz-btn" id="quizNext">${isLast ? 'Ver mi resultado' : 'Siguiente pregunta'}</button>
  `;
  const next = $('#quizNext', quizCard);
  next.addEventListener('click', () => {
    session.index++;
    if (session.index < total) { showQuestion(); } else { showResult(); }
  });
  next.focus({ preventScroll: true });
  if (next.getBoundingClientRect().bottom > window.innerHeight) next.scrollIntoView({ block: 'end', behavior: 'smooth' });
}

document.addEventListener('keydown', (e) => {
  if (!session || document.getElementById('modalOverlay').classList.contains('active')) return;
  if (!/^[1-4]$/.test(e.key) || e.ctrlKey || e.metaKey || e.altKey) return;
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  if (/INPUT|SELECT|TEXTAREA/.test(tag)) return;
  const btn = $$('.quiz-option', quizCard)[Number(e.key) - 1];
  if (btn && !btn.disabled) btn.click();
});

/* ---------- Resultado ---------- */
function showResult() {
  const total = session.questions.length;
  const score = session.score;
  const percent = pct(score, total);
  const wrong = session.answers.filter((a) => !a.ok);

  let message;
  if (percent === 100) message = '¡Excelente! Respondiste todo bien.';
  else if (percent >= 80) message = '¡Muy bien! Ya dominas buena parte de esta historia.';
  else if (percent >= 60) message = 'Vas por buen camino. Repasa los errores y vuelve a intentarlo.';
  else message = 'Sigue practicando: lee los acontecimientos relacionados y repite las preguntas falladas.';

  // Récord personal e historial (solo en quizzes normales)
  let recordHtml = '';
  if (session.mode === 'normal') {
    const q = qData();
    const key = session.level + '-' + session.length;
    const prev = q.best[key];
    const isRecord = !prev || percent > prev.pct;
    if (isRecord) {
      q.best[key] = { pct: percent, score, total, date: Date.now() };
      recordHtml = `<p class="record new">🏅 ¡Nuevo récord personal! (${LEVELS[session.level].label}, ${session.length} preguntas)</p>`;
    } else {
      recordHtml = `<p class="record">Tu récord en este reto: <strong>${prev.pct} %</strong> (${prev.score} de ${prev.total})</p>`;
    }
    q.history.unshift({ date: Date.now(), level: session.level, length: session.length, score, total, pct: percent });
    q.history = q.history.slice(0, 20);
    store.save();
  } else {
    recordHtml = '<p class="record">Este repaso mejora tu progreso, pero no cambia tus récords.</p>';
  }
  if (!store.isPersistent()) {
    recordHtml += '<p class="record warn">Tu navegador no permite guardar datos: el récord se perderá al cerrar la página.</p>';
  }

  const reviewHtml = wrong.length ? `
    <section class="review" aria-labelledby="reviewTitle">
      <h4 id="reviewTitle">Revisión de respuestas incorrectas (${wrong.length})</h4>
      ${wrong.map((a) => `
        <article class="review-item">
          ${levelBadge(a.item.level)}
          <p class="review-q">${esc(a.item.q)}</p>
          <p class="review-a bad"><span>Tu respuesta</span>${esc(a.chosenText)}</p>
          <p class="review-a good"><span>Respuesta correcta</span>${esc(a.correctText)}</p>
          <p class="review-explain">${esc(a.item.explain)}</p>
          <button type="button" class="chip-link" data-open-event="${a.item.event}">Leer el acontecimiento</button>
        </article>`).join('')}
    </section>` : '<p class="perfect">Sin errores en esta ronda. ¡Buen trabajo!</p>';

  const circleStyle = `--p:${percent}`;
  quizCard.innerHTML = `
    <p class="quiz-count">${esc(session.title)}</p>
    <div class="result-top">
      <div class="score-ring" style="${circleStyle}" role="img" aria-label="${percent} por ciento de aciertos"><span>${percent}<small>%</small></span></div>
      <div>
        <h3 class="quiz-score">${score} de ${total} correctas</h3>
        <p class="quiz-lead">${message}</p>
      </div>
    </div>
    ${recordHtml}
    ${reviewHtml}
    <div class="result-actions">
      ${wrong.length ? `<button type="button" class="quiz-btn" id="quizRetryWrong">Repetir las ${wrong.length} falladas</button>` : ''}
      ${session.mode === 'normal' ? '<button type="button" class="quiz-btn ghost" id="quizAgain">Nuevas preguntas, mismo nivel</button>' : ''}
      <button type="button" class="quiz-btn ghost" id="quizChange">Cambiar nivel</button>
    </div>
  `;

  const retryBtn = $('#quizRetryWrong', quizCard);
  if (retryBtn) retryBtn.addEventListener('click', () => startRetry(wrong.map((a) => a.item)));
  const againBtn = $('#quizAgain', quizCard);
  if (againBtn) againBtn.addEventListener('click', startQuiz);
  $('#quizChange', quizCard).addEventListener('click', () => { showSetup(); bringIntoView(); });

  renderProgress();
  bringIntoView();
}

/* ---------- Panel de progreso ---------- */
function bar(label, value, total, cls = '') {
  const p = pct(value, total);
  return `<div class="meter ${cls}">
    <div class="meter-head"><span>${label}</span><strong>${value} / ${total}</strong></div>
    <div class="meter-track" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${value}"><span style="width:${p}%"></span></div>
  </div>`;
}

let resetArmed = false;
function renderProgress() {
  if (!progressPanel) return;
  const q = qData();
  const masteredAll = quizBank.filter((x) => isMastered(x.id)).length;
  const answeredAny = quizBank.filter((x) => q.stats[x.id]).length;

  const levelBars = LEVEL_ORDER.map((lvl) => {
    const pool = quizBank.filter((x) => x.level === lvl);
    return bar(`${LEVELS[lvl].icon} ${LEVELS[lvl].label}`, pool.filter((x) => isMastered(x.id)).length, pool.length, 'lvl-' + lvl);
  }).join('');

  const recRows = LEVEL_ORDER.concat('mixto').map((lvl) => {
    const cell = (n) => {
      const b = q.best[lvl + '-' + n];
      return b ? `<strong>${b.pct} %</strong>` : '<span class="dash">—</span>';
    };
    return `<tr><th scope="row">${LEVELS[lvl].label}</th><td>${cell(5)}</td><td>${cell(10)}</td></tr>`;
  }).join('');

  const hist = q.history.slice(0, 5).map((h) =>
    `<li><span>${formatDate(h.date)} · ${LEVELS[h.level] ? LEVELS[h.level].label : ''} (${h.total})</span><strong>${h.pct} %</strong></li>`).join('');

  progressPanel.innerHTML = `
    <h3>Tu progreso</h3>
    <p class="muted">${answeredAny === 0 ? 'Aún no has respondido preguntas. Tu progreso se guarda en este navegador.' : 'Una pregunta se considera dominada tras ' + MASTERED_STREAK + ' aciertos seguidos.'}</p>
    ${bar('Preguntas dominadas', masteredAll, quizBank.length, 'main')}
    ${levelBars}
    ${bar('Acontecimientos explorados', viewedCount(), eventsData.length, 'events')}

    <h4>Récords personales</h4>
    <table class="records">
      <thead><tr><th scope="col">Nivel</th><th scope="col">5 preg.</th><th scope="col">10 preg.</th></tr></thead>
      <tbody>${recRows}</tbody>
    </table>

    ${hist ? `<h4>Últimos intentos</h4><ul class="history">${hist}</ul>` : ''}

    <button type="button" class="reset-btn" id="resetProgress">${resetArmed ? 'Toca otra vez para borrar todo' : 'Borrar mi progreso'}</button>
  `;

  $('#resetProgress', progressPanel).addEventListener('click', () => {
    if (!resetArmed) {
      resetArmed = true;
      renderProgress();
      setTimeout(() => { if (resetArmed) { resetArmed = false; renderProgress(); } }, 4000);
      return;
    }
    resetArmed = false;
    store.reset();
    $$('.seen').forEach((el) => { el.hidden = true; });
    loadPrefs();
    renderProgress();
    if (!session) showSetup();
  });
}

window.renderProgress = renderProgress;
window.startEventPractice = startEventPractice;

document.addEventListener('DOMContentLoaded', () => {
  loadPrefs();
  showSetup();
  renderProgress();
});
