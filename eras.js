/* ==========================================================================
   Comparación de épocas: cómo cambió Nicaragua
   Los contenidos se apoyan en los acontecimientos de la línea de tiempo.
   ========================================================================== */
const ERAS = [
  {
    id: 'colonial', name: 'Época colonial', years: '1524–1821', from: 1524, to: 1821, color: '#8a5a2b',
    summary: 'Nicaragua es una provincia del imperio español, con León como capital.',
    rows: {
      poder: 'Provincia dentro de la Capitanía General de Guatemala, con León como capital. Pedrarias Dávila fue el primer gobernador.',
      sociedad: 'La población indígena cayó de entre 500 mil y 800 mil personas a 15,694 en el censo de 1581. Se extendieron el mestizaje y el cristianismo.',
      exterior: 'Dependía de la Corona española. En la Costa Caribe, Gran Bretaña tuvo influencia desde el tratado de 1740 hasta su retiro en 1787.',
      territorio: 'Se fundaron León Viejo y Granada en 1524. León se trasladó cerca de Sutiaba tras el terremoto de 1610, y el Pacífico y el Caribe se desarrollaron de forma distinta.',
      conflicto: 'La conquista no fue pacífica: caciques como Diriangén resistieron a los españoles.'
    },
    events: [3, 4, 5, 6, 8, 9]
  },
  {
    id: 'independencia', name: 'Independencia y guerras civiles', years: '1821–1893', from: 1821, to: 1893, color: '#2e7d32',
    summary: 'Nace la vida republicana, marcada por la rivalidad entre León y Granada.',
    rows: {
      poder: 'Tras la independencia (1821) y la Federación Centroamericana (1823–1838), Nicaragua se declaró Estado soberano en 1838. Liberales de León y conservadores de Granada se disputaban el poder.',
      sociedad: 'La vida política estuvo marcada por la rivalidad entre ambas ciudades. Desde 1854 el país vivía una guerra civil.',
      exterior: 'El filibustero William Walker tomó Granada en 1855 y amenazó la soberanía de Centroamérica. Los ejércitos centroamericanos lo derrotaron en 1857.',
      territorio: 'La Mosquitia seguía bajo protectorado británico hasta el Tratado de Managua de 1860, que reconoció la soberanía de Nicaragua con autonomía misquita.',
      conflicto: 'La Guerra Nacional (1856–1857), con la batalla de San Jacinto como símbolo de la defensa de la soberanía.'
    },
    events: [11, 12, 13, 14, 15, 16]
  },
  {
    id: 'liberal', name: 'Zelaya e intervención', years: '1893–1933', from: 1893, to: 1933, color: '#c2410c',
    summary: 'Los liberales gobiernan, y Estados Unidos aumenta su influencia hasta la lucha de Sandino.',
    rows: {
      poder: 'La Revolución Liberal de 1893 llevó a José Santos Zelaya a la presidencia, que ejerció hasta 1909. Se promulgó una nueva constitución en diciembre de 1893.',
      sociedad: 'Comenzaron reformas institucionales, como la Ley Orgánica de Tribunales de 1894. Benjamín Zeledón y luego Sandino se volvieron símbolos de resistencia nacionalista.',
      exterior: 'La Nota Knox (1909) precedió a la caída de Zelaya. Los marines estadounidenses desembarcaron en 1912 y se retiraron el 1 de enero de 1933.',
      territorio: 'En 1894 la Mosquitia se reincorporó al Estado nicaragüense. Algunos estudios señalan que no se tomaron en cuenta los derechos de sus habitantes.',
      conflicto: 'Resistencia a la intervención: Zeledón en El Coyotepe (1912) y el Ejército Defensor de la Soberanía Nacional de Sandino (1927–1933).'
    },
    events: [17, 18, 19, 20, 21]
  },
  {
    id: 'somoza', name: 'Dinastía somocista', years: '1936–1979', from: 1936, to: 1979, color: '#6b21a8',
    summary: 'La familia Somoza domina el país durante más de cuatro décadas.',
    rows: {
      poder: 'Anastasio Somoza García tomó el control en 1936 y asumió la presidencia el 1 de enero de 1937. Tras su muerte en 1956, el poder pasó a sus hijos Luis y Anastasio Somoza Debayle.',
      sociedad: 'El régimen se mantuvo con una fuerte persecución a la oposición. El terremoto de 1972 dejó a Managua «sin centro» y expuso fallas urbanas y políticas.',
      exterior: 'Tras el retiro de los marines en 1933, la Guardia Nacional fue la base del poder de la familia.',
      territorio: 'El terremoto de Managua (1972) destruyó el centro de la capital; entre 250,000 y 300,000 personas quedaron sin hogar.',
      conflicto: 'El asesinato de Sandino (1934), la fundación del FSLN (1961), Pancasán (1967) y el asesinato de Pedro Joaquín Chamorro (1978) llevaron a la insurrección.'
    },
    events: [22, 23, 24, 25, 26, 27, 28]
  },
  {
    id: 'revolucion', name: 'Revolución Popular Sandinista', years: '1979–1990', from: 1979, to: 1990, color: '#b91c1c',
    summary: 'Cae la dictadura y se abre una década de transformaciones y guerra.',
    rows: {
      poder: 'La Junta de Gobierno de Reconstrucción Nacional, de cinco miembros, se instaló en 1979. Se disolvió la Guardia Nacional y se derogó la constitución anterior mediante el Estatuto Fundamental.',
      sociedad: 'La Cruzada Nacional de Alfabetización (1980) movilizó a más de 100,000 jóvenes y redujo el analfabetismo de 50.35 % a 12.96 %. La UNESCO la premió ese año.',
      exterior: 'Hubo un conflicto armado con los contras, que completaron su desmovilización el 26 de junio de 1990.',
      territorio: 'Se extendió la presencia del Estado en zonas rurales mediante la alfabetización y otros programas.',
      conflicto: 'Las elecciones del 25 de febrero de 1990 las ganó la oposición, y el FSLN entregó el gobierno el 25 de abril.'
    },
    events: [29, 30, 31]
  },
  {
    id: 'actual', name: 'Transición y Nicaragua actual', years: '1990–2025', from: 1990, to: 2025, color: '#0067c6',
    summary: 'De la transición democrática a las reformas constitucionales recientes.',
    rows: {
      poder: 'Violeta Barrios de Chamorro (1990–1997), Arnoldo Alemán (1997–2002) y Daniel Ortega desde 2007. En 2025 una reforma creó la copresidencia de Daniel Ortega y Rosario Murillo y amplió el período presidencial a seis años.',
      sociedad: 'Chamorro fue la primera mujer elegida presidenta en América. Las protestas de abril de 2018 comenzaron por cambios al INSS; la CIDH verificó al menos 264 muertes hasta el 11 de julio de 2018 (la cifra es disputada).',
      exterior: 'La CIDH, el GIEI y la ONU documentaron violaciones de derechos humanos en 2018, y el gobierno rechazó el informe. La reforma de 2025 fue criticada por la ONU, la OEA, Estados Unidos y el Parlamento Europeo.',
      territorio: 'Managua sigue siendo el centro político. Otra reforma aprobada en primera votación en 2026 ampliaría el mandato a siete años, con ratificación prevista para el 18 de enero de 2027.',
      conflicto: 'Casos de corrupción (Alemán fue condenado en 2003 y la condena se anuló en 2009) y disputas sobre la reelección y el equilibrio de poderes.'
    },
    events: [31, 32, 33, 34, 35]
  }
];

