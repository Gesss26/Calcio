/* ============================================================
   DIVISE.JS - Database squadre, generatore SVG e rose 2026/27
   Aggiornato a ottobre 2026 — formazioni tipo di ogni squadra
   ============================================================ */

var SQUADRE = {
  atalanta:    { nome: 'Atalanta',    casa: { maglia: '#1e3a8a', pantaloncini: '#000000', calzettoni: '#1e3a8a', righe: true, colore2: '#000000' }, portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } },
  bologna:     { nome: 'Bologna',     casa: { maglia: '#991b1b', pantaloncini: '#1e3a8a', calzettoni: '#991b1b' }, portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } },
  cagliari:    { nome: 'Cagliari',    casa: { maglia: '#dc2626', pantaloncini: '#1e3a8a', calzettoni: '#dc2626' }, portiere: { maglia: '#f97316', pantaloncini: '#000000', calzettoni: '#f97316' } },
  como:        { nome: 'Como',        casa: { maglia: '#1e40af', pantaloncini: '#ffffff', calzettoni: '#1e40af' }, portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } },
  fiorentina:  { nome: 'Fiorentina',  casa: { maglia: '#7e22ce', pantaloncini: '#ffffff', calzettoni: '#7e22ce' }, portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } },
  frosinone:   { nome: 'Frosinone',   casa: { maglia: '#eab308', pantaloncini: '#1e3a8a', calzettoni: '#eab308' }, portiere: { maglia: '#dc2626', pantaloncini: '#000000', calzettoni: '#dc2626' } },
  genoa:       { nome: 'Genoa',       casa: { maglia: '#991b1b', pantaloncini: '#1e3a8a', calzettoni: '#991b1b' }, portiere: { maglia: '#f97316', pantaloncini: '#000000', calzettoni: '#f97316' } },
  inter:       { nome: 'Inter',       casa: { maglia: '#1e3a8a', pantaloncini: '#000000', calzettoni: '#1e3a8a', righe: true, colore2: '#000000' }, portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } },
  juventus:    { nome: 'Juventus',    casa: { maglia: '#000000', pantaloncini: '#ffffff', calzettoni: '#000000', righe: true, colore2: '#ffffff' }, portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } },
  lazio:       { nome: 'Lazio',       casa: { maglia: '#87ceeb', pantaloncini: '#ffffff', calzettoni: '#87ceeb' }, portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } },
  lecce:       { nome: 'Lecce',       casa: { maglia: '#eab308', pantaloncini: '#dc2626', calzettoni: '#eab308', righe: true, colore2: '#dc2626' }, portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } },
  milan:       { nome: 'AC Milan',    casa: { maglia: '#dc2626', pantaloncini: '#000000', calzettoni: '#dc2626', righe: true, colore2: '#000000' }, portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } },
  monza:       { nome: 'Monza',       casa: { maglia: '#dc2626', pantaloncini: '#ffffff', calzettoni: '#dc2626' }, portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } },
  napoli:      { nome: 'Napoli',      casa: { maglia: '#1e40af', pantaloncini: '#ffffff', calzettoni: '#1e40af' }, portiere: { maglia: '#f97316', pantaloncini: '#000000', calzettoni: '#f97316' } },
  parma:       { nome: 'Parma',       casa: { maglia: '#eab308', pantaloncini: '#1e3a8a', calzettoni: '#eab308', righe: true, colore2: '#1e3a8a' }, portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } },
  roma:        { nome: 'AS Roma',     casa: { maglia: '#991b1b', pantaloncini: '#ffffff', calzettoni: '#991b1b' }, portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } },
  sassuolo:    { nome: 'Sassuolo',    casa: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' }, portiere: { maglia: '#f97316', pantaloncini: '#000000', calzettoni: '#f97316' } },
  torino:      { nome: 'Torino',      casa: { maglia: '#991b1b', pantaloncini: '#1e3a8a', calzettoni: '#991b1b' }, portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } },
  udinese:     { nome: 'Udinese',     casa: { maglia: '#000000', pantaloncini: '#ffffff', calzettoni: '#000000', righe: true, colore2: '#ffffff' }, portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } },
  venezia:     { nome: 'Venezia',     casa: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' }, portiere: { maglia: '#f97316', pantaloncini: '#000000', calzettoni: '#f97316' } }
};

