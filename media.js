/* ==========================================================================
   Medios: imágenes históricas, mapas y créditos
   - Las imágenes se piden en vivo a Wikipedia / Wikimedia Commons.
   - Solo se muestran imágenes alojadas en Commons (licencias libres) y se
     consulta su autor y licencia para mostrar el crédito debajo de cada una.
   - Los mapas son de OpenStreetMap (ubicación aproximada de la zona).
   ========================================================================== */

// wiki: páginas candidatas (la primera con imagen libre gana; se usan hasta 3 para la galería)
// lat/lng/d: centro del mapa y radio (en grados) del recuadro; place: descripción del lugar
const EVENT_MEDIA = {
  1:  { wiki: ['es:Cristóbal Colón', 'es:Cuarto viaje de Colón', 'es:Cabo Gracias a Dios'], lat: 15.0, lng: -83.17, d: 1.2, place: 'Desembocadura del río Coco, frontera entre Nicaragua y Honduras (Costa Caribe)' },
  2:  { wiki: ['es:Gil González Dávila', 'es:Lago Cocibolca'], lat: 11.55, lng: -85.4, d: 1.0, place: 'Sur de Nicaragua y orillas del gran lago Cocibolca' },
  3:  { wiki: ['es:Diriangén', 'es:Diriamba'], lat: 11.85, lng: -86.23, d: 0.5, place: 'Territorio de Diriangén, en la región de Diriamba y Jinotepe' },
  4:  { wiki: ['es:León Viejo', 'es:Ruinas de León Viejo'], lat: 12.34, lng: -86.52, d: 0.4, place: 'Ruinas de León Viejo, orilla del lago Xolotlán, al pie del volcán Momotombo' },
  5:  { wiki: ['es:Granada (Nicaragua)', 'es:Catedral de Granada (Nicaragua)', 'es:Lago Cocibolca'], lat: 11.93, lng: -85.956, d: 0.3, place: 'Granada, a orillas del lago Cocibolca' },
  6:  { wiki: ['es:Capitanía General de Guatemala', 'es:Pedrarias Dávila'], lat: 12.4, lng: -86.5, d: 1.5, place: 'Provincia de Nicaragua, con capital en León' },
  7:  { wiki: ['es:Volcán Momotombo', 'es:Momotombo'], lat: 12.423, lng: -86.54, d: 0.4, place: 'Volcán Momotombo y las ruinas de León Viejo' },
  8:  { wiki: ['es:Catedral de León (Nicaragua)', 'es:León (Nicaragua)', 'es:León Viejo'], lat: 12.438, lng: -86.878, d: 0.3, place: 'León, nuevo sitio de la ciudad cerca de Sutiaba' },
  9:  { wiki: ['es:Reino Misquito', 'es:Costa de los Mosquitos', 'es:Bluefields'], lat: 13.0, lng: -83.7, d: 2.0, place: 'La Mosquitia (Costa Caribe de Nicaragua)' },
  10: { wiki: ['es:León (Nicaragua)', 'es:Granada (Nicaragua)'], lat: 12.2, lng: -86.4, d: 0.9, place: 'León y Granada, las dos ciudades principales de la provincia' },
  11: { wiki: ['es:Acta de Independencia de Centroamérica', 'es:Independencia de Centroamérica'], lat: 12.2, lng: -86.4, d: 0.9, place: 'León y Granada (la declaración original se hizo en Guatemala)' },
  12: { wiki: ['es:República Federal de Centro América', 'es:Francisco Morazán'], lat: 12.9, lng: -85.2, d: 3.2, place: 'Nicaragua dentro de la Federación Centroamericana' },
  13: { wiki: ['es:Historia de Nicaragua', 'es:Nicaragua'], lat: 12.9, lng: -85.2, d: 3.2, place: 'Territorio de Nicaragua' },
  14: { wiki: ['es:William Walker', 'es:Guerra Nacional de Nicaragua'], lat: 11.93, lng: -85.956, d: 0.3, place: 'Granada, tomada por Walker en octubre de 1855' },
  15: { wiki: ['es:Batalla de San Jacinto (Nicaragua)', 'es:Batalla de San Jacinto (1856)', 'es:José Dolores Estrada', 'es:Andrés Castro'], lat: 12.16, lng: -86.12, d: 0.4, place: 'Hacienda San Jacinto, cerca de la carretera Managua–Tipitapa' },
  16: { wiki: ['es:Guerra Nacional de Nicaragua', 'es:Rivas (Nicaragua)', 'es:Charles Henry Davis'], lat: 11.437, lng: -85.83, d: 0.4, place: 'Rivas, donde Walker se fortificó y capituló' },
  17: { wiki: ['es:Revolución Liberal de Nicaragua', 'es:José Santos Zelaya'], lat: 12.438, lng: -86.878, d: 0.5, place: 'León, donde estalló la revolución, y Managua, adonde llegaron las fuerzas liberales' },
  18: { wiki: ['es:Reserva de la Mosquitia', 'es:Reincorporación de la Mosquitia', 'es:Rigoberto Cabezas'], lat: 12.5, lng: -83.7, d: 2.2, place: 'Costa Caribe de Nicaragua (antigua Reserva Mosquitia)' },
  19: { wiki: ['es:Nota Knox', 'es:José Santos Zelaya', 'es:Philander C. Knox'], lat: 12.136, lng: -86.251, d: 0.4, place: 'Managua, sede del gobierno de Zelaya' },
  20: { wiki: ['es:Fortaleza de Coyotepe', 'es:Benjamín Zeledón', 'es:Ocupación estadounidense de Nicaragua'], lat: 11.96, lng: -86.1, d: 0.3, place: 'Cerro El Coyotepe y La Barranca, en Masaya' },
  21: { wiki: ['es:Augusto C. Sandino', 'es:Guerra de Sandino'], lat: 13.5, lng: -86.4, d: 0.9, place: 'Las Segovias (norte de Nicaragua), base del ejército de Sandino' },
  22: { wiki: ['es:Augusto C. Sandino', 'es:Juan Bautista Sacasa'], lat: 12.136, lng: -86.251, d: 0.3, place: 'Managua, donde fue capturado tras la cena con el presidente Sacasa' },
  23: { wiki: ['es:Anastasio Somoza García', 'es:Guardia Nacional (Nicaragua)'], lat: 12.136, lng: -86.251, d: 0.3, place: 'Managua, sede del poder de la Guardia Nacional' },
  24: { wiki: ['es:Rigoberto López Pérez', 'es:Anastasio Somoza García', 'es:Catedral de León (Nicaragua)'], lat: 12.438, lng: -86.878, d: 0.3, place: 'Casa del Obrero, en León' },
  25: { wiki: ['es:Frente Sandinista de Liberación Nacional', 'es:Carlos Fonseca Amador'], lat: 14.07, lng: -87.19, d: 0.6, place: 'Tegucigalpa (Honduras), donde se sitúa la reunión de fundación' },
  26: { wiki: ['es:Carlos Fonseca Amador', 'es:Matagalpa'], lat: 12.93, lng: -85.92, d: 0.7, place: 'Zona de Pancasán, departamento de Matagalpa' },
  27: { wiki: ['es:Terremoto de Managua de 1972', 'es:Catedral de Managua'], lat: 12.136, lng: -86.251, d: 0.25, place: 'Centro de Managua' },
  28: { wiki: ['es:Pedro Joaquín Chamorro Cardenal', 'es:La Prensa (Nicaragua)'], lat: 12.136, lng: -86.251, d: 0.25, place: 'Managua, donde fue asesinado' },
  29: { wiki: ['es:Revolución sandinista', 'es:Revolución Nicaragüense'], lat: 12.15, lng: -86.27, d: 0.25, place: 'Managua, adonde entraron las fuerzas del FSLN el 19 de julio' },
  30: { wiki: ['es:Cruzada Nacional de Alfabetización (Nicaragua)', 'es:Cruzada Nacional de Alfabetización', 'es:Fernando Cardenal'], lat: 12.9, lng: -85.2, d: 3.2, place: 'Todo el país, en zonas rurales y urbanas' },
  31: { wiki: ['es:Violeta Barrios de Chamorro', 'es:Elecciones generales de Nicaragua de 1990'], lat: 12.136, lng: -86.251, d: 0.3, place: 'Managua, sede del gobierno' },
  32: { wiki: ['es:Arnoldo Alemán', 'es:Enrique Bolaños Geyer'], lat: 12.136, lng: -86.251, d: 0.3, place: 'Managua, sede del gobierno' },
  33: { wiki: ['es:Daniel Ortega', 'es:Elecciones generales de Nicaragua de 2006'], lat: 12.136, lng: -86.251, d: 0.3, place: 'Managua, sede del gobierno' },
  34: { wiki: ['es:Protestas en Nicaragua de 2018', 'es:Crisis sociopolítica en Nicaragua de 2018'], lat: 12.136, lng: -86.251, d: 0.3, place: 'Managua y otras ciudades del país' },
  35: { wiki: ['es:Asamblea Nacional de Nicaragua', 'es:Rosario Murillo', 'es:Daniel Ortega'], lat: 12.136, lng: -86.251, d: 0.3, place: 'Managua, sede de la Asamblea Nacional' }
};

