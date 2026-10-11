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

/* ============================================================
   ROSE 2026/27 - dal sito Diretta.it (aggiornate agosto 2026)
   
   Struttura per ogni squadra:
   - portiere[0]      = POR titolare (Z0 per TU, Z6 per CPU)
   - difensori[0..1]  = 2 DIF in Z1
   - centrocampisti[0..5] = 6 CEN distribuiti così:
       - indice 0, 1 → Z2
       - indice 2, 3 → Z3
       - indice 4, 5 → Z4
   - difensori_alta[0..1] = 2 DIF in Z5
   - panchina: 1 POR, 2 DIF, 2 CEN, 2 ATT
   ============================================================ */
var ROSE = {
  atalanta: {
    portiere: ['Carnesecchi'],
    difensori: ['Hien', 'Kolasinac'],
    centrocampisti: ['De Roon', 'Ederson', 'Pasalic', 'Samardzic', 'Sulemana', 'Zalewski'],
    difensori_alta: ['Bellanova', 'Zappacosta'],
    panchina: { por: ['Sportiello'], dif: ['Scalvini', 'Kossounou'], cen: ['Gaetano', 'Elmas'], att: ['Scamacca', 'Lookman'] }
  },
  bologna: {
    portiere: ['Skorupski'],
    difensori: ['Casale', 'Vitik'],
    centrocampisti: ['Ferguson', 'Pobega', 'Moro', 'El Azzouzi', 'Amondarain', 'Ilic'],
    difensori_alta: ['Holm', 'Miranda'],
    panchina: { por: ['Pessina'], dif: ['Heggem', 'Zortea'], cen: ['Fabbian', 'Odgaard'], att: ['Dovbyk', 'Orsolini'] }
  },
  cagliari: {
    portiere: ['Caprile'],
    difensori: ['Mina', 'Obert'],
    centrocampisti: ['Deiola', 'Prati', 'Adopo', 'Fazzini', 'Cavuoti', 'Akarakiri'],
    difensori_alta: ['Zappa', 'Rodriguez'],
    panchina: { por: ['Radunovic'], dif: ['Idrissi', 'Zé Pedro'], cen: ['Winks', 'Fadera'], att: ['Esposito', 'Luvumbo'] }
  },
  como: {
    portiere: ['Audero'],
    difensori: ['Kempf', 'Dossena'],
    centrocampisti: ['Mazzitelli', 'Caqueret', 'Paz', 'Da Cunha', 'Milla', 'Braunöder'],
    difensori_alta: ['Van der Brempt', 'Valle'],
    panchina: { por: ['Vigorito'], dif: ['Goldaniga', 'Chalobah'], cen: ['Perrone', 'Baturina'], att: ['Morata', 'Douvikas'] }
  },
  fiorentina: {
    portiere: ['De Gea'],
    difensori: ['Ranieri', 'Pongracic'],
    centrocampisti: ['Mandragora', 'Fagioli', 'Fabbian', 'Brescianini', 'Ndour', 'Atta'],
    difensori_alta: ['Dodô', 'Parisi'],
    panchina: { por: ['Christensen'], dif: ['Dragusin', 'Jiménez'], cen: ['Oulai', 'Ricci'], att: ['Kean', 'Gudmundsson'] }
  },
  frosinone: {
    portiere: ['Pisseri'],
    difensori: ['Cittadini', 'Bracaglia'],
    centrocampisti: ['Grillitsch', 'Schmid', 'Calò', 'Koné', 'Koutsoupias', 'Gelli'],
    difensori_alta: ['Oyono', 'Corrado'],
    panchina: { por: ['Lolic'], dif: ['Fayed', 'Amey'], cen: ['Hasa', 'Cichella'], att: ['Zerbin', 'Raimondo'] }
  },
  genoa: {
    portiere: ['Bijlow'],
    difensori: ['Vásquez', 'Østigård'],
    centrocampisti: ['Frendrup', 'Sow', 'Baldanzi', 'Traorè', 'Ellertsson', 'Masini'],
    difensori_alta: ['Sabelli', 'Martin'],
    panchina: { por: ['Sommariva'], dif: ['Matturro', 'Otoa'], cen: ['Amorim', 'Cuenca'], att: ['Messias', 'El Shaarawy'] }
  },
  inter: {
    portiere: ['Martinez'],
    difensori: ['Bastoni', 'Akanji'],
    centrocampisti: ['Barella', 'Calhanoglu', 'Mkhitaryan', 'Sučić', 'Zielinski', 'Frattesi'],
    difensori_alta: ['Dimarco', 'Pavard'],
    panchina: { por: ['Provedel'], dif: ['Bisseck', 'Stones'], cen: ['Asllani', 'Diouf'], att: ['Thuram', 'Esposito'] }
  },
  juventus: {
    portiere: ['Vicario'],
    difensori: ['Bremer', 'Gatti'],
    centrocampisti: ['Locatelli', 'Koopmeiners', 'Thuram', 'McKennie', 'Douglas Luiz', 'Miretti'],
    difensori_alta: ['Cambiaso', 'Kalulu'],
    panchina: { por: ['Grabara'], dif: ['Kelly', 'Lucumí'], cen: ['Sarr', 'Arthur'], att: ['Kolo Muani', 'Yildiz'] }
  },
  lazio: {
    portiere: ['Mandas'],
    difensori: ['Romagnoli', 'Gigot'],
    centrocampisti: ['Rovella', 'Cataldi', 'Vecino', 'Dele-Bashiru', 'Taylor', 'Belahyane'],
    difensori_alta: ['Marusic', 'Tavares'],
    panchina: { por: ['Furlanetto'], dif: ['Patric', 'Provstgaard'], cen: ['Przyborek', 'Vecino'], att: ['Dia', 'Zaccagni'] }
  },
  lecce: {
    portiere: ['Falcone'],
    difensori: ['Gaspar', 'Jean'],
    centrocampisti: ['Coulibaly', 'Maleh', 'Berisha', 'Gandelman', 'Kaba', 'Ngom'],
    difensori_alta: ['Gallo', 'Veiga'],
    panchina: { por: ['Penev'], dif: ['Siebert', 'Ndaba'], cen: ['Fofana', 'Gorter'], att: ['Pierotti', 'Stulic'] }
  },
  milan: {
    portiere: ['Maignan'],
    difensori: ['Tomori', 'Pavlovic'],
    centrocampisti: ['Modric', 'Rabiot', 'Fofana', 'Loftus-Cheek', 'Ricci', 'Jashari'],
    difensori_alta: ['Estupiñán', 'De Winter'],
    panchina: { por: ['Terracciano'], dif: ['Gabbia', 'Gila'], cen: ['Bondo', 'Musah'], att: ['Ramos', 'Leão'] }
  },
  monza: {
    portiere: ['Pizzignacco'],
    difensori: ['Antov', 'Carboni'],
    centrocampisti: ['Pessina', 'Obiang', 'Ciurria', 'Akinsanmiro', 'Colombo', 'Galazzi'],
    difensori_alta: ['Birindelli', 'Mangas'],
    panchina: { por: ['Thiam'], dif: ['Ziolkowski', 'Lucchesi'], cen: ['Ondoa', 'Varela'], att: ['Cutrone', 'Mota'] }
  },
  napoli: {
    portiere: ['Meret'],
    difensori: ['Rrahmani', 'Buongiorno'],
    centrocampisti: ['De Bruyne', 'McTominay', 'Lobotka', 'Anguissa', 'Gilmour', 'Folorunsho'],
    difensori_alta: ['Di Lorenzo', 'Olivera'],
    panchina: { por: ['Milinković-Savić'], dif: ['Beukema', 'Mazzocchi'], cen: ['Lindstrom', 'Cajuste'], att: ['Højlund', 'Neres'] }
  },
  parma: {
    portiere: ['Corvi'],
    difensori: ['Balogh', 'Valenti'],
    centrocampisti: ['Bernabé', 'Keita', 'Nicolussi Caviglia', 'Ordoñez', 'Cremaschi', 'Sørensen'],
    difensori_alta: ['Delprato', 'Valeri'],
    panchina: { por: ['Daffara'], dif: ['Diego Carlos', 'Ndiaye'], cen: ['Plicco', 'Kouda'], att: ['Almqvist', 'Benedyczak'] }
  },
  roma: {
    portiere: ['Svilar'],
    difensori: ['Mancini', 'N\'Dicka'],
    centrocampisti: ['Cristante', 'Koné', 'Pellegrini', 'Pisilli', 'Molina', 'Koulierakis'],
    difensori_alta: ['Angeliño', 'Rensch'],
    panchina: { por: ['Gollini'], dif: ['Hermoso', 'Ghilardi'], cen: ['Baldanzi', 'El Aynaoui'], att: ['Dybala', 'Soulé'] }
  },
  sassuolo: {
    portiere: ['Turati'],
    difensori: ['Idzes', 'Walukiewicz'],
    centrocampisti: ['Matic', 'Thorstvedt', 'Boloca', 'Koné', 'Lipani', 'Iannoni'],
    difensori_alta: ['Doig', 'Candé'],
    panchina: { por: ['Muric'], dif: ['Odenthal', 'Miranda'], cen: ['Adžić', 'Caligara'], att: ['Berardi', 'Laurienté'] }
  },
  torino: {
    portiere: ['Israel'],
    difensori: ['Coco', 'Comuzzo'],
    centrocampisti: ['Ilic', 'Casadei', 'Vlasic', 'Gineitis', 'Anjorin', 'Oristanio'],
    difensori_alta: ['Biraghi', 'Pedersen'],
    panchina: { por: ['Paleari'], dif: ['Ismajli', 'Rodriguez'], cen: ['Ilkhan', 'Fitz-Jim'], att: ['Adams', 'Simeone'] }
  },
  udinese: {
    portiere: ['Okoye'],
    difensori: ['Solet', 'Kabasele'],
    centrocampisti: ['Karlström', 'Piotrowski', 'Ekkelenkamp', 'Chakvetadze', 'Miller', 'Zarraga'],
    difensori_alta: ['Zemura', 'Zanoli'],
    panchina: { por: ['Padelli'], dif: ['Bertola', 'Ebosse'], cen: ['Camara', 'Gómez'], att: ['Davis', 'Zaniolo'] }
  },
  venezia: {
    portiere: ['Stankovic'],
    difensori: ['Bella-Kotchap', 'Sverko'],
    centrocampisti: ['Sohm', 'Busio', 'Duncan', 'Bohinen', 'Pérez', 'Fanne'],
    difensori_alta: ['Haps', 'Correia'],
    panchina: { por: ['Grandi'], dif: ['Schingtienne', 'Moreno'], cen: ['Basic', 'Lella'], att: ['Adams', 'Yeboah'] }
  }
};

/* ============================================================
   GENERA SVG GIOCATORE CON GRUPPI ANIMABILI
   Classi CSS usate dalle animazioni:
   - .pg-testa        (testa, ruota per orientarsi)
   - .pg-busto        (busto, ruota leggermente quando calcia)
   - .pg-braccio-sx   (braccio sinistro, per parata)
   - .pg-braccio-dx   (braccio destro, per parata)
   - .pg-gamba-sx     (gamba sinistra, statica)
   - .pg-gamba-dx     (gamba destra, animata per il calcio)
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
  svg += '<rect x="4" y="18" width="8" height="14" rx="3" fill="' + fillMaglia + '" stroke="#222" stroke-width="1"/>';
  svg += '<circle cx="8" cy="34" r="3" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  svg += '</g>';
  
  // BRACCIO DESTRO
  svg += '<g class="pg-braccio-dx" style="transform-origin: 28px 20px;">';
  svg += '<rect x="28" y="18" width="8" height="14" rx="3" fill="' + fillMaglia + '" stroke="#222" stroke-width="1"/>';
  svg += '<circle cx="32" cy="34" r="3" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
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