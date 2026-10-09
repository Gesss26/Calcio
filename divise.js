/* =========================================================
   DIVISE.JS
   Dati condivisi per index.html e europei2028.html
   ========================================================= */

const SQUADRE = {
  // ===== EUROPA OCCIDENTALE / MEDITERRANEO =====
  italia:     { nome: 'ITALIA',     casa: { maglia: '#0066CC', pantaloncini: '#FFFFFF', calzettoni: '#0066CC', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#0066CC', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#00AA00', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  francia:    { nome: 'FRANCIA',    casa: { maglia: '#002395', pantaloncini: '#FFFFFF', calzettoni: '#ED2939', pelle: '#8D5524', capelli: '#1A1008' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#002395', calzettoni: '#FFFFFF', pelle: '#8D5524', capelli: '#1A1008' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#8D5524', capelli: '#1A1008' } },
  spagna:     { nome: 'SPAGNA',     casa: { maglia: '#C60B1E', pantaloncini: '#000080', calzettoni: '#000000', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#000080', pantaloncini: '#C60B1E', calzettoni: '#000080', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#FFEB3B', pantaloncini: '#000000', calzettoni: '#FFEB3B', pelle: '#D9A06B', capelli: '#1F1409' } },
  portogallo: { nome: 'PORTOGALLO', casa: { maglia: '#006600', pantaloncini: '#CC0000', calzettoni: '#006600', pelle: '#C68A5A', capelli: '#1F1409' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#006600', calzettoni: '#FFFFFF', pelle: '#C68A5A', capelli: '#1F1409' }, portiere: { maglia: '#FF6600', pantaloncini: '#000000', calzettoni: '#FF6600', pelle: '#C68A5A', capelli: '#1F1409' } },
  grecia:     { nome: 'GRECIA',     casa: { maglia: '#FFFFFF', pantaloncini: '#0066CC', calzettoni: '#FFFFFF', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#0066CC', pantaloncini: '#FFFFFF', calzettoni: '#0066CC', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#006400', pantaloncini: '#006400', calzettoni: '#006400', pelle: '#D9A06B', capelli: '#1F1409' } },
  malta:      { nome: 'MALTA',      casa: { maglia: '#CF142B', pantaloncini: '#FFFFFF', calzettoni: '#CF142B', pelle: '#C68A5A', capelli: '#1F1409' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#CF142B', calzettoni: '#FFFFFF', pelle: '#C68A5A', capelli: '#1F1409' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#C68A5A', capelli: '#1F1409' } },
  cipro:      { nome: 'CIPRO',      casa: { maglia: '#FFFFFF', pantaloncini: '#FF6600', calzettoni: '#FFFFFF', pelle: '#C68A5A', capelli: '#1F1409' }, trasferta: { maglia: '#FF6600', pantaloncini: '#FFFFFF', calzettoni: '#FF6600', pelle: '#C68A5A', capelli: '#1F1409' }, portiere: { maglia: '#00AA00', pantaloncini: '#00AA00', calzettoni: '#00AA00', pelle: '#C68A5A', capelli: '#1F1409' } },
  sanmarino:  { nome: 'SAN MARINO', casa: { maglia: '#5EB6E4', pantaloncini: '#FFFFFF', calzettoni: '#5EB6E4', pelle: '#E8B88A', capelli: '#2A1A0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#5EB6E4', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#2A1A0F' }, portiere: { maglia: '#FFD700', pantaloncini: '#FFD700', calzettoni: '#FFD700', pelle: '#E8B88A', capelli: '#2A1A0F' } },
  andorra:    { nome: 'ANDORRA',    casa: { maglia: '#FFD700', pantaloncini: '#0033A0', calzettoni: '#FFD700', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#0033A0', pantaloncini: '#FFD700', calzettoni: '#0033A0', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#FF0000', pantaloncini: '#000000', calzettoni: '#FF0000', pelle: '#D9A06B', capelli: '#1F1409' } },
  gibilterra: { nome: 'GIBILTERRA', casa: { maglia: '#FFFFFF', pantaloncini: '#DA291C', calzettoni: '#FFFFFF', pelle: '#C68A5A', capelli: '#1F1409' }, trasferta: { maglia: '#DA291C', pantaloncini: '#FFFFFF', calzettoni: '#DA291C', pelle: '#C68A5A', capelli: '#1F1409' }, portiere: { maglia: '#00AA00', pantaloncini: '#00AA00', calzettoni: '#00AA00', pelle: '#C68A5A', capelli: '#1F1409' } },

  // ===== EUROPA CENTRALE / GERMANICA =====
  germania:   { nome: 'GERMANIA',   casa: { maglia: '#FFFFFF', pantaloncini: '#000000', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#8B5A2B' }, trasferta: { maglia: '#000000', pantaloncini: '#FFFFFF', calzettoni: '#000000', pelle: '#F0C8A0', capelli: '#8B5A2B' }, portiere: { maglia: '#006400', pantaloncini: '#000000', calzettoni: '#006400', pelle: '#F0C8A0', capelli: '#8B5A2B' } },
  austria:    { nome: 'AUSTRIA',    casa: { maglia: '#ED2939', pantaloncini: '#FFFFFF', calzettoni: '#ED2939', pelle: '#F0C8A0', capelli: '#8B5A2B' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#ED2939', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#8B5A2B' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#F0C8A0', capelli: '#8B5A2B' } },
  svizzera:   { nome: 'SVIZZERA',   casa: { maglia: '#FF0000', pantaloncini: '#FFFFFF', calzettoni: '#FF0000', pelle: '#F0C8A0', capelli: '#5C3A1E' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#FF0000', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#5C3A1E' }, portiere: { maglia: '#006400', pantaloncini: '#006400', calzettoni: '#006400', pelle: '#F0C8A0', capelli: '#5C3A1E' } },
  olanda:     { nome: 'OLANDA',     casa: { maglia: '#FF6600', pantaloncini: '#000000', calzettoni: '#FF6600', pelle: '#F5D0A9', capelli: '#C9A24A' }, trasferta: { maglia: '#000000', pantaloncini: '#FF6600', calzettoni: '#000000', pelle: '#F5D0A9', capelli: '#C9A24A' }, portiere: { maglia: '#00AA00', pantaloncini: '#00AA00', calzettoni: '#00AA00', pelle: '#F5D0A9', capelli: '#C9A24A' } },
  belgio:     { nome: 'BELGIO',     casa: { maglia: '#CC0000', pantaloncini: '#000000', calzettoni: '#CC0000', pelle: '#F0C8A0', capelli: '#5C3A1E' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#CC0000', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#5C3A1E' }, portiere: { maglia: '#800080', pantaloncini: '#800080', calzettoni: '#800080', pelle: '#F0C8A0', capelli: '#5C3A1E' } },
  lussemburgo:{ nome: 'LUSSEMBURGO',casa: { maglia: '#ED2939', pantaloncini: '#FFFFFF', calzettoni: '#00A1DE', pelle: '#F0C8A0', capelli: '#8B5A2B' }, trasferta: { maglia: '#00A1DE', pantaloncini: '#ED2939', calzettoni: '#00A1DE', pelle: '#F0C8A0', capelli: '#8B5A2B' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#F0C8A0', capelli: '#8B5A2B' } },
  liechtenstein:{ nome: 'LIECHTENSTEIN', casa: { maglia: '#002B7F', pantaloncini: '#FFFFFF', calzettoni: '#CE1126', pelle: '#F0C8A0', capelli: '#8B5A2B' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#002B7F', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#8B5A2B' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#F0C8A0', capelli: '#8B5A2B' } },

  // ===== SCANDINAVIA / NORD EUROPA =====
  svezia:     { nome: 'SVEZIA',     casa: { maglia: '#FECC02', pantaloncini: '#005B99', calzettoni: '#FECC02', pelle: '#F8DCC0', capelli: '#E8C97A' }, trasferta: { maglia: '#005B99', pantaloncini: '#FECC02', calzettoni: '#005B99', pelle: '#F8DCC0', capelli: '#E8C97A' }, portiere: { maglia: '#00AA00', pantaloncini: '#00AA00', calzettoni: '#00AA00', pelle: '#F8DCC0', capelli: '#E8C97A' } },
  norvegia:   { nome: 'NORVEGIA',   casa: { maglia: '#BA0C2F', pantaloncini: '#FFFFFF', calzettoni: '#BA0C2F', pelle: '#F8DCC0', capelli: '#E8C97A' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#BA0C2F', calzettoni: '#FFFFFF', pelle: '#F8DCC0', capelli: '#E8C97A' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#F8DCC0', capelli: '#E8C97A' } },
  danimarca:  { nome: 'DANIMARCA',  casa: { maglia: '#C60C30', pantaloncini: '#FFFFFF', calzettoni: '#C60C30', pelle: '#F8DCC0', capelli: '#D9B26A' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#C60C30', calzettoni: '#FFFFFF', pelle: '#F8DCC0', capelli: '#D9B26A' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#F8DCC0', capelli: '#D9B26A' } },
  finlandia:  { nome: 'FINLANDIA',  casa: { maglia: '#FFFFFF', pantaloncini: '#002F6C', calzettoni: '#FFFFFF', pelle: '#F8DCC0', capelli: '#E8C97A' }, trasferta: { maglia: '#002F6C', pantaloncini: '#FFFFFF', calzettoni: '#002F6C', pelle: '#F8DCC0', capelli: '#E8C97A' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#F8DCC0', capelli: '#E8C97A' } },
  islanda:    { nome: 'ISLANDA',    casa: { maglia: '#003897', pantaloncini: '#FFFFFF', calzettoni: '#D72828', pelle: '#F8DCC0', capelli: '#D9B26A' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#003897', calzettoni: '#FFFFFF', pelle: '#F8DCC0', capelli: '#D9B26A' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#F8DCC0', capelli: '#D9B26A' } },
  estonia:    { nome: 'ESTONIA',    casa: { maglia: '#0072CE', pantaloncini: '#000000', calzettoni: '#FFFFFF', pelle: '#F5D0A9', capelli: '#C9A24A' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#0072CE', calzettoni: '#FFFFFF', pelle: '#F5D0A9', capelli: '#C9A24A' }, portiere: { maglia: '#FF0000', pantaloncini: '#000000', calzettoni: '#FF0000', pelle: '#F5D0A9', capelli: '#C9A24A' } },
  lettonia:   { nome: 'LETTONIA',   casa: { maglia: '#9E3039', pantaloncini: '#FFFFFF', calzettoni: '#9E3039', pelle: '#F5D0A9', capelli: '#A67B4A' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#9E3039', calzettoni: '#FFFFFF', pelle: '#F5D0A9', capelli: '#A67B4A' }, portiere: { maglia: '#00AA00', pantaloncini: '#00AA00', calzettoni: '#00AA00', pelle: '#F5D0A9', capelli: '#A67B4A' } },
  lituania:   { nome: 'LITUANIA',   casa: { maglia: '#FDB913', pantaloncini: '#006A44', calzettoni: '#C1272D', pelle: '#F5D0A9', capelli: '#A67B4A' }, trasferta: { maglia: '#006A44', pantaloncini: '#FDB913', calzettoni: '#006A44', pelle: '#F5D0A9', capelli: '#A67B4A' }, portiere: { maglia: '#000000', pantaloncini: '#FFFFFF', calzettoni: '#000000', pelle: '#F5D0A9', capelli: '#A67B4A' } },
  faroe:      { nome: 'FAROE',      casa: { maglia: '#FFFFFF', pantaloncini: '#003897', calzettoni: '#FFFFFF', pelle: '#F8DCC0', capelli: '#D9B26A' }, trasferta: { maglia: '#003897', pantaloncini: '#FFFFFF', calzettoni: '#003897', pelle: '#F8DCC0', capelli: '#D9B26A' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#F8DCC0', capelli: '#D9B26A' } },

  // ===== ISOLE BRITANNICHE =====
  inghilterra:{ nome: 'INGHILTERRA',casa: { maglia: '#FFFFFF', pantaloncini: '#000080', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#A0764A' }, trasferta: { maglia: '#000080', pantaloncini: '#FFFFFF', calzettoni: '#000080', pelle: '#F0C8A0', capelli: '#A0764A' }, portiere: { maglia: '#FFD400', pantaloncini: '#FFD400', calzettoni: '#FFD400', pelle: '#F0C8A0', capelli: '#A0764A' } },
  scozia:     { nome: 'SCOZIA',     casa: { maglia: '#0065BD', pantaloncini: '#FFFFFF', calzettoni: '#0065BD', pelle: '#F0C8A0', capelli: '#8B3A1E' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#0065BD', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#8B3A1E' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#F0C8A0', capelli: '#8B3A1E' } },
  galles:     { nome: 'GALLES',     casa: { maglia: '#C8102E', pantaloncini: '#FFFFFF', calzettoni: '#C8102E', pelle: '#F0C8A0', capelli: '#3A1E0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#C8102E', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#3A1E0F' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#F0C8A0', capelli: '#3A1E0F' } },
  irlanda:    { nome: 'IRLANDA',    casa: { maglia: '#169B62', pantaloncini: '#FFFFFF', calzettoni: '#169B62', pelle: '#F0C8A0', capelli: '#8B3A1E' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#169B62', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#8B3A1E' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#F0C8A0', capelli: '#8B3A1E' } },

  // ===== EUROPA CENTRO-ORIENTALE =====
  polonia:    { nome: 'POLONIA',    casa: { maglia: '#FFFFFF', pantaloncini: '#DC143C', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#A67B4A' }, trasferta: { maglia: '#DC143C', pantaloncini: '#FFFFFF', calzettoni: '#DC143C', pelle: '#F0C8A0', capelli: '#A67B4A' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#F0C8A0', capelli: '#A67B4A' } },
  cechia:     { nome: 'CECHIA',     casa: { maglia: '#D7141A', pantaloncini: '#FFFFFF', calzettoni: '#D7141A', pelle: '#F0C8A0', capelli: '#5C3A1E' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#D7141A', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#5C3A1E' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#F0C8A0', capelli: '#5C3A1E' } },
  slovacchia: { nome: 'SLOVACCHIA', casa: { maglia: '#0B4EA2', pantaloncini: '#FFFFFF', calzettoni: '#EE1C25', pelle: '#F0C8A0', capelli: '#5C3A1E' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#0B4EA2', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#5C3A1E' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#F0C8A0', capelli: '#5C3A1E' } },
  ungheria:   { nome: 'UNGHERIA',   casa: { maglia: '#CE2939', pantaloncini: '#FFFFFF', calzettoni: '#477050', pelle: '#E8B88A', capelli: '#3A1E0F' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#CE2939', calzettoni: '#FFFFFF', pelle: '#E8B88A', capelli: '#3A1E0F' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#E8B88A', capelli: '#3A1E0F' } },
  slovenia:   { nome: 'SLOVENIA',   casa: { maglia: '#FFFFFF', pantaloncini: '#005DA4', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#5C3A1E' }, trasferta: { maglia: '#005DA4', pantaloncini: '#FFFFFF', calzettoni: '#005DA4', pelle: '#F0C8A0', capelli: '#5C3A1E' }, portiere: { maglia: '#FF0000', pantaloncini: '#000000', calzettoni: '#FF0000', pelle: '#F0C8A0', capelli: '#5C3A1E' } },
  croazia:    { nome: 'CROAZIA',    casa: { maglia: '#FF0000', pantaloncini: '#FFFFFF', calzettoni: '#0000CC', pelle: '#E8B88A', capelli: '#3A1E0F' }, trasferta: { maglia: '#0000CC', pantaloncini: '#FF0000', calzettoni: '#0000CC', pelle: '#E8B88A', capelli: '#3A1E0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#3A1E0F' } },
  bosnia:     { nome: 'BOSNIA',     casa: { maglia: '#002F6C', pantaloncini: '#FFFFFF', calzettoni: '#002F6C', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#002F6C', calzettoni: '#FFFFFF', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#D9A06B', capelli: '#1F1409' } },
  serbia:     { nome: 'SERBIA',     casa: { maglia: '#C6363C', pantaloncini: '#FFFFFF', calzettoni: '#C6363C', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#C6363C', calzettoni: '#FFFFFF', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#D9A06B', capelli: '#1F1409' } },
  montenegro: { nome: 'MONTENEGRO', casa: { maglia: '#C6363C', pantaloncini: '#FFFFFF', calzettoni: '#C6363C', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#C6363C', calzettoni: '#FFFFFF', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#D9A06B', capelli: '#1F1409' } },
  macedonia:  { nome: 'MACEDONIA',  casa: { maglia: '#D20000', pantaloncini: '#FFFFFF', calzettoni: '#D20000', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#D20000', calzettoni: '#FFFFFF', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#00AA00', pantaloncini: '#00AA00', calzettoni: '#00AA00', pelle: '#D9A06B', capelli: '#1F1409' } },
  kosovo:     { nome: 'KOSOVO',     casa: { maglia: '#0033A0', pantaloncini: '#FFD700', calzettoni: '#0033A0', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#FFD700', pantaloncini: '#0033A0', calzettoni: '#FFD700', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#FF0000', pantaloncini: '#000000', calzettoni: '#FF0000', pelle: '#D9A06B', capelli: '#1F1409' } },
  albania:    { nome: 'ALBANIA',    casa: { maglia: '#E41E20', pantaloncini: '#000000', calzettoni: '#E41E20', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#000000', pantaloncini: '#E41E20', calzettoni: '#000000', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#D9A06B', capelli: '#1F1409' } },

  // ===== EUROPA ORIENTALE / SLAVA =====
  romania:    { nome: 'ROMANIA',    casa: { maglia: '#FFCC00', pantaloncini: '#0033CC', calzettoni: '#FFCC00', pelle: '#E8B88A', capelli: '#3A1E0F' }, trasferta: { maglia: '#0033CC', pantaloncini: '#FFCC00', calzettoni: '#0033CC', pelle: '#E8B88A', capelli: '#3A1E0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#3A1E0F' } },
  bulgaria:   { nome: 'BULGARIA',   casa: { maglia: '#FFFFFF', pantaloncini: '#00966E', calzettoni: '#D62612', pelle: '#E8B88A', capelli: '#3A1E0F' }, trasferta: { maglia: '#00966E', pantaloncini: '#FFFFFF', calzettoni: '#00966E', pelle: '#E8B88A', capelli: '#3A1E0F' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#E8B88A', capelli: '#3A1E0F' } },
  moldavia:   { nome: 'MOLDAVIA',   casa: { maglia: '#0033A0', pantaloncini: '#FFD700', calzettoni: '#CC0000', pelle: '#E8B88A', capelli: '#3A1E0F' }, trasferta: { maglia: '#FFD700', pantaloncini: '#0033A0', calzettoni: '#FFD700', pelle: '#E8B88A', capelli: '#3A1E0F' }, portiere: { maglia: '#00AA00', pantaloncini: '#00AA00', calzettoni: '#00AA00', pelle: '#E8B88A', capelli: '#3A1E0F' } },
  ucraina:    { nome: 'UCRAINA',    casa: { maglia: '#FFD700', pantaloncini: '#0057B7', calzettoni: '#FFD700', pelle: '#E8B88A', capelli: '#5C3A1E' }, trasferta: { maglia: '#0057B7', pantaloncini: '#FFD700', calzettoni: '#0057B7', pelle: '#E8B88A', capelli: '#5C3A1E' }, portiere: { maglia: '#000000', pantaloncini: '#FFFFFF', calzettoni: '#000000', pelle: '#E8B88A', capelli: '#5C3A1E' } },
  bielorussia:{ nome: 'BIELORUSSIA',casa: { maglia: '#C8313E', pantaloncini: '#FFFFFF', calzettoni: '#C8313E', pelle: '#F0C8A0', capelli: '#A67B4A' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#C8313E', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#A67B4A' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#F0C8A0', capelli: '#A67B4A' } },
  russia:     { nome: 'RUSSIA',     casa: { maglia: '#CC0000', pantaloncini: '#FFFFFF', calzettoni: '#CC0000', pelle: '#F0C8A0', capelli: '#8B5A2B' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#CC0000', calzettoni: '#FFFFFF', pelle: '#F0C8A0', capelli: '#8B5A2B' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#F0C8A0', capelli: '#8B5A2B' } },

  // ===== CAUCASO / ASIA OCCIDENTALE =====
  georgia:    { nome: 'GEORGIA',    casa: { maglia: '#FFFFFF', pantaloncini: '#FF0000', calzettoni: '#FFFFFF', pelle: '#C68A5A', capelli: '#1F1409' }, trasferta: { maglia: '#FF0000', pantaloncini: '#FFFFFF', calzettoni: '#FF0000', pelle: '#C68A5A', capelli: '#1F1409' }, portiere: { maglia: '#00AA00', pantaloncini: '#00AA00', calzettoni: '#00AA00', pelle: '#C68A5A', capelli: '#1F1409' } },
  armenia:    { nome: 'ARMENIA',    casa: { maglia: '#D90012', pantaloncini: '#0033A0', calzettoni: '#D90012', pelle: '#C68A5A', capelli: '#1F1409' }, trasferta: { maglia: '#0033A0', pantaloncini: '#D90012', calzettoni: '#0033A0', pelle: '#C68A5A', capelli: '#1F1409' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#C68A5A', capelli: '#1F1409' } },
  azerbaigian:{ nome: 'AZERBAIGIAN',casa: { maglia: '#00B5E2', pantaloncini: '#FFFFFF', calzettoni: '#00B5E2', pelle: '#C68A5A', capelli: '#1F1409' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#00B5E2', calzettoni: '#FFFFFF', pelle: '#C68A5A', capelli: '#1F1409' }, portiere: { maglia: '#FF0000', pantaloncini: '#000000', calzettoni: '#FF0000', pelle: '#C68A5A', capelli: '#1F1409' } },
  kazakistan: { nome: 'KAZAKISTAN', casa: { maglia: '#00AFCA', pantaloncini: '#FFFFFF', calzettoni: '#00AFCA', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#00AFCA', calzettoni: '#FFFFFF', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#FFD700', pantaloncini: '#000000', calzettoni: '#FFD700', pelle: '#D9A06B', capelli: '#1F1409' } },
  turchia:    { nome: 'TURCHIA',    casa: { maglia: '#E30A17', pantaloncini: '#FFFFFF', calzettoni: '#E30A17', pelle: '#D9A06B', capelli: '#1F1409' }, trasferta: { maglia: '#FFFFFF', pantaloncini: '#E30A17', calzettoni: '#FFFFFF', pelle: '#D9A06B', capelli: '#1F1409' }, portiere: { maglia: '#00AA00', pantaloncini: '#000000', calzettoni: '#00AA00', pelle: '#D9A06B', capelli: '#1F1409' } }
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

function calcolaColorePortiere(squadra) {
  const rgb = hexToRgb(squadra.casa.maglia);
  const inv = { r: 255 - rgb.r, g: 255 - rgb.g, b: 255 - rgb.b };
  const hex = '#' + [inv.r, inv.g, inv.b].map(x => x.toString(16).padStart(2, '0')).join('');
  return {
    maglia: hex,
    pantaloncini: hex,
    calzettoni: hex,
    pelle: squadra.casa.pelle,
    capelli: squadra.casa.capelli
  };
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

/* =========================================================
   SVG GIOCATORE (condiviso tra index.html e europei2028.html)
   ========================================================= */
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