
const quizBank = [
  {
    event: 1,
    q: "¿En qué año llegó Cristóbal Colón por primera vez a las costas de lo que hoy es Nicaragua?",
    options: ["1492", "1502", "1522", "1524"],
    answer: 1,
    explain: "Colón llegó en septiembre de 1502, durante su cuarto viaje, y se refugió de una tormenta en la desembocadura del río Coco."
  },
  {
    event: 2,
    q: "¿Quién dirigió la expedición de 1522–1523 que salió de Panamá y llegó hasta el gran lago de Nicaragua?",
    options: ["Gil González Dávila", "Francisco Hernández de Córdoba", "William Walker", "José Santos Zelaya"],
    answer: 0,
    explain: "Gil González Dávila se reunió con el cacique Nicarao y luego chocó con Diriangén."
  },
  {
    event: 3,
    q: "¿Qué cacique cortó el paso a Gil González Dávila y lo obligó a retirarse en 1523?",
    options: ["Nicarao", "Diriangén", "Andrés Castro", "Rigoberto Cabezas"],
    answer: 1,
    explain: "Diriangén pidió tres días para responder y después salió al encuentro de los españoles; es recordado como una de las primeras resistencias indígenas."
  },
  {
    event: 4,
    q: "¿Quién fundó León Viejo el 15 de junio de 1524?",
    options: ["Pedrarias Dávila", "Gil González Dávila", "Francisco Hernández de Córdoba", "Cristóbal Colón"],
    answer: 2,
    explain: "Hernández de Córdoba fue enviado por Pedrarias. Las ruinas de León Viejo son Patrimonio Mundial de la UNESCO desde el año 2000."
  },
  {
    event: 5,
    q: "¿A orillas de qué lago fundó Hernández de Córdoba la ciudad de Granada?",
    options: ["Lago Xolotlán (de Managua)", "Lago Cocibolca (de Nicaragua)", "Laguna de Apoyo", "Lago de Apanás"],
    answer: 1,
    explain: "Granada está junto al gran lago Cocibolca, que le dio acceso a las rutas comerciales. León Viejo, en cambio, se fundó junto al Xolotlán."
  },
  {
    event: 6,
    q: "Al llegar los españoles se estima que había entre 500 mil y 800 mil indígenas. ¿Cuántos registró el censo de 1581?",
    options: ["15,694", "150,000", "300,000", "600,000"],
    answer: 0,
    explain: "El censo de 1581 registró apenas 15,694 indígenas, una muestra de la enorme caída de la población durante el siglo XVI."
  },
  {
    event: 7,
    q: "¿Qué volcán hizo erupción en 1578 y destruyó parcialmente León Viejo?",
    options: ["Masaya", "Momotombo", "Concepción", "Cosigüina"],
    answer: 1,
    explain: "León Viejo estaba al pie del Momotombo. La erupción de 1578 inició el deterioro de la ciudad."
  },
  {
    event: 8,
    q: "¿Qué hecho ocurrido el 11 de enero de 1610 dio el golpe final a León Viejo?",
    options: ["Un incendio provocado por piratas", "Un terremoto", "Una inundación del lago", "Una invasión británica"],
    answer: 1,
    explain: "Tras el terremoto, los habitantes trasladaron la ciudad a un nuevo sitio cerca de Sutiaba, donde está la actual León."
  },
  {
    event: 9,
    q: "¿Qué potencia europea firmó en 1740 un tratado de amistad y alianza con el rey misquito?",
    options: ["Francia", "Gran Bretaña", "Países Bajos", "Portugal"],
    answer: 1,
    explain: "Gran Bretaña estableció después un superintendente en la Mosquitia (1749) y se retiró en 1787."
  },
  {
    event: 10,
    q: "¿Qué provincia centroamericana se sublevó en 1811 y alentó movimientos contra las autoridades coloniales en Nicaragua?",
    options: ["San Salvador", "Chiapas", "Costa Rica", "Panamá"],
    answer: 0,
    explain: "Aunque Nicaragua oficialmente no se unió, hubo levantamientos y movimientos en León y Granada."
  },
  {
    event: 11,
    q: "¿Qué día de 1821 se declaró en Guatemala la independencia del Reino de Guatemala, del que Nicaragua formaba parte?",
    options: ["4 de octubre", "15 de septiembre", "11 de octubre", "30 de abril"],
    answer: 1,
    explain: "El 11 de octubre de 1821, León proclamó la independencia absoluta y la unión al Imperio mexicano, mientras Granada se opuso."
  },
  {
    event: 12,
    q: "En julio de 1823, tras la caída del Imperio mexicano, ¿qué decidieron las provincias centroamericanas, incluida Nicaragua?",
    options: [
      "Declarar su independencia de México y formar las Provincias Unidas de Centroamérica",
      "Declararse una monarquía",
      "Anexarse a Colombia",
      "Volver a depender de España"
    ],
    answer: 0,
    explain: "Así nació la Federación, que luego se disolvió por la debilidad del gobierno federal y los conflictos entre liberales y conservadores."
  },
  {
    event: 13,
    q: "¿Qué país fue el primero en separarse de la Federación Centroamericana, el 30 de abril de 1838?",
    options: ["Nicaragua", "Costa Rica", "Guatemala", "El Salvador"],
    answer: 0,
    explain: "Nicaragua fue el primero; ese mismo año le siguieron Costa Rica y Honduras."
  },
  {
    event: 14,
    q: "¿Quién tomó la ciudad de Granada en octubre de 1855?",
    options: ["William Walker", "Patricio Rivas", "Máximo Jerez", "Tomás Martínez"],
    answer: 0,
    explain: "Walker llegó en junio de 1855 con unos 58 hombres. Patricio Rivas fue instalado como presidente, pero el poder real lo tenía Walker."
  },
  {
    event: 15,
    q: "¿Quién derribó a un filibustero con una piedra en la Batalla de San Jacinto?",
    options: ["Andrés Castro", "José Dolores Estrada", "Benjamín Zeledón", "Augusto C. Sandino"],
    answer: 0,
    explain: "El sargento Andrés Castro se quedó sin municiones y usó una piedra. La batalla fue el 14 de septiembre de 1856."
  },
  {
    event: 16,
    q: "¿Ante qué comandante estadounidense capituló William Walker en Rivas el 1 de mayo de 1857?",
    options: ["Smedley Butler", "Charles Henry Davis", "Philander Knox", "Henry Stimson"],
    answer: 1,
    explain: "Walker salió de Nicaragua con sus oficiales. Intentó volver en 1857 y 1860, y fue ejecutado en Honduras en 1860."
  },
  {
    event: 17,
    q: "¿En qué ciudad estalló la Revolución Liberal el 11 de julio de 1893?",
    options: ["Granada", "Managua", "León", "Masaya"],
    answer: 2,
    explain: "Los liberales entraron a Managua el 25 de julio y José Santos Zelaya llegó a la presidencia."
  },
  {
    event: 18,
    q: "¿Qué general encabezó las tropas que reincorporaron la Mosquitia a Nicaragua en 1894?",
    options: ["Rigoberto Cabezas", "Benjamín Zeledón", "José Dolores Estrada", "Tomás Martínez"],
    answer: 0,
    explain: "El gobierno de Zelaya envió tropas al mando del general Rigoberto Cabezas."
  },
  {
    event: 19,
    q: "¿Cómo se llama el documento que el secretario de Estado de EE. UU. entregó el 1 de diciembre de 1909 y que llevó a la caída de Zelaya?",
    options: ["Pacto del Espino Negro", "Nota Knox", "Tratado de Managua", "Estatuto Fundamental"],
    answer: 1,
    explain: "La Nota Knox llegó después de que Zelaya ejecutara a dos mercenarios estadounidenses, Cannon y Groce."
  },
  {
    event: 20,
    q: "¿Cerca de qué ciudad se libró en 1912 la batalla de El Coyotepe, donde murió Benjamín Zeledón?",
    options: ["Bluefields", "Estelí", "Masaya", "Rivas"],
    answer: 2,
    explain: "La batalla fue el 3 y 4 de octubre de 1912, en la intervención de los marines estadounidenses. Zeledón es Héroe Nacional."
  },
  {
    event: 21,
    q: "¿Cómo se llamó el ejército que Sandino organizó el 2 de septiembre de 1927?",
    options: ["Guardia Nacional", "Ejército Defensor de la Soberanía Nacional", "Ejército Constitucionalista", "Ejército Popular Sandinista"],
    answer: 1,
    explain: "Sandino rechazó el Pacto del Espino Negro y combatió desde Las Segovias hasta el retiro de los marines, el 1 de enero de 1933."
  },
  {
    event: 22,
    q: "¿Qué cargo tenía Anastasio Somoza García cuando fue asesinado Sandino, en 1934?",
    options: ["Presidente de la República", "Jefe de la Guardia Nacional", "Ministro de Relaciones Exteriores", "Embajador en Washington"],
    answer: 1,
    explain: "Sandino fue capturado el 21 de febrero de 1934, al salir de una cena con el presidente Sacasa."
  },
  {
    event: 23,
    q: "¿Cuántos años duró aproximadamente el dominio de la familia Somoza (1936–1979)?",
    options: ["13 años", "23 años", "43 años", "63 años"],
    answer: 2,
    explain: "Fueron más de cuatro décadas, sostenidas por la Guardia Nacional."
  },
  {
    event: 24,
    q: "¿Qué poeta disparó contra Somoza García el 21 de septiembre de 1956 en León?",
    options: ["Rubén Darío", "Rigoberto López Pérez", "Pablo Antonio Cuadra", "Carlos Fonseca"],
    answer: 1,
    explain: "Somoza murió el 29 de septiembre en la Zona del Canal de Panamá, y el poder pasó a sus hijos."
  },
  {
    event: 25,
    q: "¿Cuál es la fecha oficial de fundación del Frente Sandinista de Liberación Nacional (FSLN)?",
    options: ["2 de septiembre de 1927", "21 de febrero de 1934", "23 de julio de 1961", "19 de julio de 1979"],
    answer: 2,
    explain: "Es la fecha oficial, aunque algunos historiadores señalan que la fundación fue un proceso y no un solo evento."
  },
  {
    event: 26,
    q: "¿En qué departamento se desarrolló la guerrilla de Pancasán, en 1967?",
    options: ["Matagalpa", "Chinandega", "Rivas", "Río San Juan"],
    answer: 0,
    explain: "Tras la derrota, el FSLN cambió de estrategia y priorizó el trabajo político con las masas."
  },
  {
    event: 27,
    q: "¿Qué magnitud tuvo el terremoto que destruyó Managua el 23 de diciembre de 1972?",
    options: ["4.2", "6.2", "8.2", "9.0"],
    answer: 1,
    explain: "Duró unos 30 segundos y los incendios agravaron los daños. Las cifras de fallecidos varían según la fuente."
  },
  {
    event: 28,
    q: "¿Qué periódico dirigía Pedro Joaquín Chamorro cuando fue asesinado, el 10 de enero de 1978?",
    options: ["La Prensa", "Novedades", "Barricada", "El Nuevo Diario"],
    answer: 0,
    explain: "Su muerte provocó indignación popular, huelgas y aceleró la insurrección contra el régimen."
  },
  {
    event: 29,
    q: "¿Qué día de 1979 entraron a Managua las fuerzas del FSLN?",
    options: ["17 de julio", "19 de julio", "20 de julio", "22 de agosto"],
    answer: 1,
    explain: "El 17 de julio Somoza salió del país. El 19 de julio entraron las fuerzas del FSLN y se instaló la Junta de Gobierno de Reconstrucción Nacional."
  },
  {
    event: 30,
    q: "¿A qué porcentaje bajó el analfabetismo con la Cruzada Nacional de Alfabetización de 1980?",
    options: ["12.96 %", "30 %", "50.35 %", "0 %"],
    answer: 0,
    explain: "Antes de la Cruzada era de 50.35 %. En septiembre de 1980 la UNESCO entregó a Nicaragua el premio Nadezhda K. Krupskaya."
  }
];


