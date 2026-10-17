/* ============================================================
   DIVISE.JS - Database squadre, generatore SVG e rose 2026/27
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
   GENERA SVG GIOCATORE (STILE VETTORIALE PIATTO - VERSIONE SCELTA)
   ============================================================ */
function creaGiocatoreSVG(divisa, animazione) {
  if (!divisa) divisa = { maglia: '#888888', pantaloncini: '#333333', calzettoni: '#888888' };
  
  var animClass = '';
  if (animazione === 'calcio') animClass = 'anim-calcio';
  else if (animazione === 'scivolata') animClass = 'anim-scivolata';
  else if (animazione === 'parata') animClass = 'anim-parata';
  
  var idPattern = 'righe_' + Math.random().toString(36).substr(2, 9);
  
  var svg = '<svg viewBox="0 0 50 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="' + animClass + '">';
  
  if (divisa.righe && divisa.colore2) {
    svg += '<defs>';
    svg += '<pattern id="' + idPattern + '" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">';
    svg += '<rect x="0" y="0" width="5" height="10" fill="' + divisa.maglia + '"/>';
    svg += '<rect x="5" y="0" width="5" height="10" fill="' + divisa.colore2 + '"/>';
    svg += '</pattern>';
    svg += '</defs>';
  }
  
  var fillMaglia = (divisa.righe && divisa.colore2) ? 'url(#' + idPattern + ')' : divisa.maglia;
  
  var pelle = '#fcd7b6';
  var pelleScura = '#e0b090';
  var capelli = '#333333';
  var scarpe = '#222222';

  // TESTA
  svg += '<g class="pg-testa" style="transform-origin: 25px 20px;">';
  svg += '<rect x="22" y="30" width="6" height="5" fill="' + pelleScura + '"/>';
  svg += '<ellipse cx="25" cy="20" rx="9" ry="12" fill="' + pelle + '"/>';
  svg += '<ellipse cx="15" cy="20" rx="2" ry="3" fill="' + pelle + '"/>';
  svg += '<ellipse cx="35" cy="20" rx="2" ry="3" fill="' + pelle + '"/>';
  svg += '<path d="M 15 18 Q 15 8 25 8 Q 35 8 35 18 Q 33 12 28 12 Q 23 12 21 15 Z" fill="' + capelli + '"/>';
  svg += '<path d="M 22 10 L 28 6 L 30 12 Z" fill="' + capelli + '"/>';
  svg += '<path d="M 18 16 Q 20 15 22 16" fill="none" stroke="' + capelli + '" stroke-width="1.5"/>';
  svg += '<path d="M 28 16 Q 30 15 32 16" fill="none" stroke="' + capelli + '" stroke-width="1.5"/>';
  svg += '<circle cx="21" cy="19" r="1.5" fill="#000"/>';
  svg += '<circle cx="29" cy="19" r="1.5" fill="#000"/>';
  svg += '<path d="M 25 20 L 24 23 L 26 23 Z" fill="' + pelleScura + '" opacity="0.6"/>';
  svg += '<path d="M 21 26 Q 25 28 29 26" fill="none" stroke="#333" stroke-width="1.2" stroke-linecap="round"/>';
  svg += '</g>';
  
  // BUSTO
  svg += '<g class="pg-busto">';
  svg += '<path d="M 15 35 L 25 40 L 35 35 L 33 60 L 17 60 Z" fill="' + fillMaglia + '"/>';
  svg += '<path d="M 21 35 L 25 39 L 29 35" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>';
  svg += '</g>';
  
  // BRACCIO SINISTRO
  svg += '<g class="pg-braccio-sx" style="transform-origin: 17px 38px;">';
  svg += '<path d="M 15 35 L 11 45 L 15 47 L 17 38 Z" fill="' + fillMaglia + '"/>';
  svg += '<path d="M 11 45 L 9 58 L 13 59 L 15 47 Z" fill="' + pelle + '"/>';
  svg += '<circle cx="11" cy="60" r="3" fill="' + pelle + '"/>';
  svg += '</g>';
  
  // BRACCIO DESTRO
  svg += '<g class="pg-braccio-dx" style="transform-origin: 33px 38px;">';
  svg += '<path d="M 35 35 L 39 45 L 35 47 L 33 38 Z" fill="' + fillMaglia + '"/>';
  svg += '<path d="M 39 45 L 41 58 L 37 59 L 35 47 Z" fill="' + pelle + '"/>';
  svg += '<circle cx="39" cy="60" r="3" fill="' + pelle + '"/>';
  svg += '</g>';
  
  // PANTALONCINI
  svg += '<path d="M 17 60 L 33 60 L 35 80 L 26 80 L 25 70 L 24 80 L 15 80 Z" fill="' + divisa.pantaloncini + '"/>';
  
  // GAMBA SINISTRA
  svg += '<g class="pg-gamba-sx" style="transform-origin: 20px 80px;">';
  svg += '<rect x="17" y="78" width="6" height="12" fill="' + pelle + '"/>';
  svg += '<rect x="16" y="86" width="8" height="10" fill="' + divisa.calzettoni + '"/>';
  svg += '<path d="M 15 96 L 25 96 L 25 100 L 13 100 Z" fill="' + scarpe + '"/>';
  svg += '</g>';
  
  // GAMBA DESTRA
  svg += '<g class="pg-gamba-dx" style="transform-origin: 30px 80px;">';
  svg += '<rect x="27" y="78" width="6" height="12" fill="' + pelle + '"/>';
  svg += '<rect x="26" y="86" width="8" height="10" fill="' + divisa.calzettoni + '"/>';
  svg += '<path d="M 25 96 L 35 96 L 37 100 L 23 100 Z" fill="' + scarpe + '"/>';
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