/* ============================================================
   ROSE 2026/27 - aggiornate a ottobre 2026
   
   Struttura per ogni squadra:
   - portiere[0]      = POR (Z0)
   - difensori[0..1]  = 2 DIF in Z1
   - centrocampisti[0..1] = 2 CEN in Z2
   - centrocampisti[2..3] = 2 CEN in Z3
   - centrocampisti[4..5] = 2 CEN in Z4
   - difensori_alta[0..1] = 2 ATT in Z5
   - panchina: 1 POR, 2 DIF, 2 CEN, 2 ATT
   ============================================================ */
var ROSE = {
  atalanta: {
    portiere: ['Carnesecchi'],
    difensori: ['Scalvini', 'Kristensen'],
    centrocampisti: ['Hien', 'Kolasinac', 'Kessié', 'Gaetano', 'Ederson', 'De Ketelaere'],
    difensori_alta: ['Scamacca', 'Rowe'],
    panchina: { por: ['Sportiello'], dif: ['Bernasconi', 'Bellanova'], cen: ['Samardzic', 'Zappacosta'], att: ['Raspadori', 'Krstovic'] }
  },
  bologna: {
    portiere: ['Skorupski'],
    difensori: ['Heggem', 'Theate'],
    centrocampisti: ['Zortea', 'Miranda', 'Pobega', 'Ferguson', 'Orsolini', 'Cambiaghi'],
    difensori_alta: ['Dovbyk', 'Holm'],
    panchina: { por: ['Pessina'], dif: ['Helland', 'Casale'], cen: ['Moro', 'Bernardeschi'], att: ['Piccoli', 'Vitik'] }
  },
  cagliari: {
    portiere: ['Caprile'],
    difensori: ['Mina', 'Rodriguez'],
    centrocampisti: ['Zè Pedro', 'Obert', 'Adopo', 'Winks', 'Romano', 'Maldini'],
    difensori_alta: ['Mendy', 'Fazzini'],
    panchina: { por: ['Radunovic'], dif: ['Sugawara', 'Deiola'], cen: ['Idrissi', 'Zé Pedro'], att: ['Nzola', 'Luvumbo'] }
  },
  como: {
    portiere: ['Butez'],
    difensori: ['Chalobah', 'Ramon'],
    centrocampisti: ['Yan Couto', 'Valle', 'Da Cunha', 'Perrone', 'Diao', 'Nico Paz'],
    difensori_alta: ['Douvikas', 'Baturina'],
    panchina: { por: ['Vigorito'], dif: ['Kaiki', 'Kempf'], cen: ['Milla', 'Rodriguez'], att: ['Kean', 'Caqueret'] }
  },
  fiorentina: {
    portiere: ['De Gea'],
    difensori: ['Dragusin', 'Ranieri'],
    centrocampisti: ['Jimenez', 'Viery', 'Ndour', 'Fagioli', 'Atta', 'Mastantuono'],
    difensori_alta: ['Pellegrino', 'Pedro Goncalves'],
    panchina: { por: ['Christensen'], dif: ['Valdepenas', 'Pongracic'], cen: ['Oulai', 'Njie'], att: ['Beto', 'Kean'] }
  },
  frosinone: {
    portiere: ['Palmisani'],
    difensori: ['Calvani', 'Monterisi'],
    centrocampisti: ['Oyono', 'Bracaglia', 'Masini', 'Calò', 'Ghedjemis', 'Schmid'],
    difensori_alta: ['Raimondo', 'Kvernadze'],
    panchina: { por: ['Lolic'], dif: ['Terzic', 'Fayed'], cen: ['Grilitsch', 'Fini'], att: ['Zerbin', 'Cichella'] }
  },
  genoa: {
    portiere: ['Bijlow'],
    difensori: ['Ostigard', 'Vasquez'],
    centrocampisti: ['Ehizibue', 'Marcandalli', 'Frendrup', 'Sow', 'Baldanzi', 'Ellertsson'],
    difensori_alta: ['Osmajic', 'Colombo'],
    panchina: { por: ['Sommariva'], dif: ['Drameh', 'Matturro'], cen: ['Messias', 'El Shaarawy'], att: ['Vitinha', 'Sabelli'] }
  },
  inter: {
    portiere: ['Martinez'],
    difensori: ['Akanji', 'Bastoni'],
    centrocampisti: ['Bisseck', 'Dimarco', 'Barella', 'Calhanoglu', 'Zielinski', 'Diouf'],
    difensori_alta: ['Lautaro', 'Thuram'],
    panchina: { por: ['Provedel'], dif: ['Stones', 'Pavard'], cen: ['Sucic', 'Frattesi'], att: ['Pio Esposito', 'Spence'] }
  },
  juventus: {
    portiere: ['Vicario'],
    difensori: ['Kalulu', 'Bremer'],
    centrocampisti: ['Lucumì', 'Celik', 'Douglas Luiz', 'McKennie', 'Conceiçao', 'Yildiz'],
    difensori_alta: ['Woltemade', 'Kolo Muani'],
    panchina: { por: ['Grabara'], dif: ['Gatti', 'Cambiaso'], cen: ['Sarr', 'Koopmeiners'], att: ['Nico Gonzalez', 'Alajbegovic'] }
  },
  lazio: {
    portiere: ['Mandas'],
    difensori: ['Doekhi', 'Provstgaard'],
    centrocampisti: ['Marusic', 'Nuno Tavares', 'Taylor', 'Rovella', 'Frattesi', 'Cancellieri'],
    difensori_alta: ['Noslin', 'Zaccagni'],
    panchina: { por: ['Furlanetto'], dif: ['Sutalo', 'Patric'], cen: ['Floriani', 'Cataldi'], att: ['Isaksen', 'Pinamonti'] }
  },
  lecce: {
    portiere: ['Falcone'],
    difensori: ['Gaspar', 'Tiago Gabriel'],
    centrocampisti: ['D. Veiga', 'Gallo', 'Ilic', 'Ngom', 'Coulibaly', 'Pierotti'],
    difensori_alta: ['Geubbels', 'Monteiro'],
    panchina: { por: ['Penev'], dif: ['Siebert', 'Ndaba'], cen: ['Berisha', 'Fofana'], att: ["N'dri", 'Stulic'] }
  },
  milan: {
    portiere: ['Maignan'],
    difensori: ['De Winter', 'Pavlovic'],
    centrocampisti: ['Gila', 'Moreira', 'Modric', 'Rabiot', 'Chukwueze', 'Pulisic'],
    difensori_alta: ['Cissé', 'Ramos'],
    panchina: { por: ['Terracciano'], dif: ['Gabbia', 'Estupinan'], cen: ['Musah', 'Saelemaekers'], att: ['Loftus-Cheek', 'Leão'] }
  },
  monza: {
    portiere: ['Tornqvist'],
    difensori: ['Ziolkowski', 'Carboni'],
    centrocampisti: ['Kouadio', 'Mangas', 'Pessina', 'Folorunsho', 'Birindelli', 'Zeballos'],
    difensori_alta: ['Robinson', 'Varela'],
    panchina: { por: ['Thiam'], dif: ['Antov', 'Lucchesi'], cen: ['Akinsanmiro', 'Colpani'], att: ['Ngonge', 'Cutrone'] }
  },
  napoli: {
    portiere: ['Meret'],
    difensori: ['Rrahmani', 'Beukema'],
    centrocampisti: ['Di Lorenzo', 'Spinazzola', 'Lobotka', 'McTominay', 'De Bruyne', 'Politano'],
    difensori_alta: ['Højlund', 'Lang'],
    panchina: { por: ['Milinković-Savić'], dif: ['Buongiorno', 'Marianucci'], cen: ['Gilmour', 'Anguissa'], att: ['Neres', 'Lucca'] }
  },
  parma: {
    portiere: ['Corvi'],
    difensori: ['Troilo', 'Diego Carlos'],
    centrocampisti: ['Delprato', 'Lontani', 'Bernabé', 'Keita', 'Britschgi', 'Valeri'],
    difensori_alta: ['Touré', 'Romero'],
    panchina: { por: ['Daffara'], dif: ['Balogh', 'Ndiaye'], cen: ['Sierro', 'Fabbian'], att: ['Elphege', 'Benedyczak'] }
  },
  roma: {
    portiere: ['Svilar'],
    difensori: ['Mancini', 'Balerdi'],
    centrocampisti: ['Hermoso', 'Wesley', 'Cristante', 'Kone', 'Molina', 'Soulé'],
    difensori_alta: ['Dybala', 'Malen'],
    panchina: { por: ['Gollini'], dif: ['Ndicka', 'Ghilardi'], cen: ['Lulli', 'Mora'], att: ['El Aynaoui', 'Baldanzi'] }
  },
  sassuolo: {
    portiere: ['Muric'],
    difensori: ['Idzes', 'Leysen'],
    centrocampisti: ['Cinquegrano', 'Doig', 'Bakola', 'Matic', 'Thorstvedt', 'Berardi'],
    difensori_alta: ['Esposito', 'Laurienté'],
    panchina: { por: ['Turati'], dif: ['Obrador', 'Walukiewicz'], cen: ['Adzic', 'Volpato'], att: ['Bowie', 'Lipani'] }
  },
  torino: {
    portiere: ['Lucas Perri'],
    difensori: ['Coco', 'Comert'],
    centrocampisti: ['Comuzzo', 'Belghali', 'Mandragora', 'Fitz-Jim', 'Braganca', 'Cacciamani'],
    difensori_alta: ['Vlasic', 'Simeone'],
    panchina: { por: ['Paleari'], dif: ['Fortini', 'Ismajli'], cen: ['Gineitis', 'Casadei'], att: ['Adams', 'Anjorin'] }
  },
  udinese: {
    portiere: ['Okoye'],
    difensori: ['Kabasele', 'Solet'],
    centrocampisti: ['Abankwah', 'Vojvoda', 'Ekkelenkamp', 'Karlstrom', 'Piotrowski', 'Kamara'],
    difensori_alta: ['Zaniolo', 'Davis'],
    panchina: { por: ['Padelli'], dif: ['Alaba', 'Bertola'], cen: ['Miller', 'Unai Gomez'], att: ['Zarraga', 'Zanoli'] }
  },
  venezia: {
    portiere: ['Stankovic'],
    difensori: ['Schingtienne', 'Juan Jesus'],
    centrocampisti: ['Bella-Kotchap', 'Adams', 'Basic', 'Busio', 'Kike Perez', 'Hainaut'],
    difensori_alta: ['Correia', 'Yeboah'],
    panchina: { por: ['Grandi'], dif: ['Mazzocchi', 'Moreno'], cen: ['Haps', 'Sohm'], att: ['Lella', 'Fanne'] }
  }
};