const QUIZ_LENGTH = 5;

const quizCard = document.getElementById('quizCard');
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizMissed = [];

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function eventTitle(id) {
  const ev = eventsData.find(e => e.id === id);
  return ev ? ev.title : '';
}

function showQuizIntro() {
  quizCard.innerHTML = `
    <h2 class="quiz-title">Mini quiz de historia</h2>
    <p class="quiz-lead">Responde ${QUIZ_LENGTH} preguntas elegidas al azar de un banco de ${quizBank.length}. Cada vez que lo repitas, saldrán preguntas distintas.</p>
    <button type="button" class="quiz-btn" id="quizStart">Empezar el quiz</button>
  `;
  document.getElementById('quizStart').addEventListener('click', startQuiz);
}

function startQuiz() {
  quizQuestions = shuffle(quizBank).slice(0, QUIZ_LENGTH).map((item) => {
    const options = shuffle(item.options.map((text, i) => ({ text, correct: i === item.answer })));
    return { ...item, shuffled: options };
  });
  quizIndex = 0;
  quizScore = 0;
  quizMissed = [];
  showQuestion();
}

function showQuestion() {
  const item = quizQuestions[quizIndex];
  const percent = (quizIndex / QUIZ_LENGTH) * 100;

  const optionsHtml = item.shuffled
    .map((opt, i) => `<button type="button" class="quiz-option" data-index="${i}">${opt.text}</button>`)
    .join('');

  quizCard.innerHTML = `
    <div class="quiz-progress" aria-hidden="true"><span style="width:${percent}%"></span></div>
    <p class="quiz-count">Pregunta ${quizIndex + 1} de ${QUIZ_LENGTH}</p>
    <h2 class="quiz-question">${item.q}</h2>
    <div class="quiz-options">${optionsHtml}</div>
    <div class="quiz-feedback" id="quizFeedback" aria-live="polite"></div>
  `;

  quizCard.querySelectorAll('.quiz-option').forEach((btn) => {
    btn.addEventListener('click', () => answerQuestion(Number(btn.dataset.index)));
  });
}

