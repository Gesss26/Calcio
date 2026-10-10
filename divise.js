/* =========================================================
   DIVISE.JS — Serie A 2026/2027
   Dati condivisi per index.html e seriea2027.html
   ========================================================= */

const SQUADRE = {
  atalanta:   { nome: 'ATALANTA',   casa: { maglia: '#1E71B8', pantaloncini: '#000000', calzettoni: '#1E71B8', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#1E71B8', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  bologna:    { nome: 'BOLOGNA',    casa: { maglia: '#1A2F4A', pantaloncini: '#1A2F4A', calzettoni: '#1A2F4A', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#1A2F4A', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FF6600', pantaloncini: '#000000', calzettoni: '#FF6600', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  cagliari:   { nome: 'CAGLIARI',   casa: { maglia: '#B01B2E', pantaloncini: '#0A1E5C', calzettoni: '#B01B2E', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#B01B2E', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  como:       { nome: 'COMO',       casa: { maglia: '#003D7C', pantaloncini: '#FFFFFF', calzettoni: '#003D7C', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#003D7C', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  fiorentina: { nome: 'FIORENTINA', casa: { maglia: '#582C83', pantaloncini: '#582C83', calzettoni: '#582C83', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#582C83', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  frosinone:  { nome: 'FROSINONE',  casa: { maglia: '#FFD700', pantaloncini: '#0033A0', calzettoni: '#FFD700', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#0033A0', pantaloncini: '#FFD700', calzettoni: '#0033A0', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FF0000', pantaloncini: '#000000', calzettoni: '#FF0000', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  genoa:      { nome: 'GENOA',      casa: { maglia: '#B01B2E', pantaloncini: '#0A1E5C', calzettoni: '#0A1E5C', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#B01B2E', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  inter:      { nome: 'INTER',      casa: { maglia: '#0A1E5C', pantaloncini: '#0A1E5C', calzettoni: '#0A1E5C', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#0A1E5C', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  juventus:   { nome: 'JUVENTUS',   casa: { maglia: '#FFFFFF', pantaloncini: '#000000', calzettoni: '#000000', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#000000', pantaloncini: '#FFFFFF', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  lazio:      { nome: 'LAZIO',      casa: { maglia: '#87CEEB', pantaloncini: '#FFFFFF', calzettoni: '#87CEEB', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#87CEEB', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FF6600', pantaloncini: '#000000', calzettoni: '#FF6600', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  lecce:      { nome: 'LECCE',      casa: { maglia: '#FFE000', pantaloncini: '#B01B2E', calzettoni: '#FFE000', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#B01B2E', pantaloncini: '#FFE000', calzettoni: '#B01B2E', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  milan:      { nome: 'AC MILAN',   casa: { maglia: '#C8102E', pantaloncini: '#FFFFFF', calzettoni: '#000000', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#C8102E', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  monza:      { nome: 'MONZA',      casa: { maglia: '#E30613', pantaloncini: '#FFFFFF', calzettoni: '#E30613', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#E30613', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  napoli:     { nome: 'NAPOLI',     casa: { maglia: '#12A0D7', pantaloncini: '#FFFFFF', calzettoni: '#12A0D7', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#12A0D7', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  parma:      { nome: 'PARMA',      casa: { maglia: '#FFD700', pantaloncini: '#FFFFFF', calzettoni: '#000000', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#FFD700', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FF6600', pantaloncini: '#000000', calzettoni: '#FF6600', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  roma:       { nome: 'AS ROMA',    casa: { maglia: '#8B1A1A', pantaloncini: '#8B1A1A', calzettoni: '#8B1A1A', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#8B1A1A', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  sassuolo:   { nome: 'SASSUOLO',   casa: { maglia: '#00A651', pantaloncini: '#00A651', calzettoni: '#00A651', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#00A651', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FF6600', pantaloncini: '#000000', calzettoni: '#FF6600', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  torino:     { nome: 'TORINO',     casa: { maglia: '#8B1A1A', pantaloncini: '#8B1A1A', calzettoni: '#8B1A1A', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#8B1A1A', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  udinese:    { nome: 'UDINESE',    casa: { maglia: '#000000', pantaloncini: '#000000', calzettoni: '#000000', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#000000', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FF6600', pantaloncini: '#000000', calzettoni: '#FF6600', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  venezia:    { nome: 'VENEZIA',    casa: { maglia: '#000000', pantaloncini: '#00A651', calzettoni: '#000000', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#000000', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FF6600', pantaloncini: '#000000', calzettoni: '#FF6600', pelle: '#E8B88A', capelli: '#2A1A0F' } }
};

/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return { r: parseInt(h.substring(0,2),16), g: parseInt(h.substring(2,4),16), b: parseInt(h.substring(4,6),16) };
}

function coloreSimile(c1, c2) {
  const a = hexToRgb(c1), b = hexToRgb(c2);
  const dist = Math.sqrt((a.r-b.r)**2 + (a.g-b.g)**2 + (a.b-b.b)**2);
  return dist < 80;
}

function scegliDivise(sqTU, sqCPU) {
  const tuCasa = SQUADRE[sqTU].casa;
  const cpuCasa = SQUADRE[sqCPU].casa;
  let divisaTU = tuCasa;
  let divisaCPU = cpuCasa;
  if (coloreSimile(tuCasa.maglia, cpuCasa.maglia)) {
    divisaCPU = SQUADRE[sqCPU].trasferta;
    if (coloreSimile(tuCasa.maglia, divisaCPU.maglia)) {
      divisaCPU = { ...divisaCPU, maglia: '#222222', pantaloncini: '#FFFFFF', calzettoni: '#222222' };
    }
  }
  return { tu: divisaTU, cpu: divisaCPU };
}

function creaGiocatoreSVG(divisa, animazione = 'fermo') {
  const capelli = divisa.capelli;
  const pelle = divisa.pelle;
  const maglia = divisa.maglia;
  const pant = divisa.pantaloncini;
  const calze = divisa.calzettoni;
  return `
    <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" class="anim-${animazione}">
      <ellipse cx="50" cy="124" rx="22" ry="4" fill="rgba(0,0,0,0.35)"/>
      <rect x="36" y="85" width="11" height="25" rx="4" fill="${pelle}"/>
      <rect x="53" y="85" width="11" height="25" rx="4" fill="${pelle}"/>
      <rect x="36" y="98" width="11" height="16" rx="2" fill="${calze}"/>
      <rect x="53" y="98" width="11" height="16" rx="2" fill="${calze}"/>
      <rect x="34" y="114" width="14" height="8" rx="3" fill="#1a1a1a"/>
      <rect x="52" y="114" width="14" height="8" rx="3" fill="#1a1a1a"/>
      <rect x="35" y="72" width="30" height="18" rx="4" fill="${pant}"/>
      <rect x="32" y="42" width="36" height="32" rx="6" fill="${maglia}"/>
      <rect x="24" y="44" width="10" height="18" rx="4" fill="${maglia}"/>
      <rect x="66" y="44" width="10" height="18" rx="4" fill="${maglia}"/>
      <rect x="22" y="58" width="10" height="18" rx="4" fill="${pelle}"/>
      <rect x="68" y="58" width="10" height="18" rx="4" fill="${pelle}"/>
      <circle cx="27" cy="78" r="5" fill="${pelle}"/>
      <circle cx="73" cy="78" r="5" fill="${pelle}"/>
      <rect x="46" y="38" width="8" height="6" fill="${pelle}"/>
      <ellipse cx="50" cy="26" rx="20" ry="19" fill="${pelle}"/>
      <path d="M 30 22 Q 32 8 50 6 Q 68 8 70 22 Q 68 16 60 14 Q 55 20 50 18 Q 44 20 40 14 Q 32 16 30 22 Z" fill="${capelli}"/>
      <path d="M 30 22 Q 28 28 32 30 Q 34 26 34 22 Z" fill="${capelli}"/>
      <path d="M 70 22 Q 72 28 68 30 Q 66 26 66 22 Z" fill="${capelli}"/>
      <ellipse cx="43" cy="27" rx="3" ry="4" fill="#1a1a1a"/>
      <ellipse cx="57" cy="27" rx="3" ry="4" fill="#1a1a1a"/>
      <circle cx="44" cy="25.5" r="1" fill="#fff"/>
      <circle cx="58" cy="25.5" r="1" fill="#fff"/>
      <circle cx="38" cy="33" r="2.5" fill="rgba(255,120,120,0.5)"/>
      <circle cx="62" cy="33" r="2.5" fill="rgba(255,120,120,0.5)"/>
      ${animazione === 'triste'
        ? `<path d="M 45 37 Q 50 34 55 37" stroke="#8B2020" stroke-width="1.8" fill="none" stroke-linecap="round"/>`
        : `<path d="M 45 35 Q 50 38 55 35" stroke="#8B2020" stroke-width="1.8" fill="none" stroke-linecap="round"/>`}
      <text x="50" y="62" font-size="10" font-weight="bold" fill="rgba(0,0,0,0.35)" text-anchor="middle" font-family="Arial">10</text>
    </svg>
  `;
}