const HERO_IMAGE_CANDIDATES = ['es:León Viejo', 'es:Catedral de León (Nicaragua)', 'es:Granada (Nicaragua)'];

const PHOTO_SOURCES = {
  "William Walker": ["en:William Walker (filibuster)", "es:William Walker"],
  "Charles Henry Davis": ["en:Charles Henry Davis", "es:Charles Henry Davis"],
  "Tomás Martínez": ["es:Tomás Martínez Guerrero"],
  "Máximo Jerez": ["es:Máximo Jerez", "en:Máximo Jerez"],
  "Juan Rafael Mora": ["es:Juan Rafael Mora Porras", "en:Juan Rafael Mora Porras"],
  "José Santos Zelaya": ["es:José Santos Zelaya", "en:José Santos Zelaya"],
  "Rigoberto Cabezas": ["es:Rigoberto Cabezas"],
  "Juan José Estrada": ["es:Juan José Estrada Morales", "en:Juan José Estrada"],
  "Philander C. Knox": ["en:Philander C. Knox", "es:Philander C. Knox"],
  "Benjamín Zeledón": ["es:Benjamín Zeledón", "en:Benjamín Zeledón"],
  "Smedley Butler": ["en:Smedley Butler", "es:Smedley Butler"],
  "Joseph H. Pendleton": ["en:Joseph H. Pendleton", "es:Joseph H. Pendleton"],
  "Adolfo Díaz": ["es:Adolfo Díaz Recinos", "en:Adolfo Díaz"],
  "Augusto C. Sandino": ["es:Augusto C. Sandino", "es:Augusto César Sandino", "en:Augusto César Sandino"],
  "Juan Bautista Sacasa": ["es:Juan Bautista Sacasa", "en:Juan Bautista Sacasa"],
  "Anastasio Somoza García": ["es:Anastasio Somoza García", "en:Anastasio Somoza García"],
  "Rigoberto López Pérez": ["es:Rigoberto López Pérez", "en:Rigoberto López Pérez"],
  "Luis Somoza Debayle": ["es:Luis Somoza Debayle", "en:Luis Somoza Debayle"],
  "Anastasio Somoza Debayle": ["es:Anastasio Somoza Debayle", "en:Anastasio Somoza Debayle"],
  "Carlos Fonseca Amador": ["es:Carlos Fonseca Amador", "en:Carlos Fonseca"],
  "Tomás Borge": ["es:Tomás Borge", "en:Tomás Borge"],
  "Silvio Mayorga": ["es:Silvio Mayorga", "en:Silvio Mayorga"],
  "Germán Pomares": ["es:Germán Pomares Ordóñez"],
  "Pedro Joaquín Chamorro Cardenal": ["es:Pedro Joaquín Chamorro Cardenal", "en:Pedro Joaquín Chamorro Cardenal"],
  "Fernando Cardenal": ["es:Fernando Cardenal", "en:Fernando Cardenal"],
  "Violeta Barrios de Chamorro": ["es:Violeta Barrios de Chamorro", "es:Violeta Chamorro", "en:Violeta Chamorro"],
  "Daniel Ortega": ["es:Daniel Ortega", "en:Daniel Ortega"],
  "Humberto Ortega": ["es:Humberto Ortega", "en:Humberto Ortega"],
  "Eduardo Montealegre": ["es:Eduardo Montealegre"],
  "Rosario Murillo": ["es:Rosario Murillo", "en:Rosario Murillo"],
  "Arnoldo Alemán": ["es:Arnoldo Alemán", "en:Arnoldo Alemán"],
  "Enrique Bolaños": ["es:Enrique Bolaños Geyer", "en:Enrique Bolaños"]
};