function answerQuestion(chosen) {
  const item = quizQuestions[quizIndex];
  const buttons = quizCard.querySelectorAll('.quiz-option');
  const isCorrect = item.shuffled[chosen].correct;

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (item.shuffled[i].correct) btn.classList.add('correct');
    else if (i === chosen) btn.classList.add('wrong');
  });

  if (isCorrect) {
    quizScore++;
  } else {
    quizMissed.push(item.event);
  }

  const isLast = quizIndex === QUIZ_LENGTH - 1;
  const feedback = document.getElementById('quizFeedback');
  feedback.innerHTML = `
    <p class="quiz-verdict ${isCorrect ? 'ok' : 'bad'}">${isCorrect ? '¡Correcto!' : 'Respuesta incorrecta.'}</p>
    <p>${item.explain}</p>
    <button type="button" class="quiz-btn" id="quizNext">${isLast ? 'Ver mi resultado' : 'Siguiente pregunta'}</button>
  `;
  document.getElementById('quizNext').addEventListener('click', () => {
    quizIndex++;
    if (quizIndex < QUIZ_LENGTH) showQuestion();
    else showResult();
  });
}

function showResult() {
  let message = 'Sigue practicando: repasa los eventos de abajo y vuelve a intentarlo.';
  if (quizScore === QUIZ_LENGTH) message = '¡Excelente! Respondiste todo bien.';
  else if (quizScore >= 3) message = '¡Muy bien! Ya dominas buena parte de la historia.';

  const uniqueMissed = [...new Set(quizMissed)];
  const reviewHtml = uniqueMissed.length
    ? `<div class="quiz-review">
         <p>Repasa estos eventos:</p>
         ${uniqueMissed.map(id => `<button type="button" class="quiz-link" data-event="${id}">${eventTitle(id)}</button>`).join('')}
       </div>`
    : '';

  quizCard.innerHTML = `
    <p class="quiz-count">Resultado</p>
    <h2 class="quiz-score">${quizScore} de ${QUIZ_LENGTH}</h2>
    <p class="quiz-lead">${message}</p>
    ${reviewHtml}
    <button type="button" class="quiz-btn" id="quizRetry">Intentar con otras 5 preguntas</button>
  `;

  document.getElementById('quizRetry').addEventListener('click', startQuiz);
  quizCard.querySelectorAll('.quiz-link').forEach((btn) => {
    btn.addEventListener('click', () => openModal(Number(btn.dataset.event)));
  });
}

document.addEventListener('DOMContentLoaded', showQuizIntro);