/* ============================================================
   GENERA SVG GIOCATORE CON GRUPPI ANIMABILI
   ============================================================ */
function creaGiocatoreSVG(divisa, animazione) {
  if (!divisa) divisa = { maglia: '#888888', pantaloncini: '#333333', calzettoni: '#888888' };
  
  var animClass = animazione === 'fermo' ? 'anim-fermo' : '';
  var idPattern = 'righe_' + Math.random().toString(36).substr(2, 9);
  
  var svg = '<svg viewBox="0 0 40 60" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="' + animClass + '">';
  
  if (divisa.righe && divisa.colore2) {
    svg += '<defs>';
    svg += '<pattern id="' + idPattern + '" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">';
    svg += '<rect x="0" y="0" width="4" height="8" fill="' + divisa.maglia + '"/>';
    svg += '<rect x="4" y="0" width="4" height="8" fill="' + divisa.colore2 + '"/>';
    svg += '</pattern>';
    svg += '</defs>';
  }
  
  // TESTA
  svg += '<g class="pg-testa" style="transform-origin: 20px 17px;">';
  svg += '<circle cx="20" cy="10" r="7" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  svg += '<path d="M 13 8 Q 20 2 27 8 Q 27 5 20 4 Q 13 5 13 8 Z" fill="#4a2e1b"/>';
  svg += '<circle cx="17" cy="10" r="1" fill="#000"/>';
  svg += '<circle cx="23" cy="10" r="1" fill="#000"/>';
  svg += '</g>';
  
  // BUSTO
  var fillMaglia = (divisa.righe && divisa.colore2) ? 'url(#' + idPattern + ')' : divisa.maglia;
  svg += '<g class="pg-busto">';
  svg += '<path d="M 12 18 L 28 18 L 30 38 L 10 38 Z" fill="' + fillMaglia + '" stroke="#222" stroke-width="1"/>';
  svg += '<path d="M 16 18 L 20 22 L 24 18" fill="none" stroke="#fff" stroke-width="1"/>';
  svg += '</g>';
  
  // BRACCIO SINISTRO
  svg += '<g class="pg-braccio-sx" style="transform-origin: 12px 20px;">';
  svg += '<rect x="8" y="20" width="7" height="14" rx="3" fill="' + fillMaglia + '" stroke="#222" stroke-width="1"/>';
  svg += '<circle cx="11.5" cy="35" r="3.2" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  svg += '</g>';
  
  // BRACCIO DESTRO
  svg += '<g class="pg-braccio-dx" style="transform-origin: 28px 20px;">';
  svg += '<rect x="25" y="20" width="7" height="14" rx="3" fill="' + fillMaglia + '" stroke="#222" stroke-width="1"/>';
  svg += '<circle cx="28.5" cy="35" r="3.2" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  svg += '</g>';
  
  // PANTALONCINI
  svg += '<path d="M 10 38 L 30 38 L 28 48 L 22 48 L 20 44 L 18 48 L 12 48 Z" fill="' + divisa.pantaloncini + '" stroke="#222" stroke-width="1"/>';
  
  // GAMBA SINISTRA
  svg += '<g class="pg-gamba-sx" style="transform-origin: 16px 48px;">';
  svg += '<rect x="14" y="48" width="4" height="8" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  svg += '<rect x="13" y="54" width="6" height="5" fill="' + divisa.calzettoni + '" stroke="#222" stroke-width="1"/>';
  svg += '<ellipse cx="16" cy="59" rx="4" ry="1.5" fill="#111"/>';
  svg += '</g>';
  
  // GAMBA DESTRA (quella che calcia)
  svg += '<g class="pg-gamba-dx" style="transform-origin: 24px 48px;">';
  svg += '<rect x="22" y="48" width="4" height="8" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  svg += '<rect x="21" y="54" width="6" height="5" fill="' + divisa.calzettoni + '" stroke="#222" stroke-width="1"/>';
  svg += '<ellipse cx="24" cy="59" rx="4" ry="1.5" fill="#111"/>';
  svg += '</g>';
  
  svg += '</svg>';
  return svg;
}

function scegliDivise(sqTU, sqCPU) {
  var divTu = SQUADRE[sqTU] ? SQUADRE[sqTU].casa : { maglia: '#4dabf7', pantaloncini: '#0f3460', calzettoni: '#4dabf7' };
  var divCpu = SQUADRE[sqCPU] ? SQUADRE[sqCPU].casa : { maglia: '#ff6b6b', pantaloncini: '#7f1d1d', calzettoni: '#ff6b6b' };
  if (divTu.maglia === divCpu.maglia) {
    divCpu = SQUADRE[sqCPU] ? SQUADRE[sqCPU].portiere : { maglia: '#ffffff', pantaloncini: '#000000', calzettoni: '#ffffff' };
  }
  return { tu: divTu, cpu: divCpu };
}