const ERA_ROWS = [
  ['poder', 'Quién gobernaba', '🏛️'],
  ['sociedad', 'Sociedad y vida cotidiana', '👥'],
  ['exterior', 'Relación con el exterior', '🌎'],
  ['territorio', 'Territorio y ciudades', '🗺️'],
  ['conflicto', 'Conflicto principal', '⚔️']
];

(function () {
  let selA = 'colonial';
  let selB = 'actual';
  let pickNext = 'B';

  function eraOptions(selected) {
    return ERAS.map((e) => `<option value="${e.id}" ${e.id === selected ? 'selected' : ''}>${e.name} (${e.years})</option>`).join('');
  }

  function eraHeader(era, letter) {
    return `<div class="cmp-era" style="--era:${era.color}">
      <span class="cmp-letter">${letter}</span>
      <div><strong>${esc(era.name)}</strong><span>${esc(era.years)}</span></div>
    </div>`;
  }

  function eventChips(era) {
    return era.events.map((id) => {
      const ev = eventsData.find((e) => e.id === id);
      return ev ? `<button type="button" class="chip-link" data-open-event="${id}">${esc(ev.date)} · ${esc(ev.title.length > 38 ? ev.title.slice(0, 36) + '…' : ev.title)}</button>` : '';
    }).join('');
  }

  function render() {
    const root = document.getElementById('compareBody');
    if (!root) return;
    const A = ERAS.find((e) => e.id === selA);
    const B = ERAS.find((e) => e.id === selB);

    const strip = ERAS.map((e) => {
      const state = e.id === selA ? 'is-a' : e.id === selB ? 'is-b' : '';
      return `<button type="button" class="era-seg ${state}" data-era="${e.id}" style="--era:${e.color}" aria-label="${esc(e.name)} ${esc(e.years)}">
        <span class="era-seg-years">${esc(e.years)}</span><span class="era-seg-name">${esc(e.name)}</span>
      </button>`;
    }).join('');

    const rows = ERA_ROWS.map(([key, label, icon]) => `
      <div class="cmp-row">
        <h4 class="cmp-label"><span aria-hidden="true">${icon}</span> ${label}</h4>
        <div class="cmp-cells">
          <div class="cmp-cell" style="--era:${A.color}"><span class="cmp-tag">${esc(A.name)}</span><p>${esc(A.rows[key])}</p></div>
          <div class="cmp-cell" style="--era:${B.color}"><span class="cmp-tag">${esc(B.name)}</span><p>${esc(B.rows[key])}</p></div>
        </div>
      </div>`).join('');

    root.innerHTML = `
      <div class="era-strip" role="group" aria-label="Épocas de la historia de Nicaragua">${strip}</div>
      <p class="era-hint">Toca una época para compararla. Primero se elige la <strong>A</strong> y luego la <strong>B</strong>, o usa los selectores.</p>
      <div class="cmp-selects">
        <label><span>Época A</span><select id="eraSelA">${eraOptions(selA)}</select></label>
        <button type="button" class="swap-btn" id="eraSwap" aria-label="Intercambiar épocas">⇄</button>
        <label><span>Época B</span><select id="eraSelB">${eraOptions(selB)}</select></label>
      </div>
      <div class="cmp-heads">${eraHeader(A, 'A')}${eraHeader(B, 'B')}</div>
      <div class="cmp-summary">
        <p style="--era:${A.color}">${esc(A.summary)}</p>
        <p style="--era:${B.color}">${esc(B.summary)}</p>
      </div>
      ${rows}
      <div class="cmp-events">
        <div><h4>Acontecimientos de la época A</h4><div class="chip-row">${eventChips(A)}</div></div>
        <div><h4>Acontecimientos de la época B</h4><div class="chip-row">${eventChips(B)}</div></div>
      </div>`;

    root.querySelector('#eraSelA').addEventListener('change', (e) => { selA = e.target.value; render(); });
    root.querySelector('#eraSelB').addEventListener('change', (e) => { selB = e.target.value; render(); });
    root.querySelector('#eraSwap').addEventListener('click', () => { [selA, selB] = [selB, selA]; render(); });
    root.querySelectorAll('.era-seg').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (pickNext === 'B') { selB = btn.dataset.era; pickNext = 'A'; } else { selA = btn.dataset.era; pickNext = 'B'; }
        render();
      });
    });
  }

  window.renderCompare = render;
})();