/* ---------- Utilidades de red ---------- */
function fetchJson(url, ms = 9000) {
  const ctrl = ('AbortController' in window) ? new AbortController() : null;
  const timer = ctrl ? setTimeout(() => ctrl.abort(), ms) : null;
  return fetch(url, ctrl ? { signal: ctrl.signal } : undefined)
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null)
    .finally(() => timer && clearTimeout(timer));
}

function sizedThumb(url, width) {
  return url.replace(/\/(\d+)px-/, '/' + width + 'px-');
}

// Nombre del archivo en Commons a partir de la URL de upload.wikimedia.org
function commonsFileName(url) {
  const parts = url.split('/');
  const i = parts.indexOf('commons');
  if (i === -1) return null;
  const start = parts[i + 1] === 'thumb' ? i + 4 : i + 3;
  return parts[start] ? decodeURIComponent(parts[start]) : null;
}

/* ---------- Imágenes de Wikipedia / Commons ---------- */
const summaryCache = {};

// Devuelve { src, page, file, fileUrl, label } o null. Solo imágenes de Commons.
function loadSummaryImage(candidate) {
  if (summaryCache[candidate]) return summaryCache[candidate];
  summaryCache[candidate] = (async () => {
    const sep = candidate.indexOf(':');
    const lang = candidate.slice(0, sep);
    const title = candidate.slice(sep + 1);
    const data = await fetchJson(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
    if (!data || data.type !== 'standard' || !data.thumbnail || !data.thumbnail.source) return null;
    const file = commonsFileName(data.thumbnail.source);
    if (!file) return null; // imagen local (posible uso justo): no se usa
    const page = (data.content_urls && data.content_urls.desktop && data.content_urls.desktop.page)
      || `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(title)}`;
    return {
      thumb: data.thumbnail.source,
      page,
      articleTitle: data.title || title,
      file,
      fileUrl: 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(file.replace(/ /g, '_'))
    };
  })();
  return summaryCache[candidate];
}

const eventImgCache = {};
function loadEventImages(id, max = 3) {
  const key = id + ':' + max;
  if (eventImgCache[key]) return eventImgCache[key];
  const media = EVENT_MEDIA[id];
  eventImgCache[key] = (async () => {
    if (!media) return [];
    const found = await Promise.all(media.wiki.slice(0, 4).map(loadSummaryImage));
    const seen = new Set();
    const out = [];
    for (const img of found) {
      if (!img || seen.has(img.file)) continue;
      seen.add(img.file);
      out.push(img);
      if (out.length >= max) break;
    }
    return out;
  })();
  return eventImgCache[key];
}

// Para tarjetas: la primera imagen disponible, pidiendo candidatas en orden.
const firstImgCache = {};
function loadFirstEventImage(id) {
  if (firstImgCache[id]) return firstImgCache[id];
  const media = EVENT_MEDIA[id];
  firstImgCache[id] = (async () => {
    if (!media) return null;
    for (const cand of media.wiki.slice(0, 4)) {
      const img = await loadSummaryImage(cand);
      if (img) return img;
    }
    return null;
  })();
  return firstImgCache[id];
}

/* ---------- Créditos (autor y licencia desde Commons) ---------- */
const creditCache = {};
function htmlToText(html) {
  try {
    const doc = new DOMParser().parseFromString(html || '', 'text/html');
    return (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
  } catch (e) {
    return '';
  }
}

function loadCredit(file) {
  if (creditCache[file]) return creditCache[file];
  creditCache[file] = (async () => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=extmetadata&format=json&origin=*&titles='
      + encodeURIComponent('File:' + file);
    const data = await fetchJson(url);
    const pages = data && data.query && data.query.pages;
    const page = pages && Object.values(pages)[0];
    const meta = page && page.imageinfo && page.imageinfo[0] && page.imageinfo[0].extmetadata;
    if (!meta) return { author: '', license: '', licenseUrl: '' };
    const author = htmlToText(meta.Artist && meta.Artist.value);
    return {
      author: author.length > 90 ? author.slice(0, 87) + '…' : author,
      license: htmlToText(meta.LicenseShortName && meta.LicenseShortName.value),
      licenseUrl: (meta.LicenseUrl && meta.LicenseUrl.value) || ''
    };
  })();
  return creditCache[file];
}

/* ---------- Fotos de personajes (solo Commons) ---------- */
const photoCache = {};
function cleanName(name) {
  return name.replace(/\s*\(.*?\)\s*/g, '').trim();
}

function loadPhoto(name) {
  const candidates = PHOTO_SOURCES[name];
  if (!candidates) return Promise.resolve(null);
  if (photoCache[name]) return photoCache[name];
  photoCache[name] = (async () => {
    for (const candidate of candidates) {
      const img = await loadSummaryImage(candidate);
      if (img) return img;
    }
    return null;
  })();
  return photoCache[name];
}

/* ---------- Mapa (OpenStreetMap) ---------- */
function mapEmbedUrl(m) {
  const bbox = [m.lng - m.d, m.lat - m.d * 0.75, m.lng + m.d, m.lat + m.d * 0.75].map((n) => n.toFixed(4)).join('%2C');
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${m.lat}%2C${m.lng}`;
}
function mapLinkUrl(m) {
  const zoom = m.d >= 2 ? 6 : m.d >= 1 ? 8 : m.d >= 0.5 ? 10 : 12;
  return `https://www.openstreetmap.org/?mlat=${m.lat}&mlon=${m.lng}#map=${zoom}/${m.lat}/${m.lng}`;
}
