/* ============================================================
   DIVISE.JS - Database squadre e generatore SVG giocatori
   ============================================================ */

var SQUADRE = {
  atalanta: { 
    nome: 'Atalanta', 
    casa: { maglia: '#1e3a8a', pantaloncini: '#000000', calzettoni: '#1e3a8a' }, 
    portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } 
  },
  bologna: { 
    nome: 'Bologna', 
    casa: { maglia: '#991b1b', pantaloncini: '#1e3a8a', calzettoni: '#991b1b' }, 
    portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } 
  },
  cagliari: { 
    nome: 'Cagliari', 
    casa: { maglia: '#dc2626', pantaloncini: '#1e3a8a', calzettoni: '#dc2626' }, 
    portiere: { maglia: '#f97316', pantaloncini: '#000000', calzettoni: '#f97316' } 
  },
  como: { 
    nome: 'Como', 
    casa: { maglia: '#1e40af', pantaloncini: '#ffffff', calzettoni: '#1e40af' }, 
    portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } 
  },
  fiorentina: { 
    nome: 'Fiorentina', 
    casa: { maglia: '#7e22ce', pantaloncini: '#ffffff', calzettoni: '#7e22ce' }, 
    portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } 
  },
  frosinone: { 
    nome: 'Frosinone', 
    casa: { maglia: '#eab308', pantaloncini: '#1e3a8a', calzettoni: '#eab308' }, 
    portiere: { maglia: '#dc2626', pantaloncini: '#000000', calzettoni: '#dc2626' } 
  },
  genoa: { 
    nome: 'Genoa', 
    casa: { maglia: '#991b1b', pantaloncini: '#1e3a8a', calzettoni: '#991b1b' }, 
    portiere: { maglia: '#f97316', pantaloncini: '#000000', calzettoni: '#f97316' } 
  },
  inter: { 
    nome: 'Inter', 
    casa: { maglia: '#1e3a8a', pantaloncini: '#000000', calzettoni: '#1e3a8a' }, 
    portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } 
  },
  juventus: { 
    nome: 'Juventus', 
    casa: { maglia: '#000000', pantaloncini: '#ffffff', calzettoni: '#000000' }, 
    portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } 
  },
  lazio: { 
    nome: 'Lazio', 
    casa: { maglia: '#87ceeb', pantaloncini: '#ffffff', calzettoni: '#87ceeb' }, 
    portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } 
  },
  lecce: { 
    nome: 'Lecce', 
    casa: { maglia: '#eab308', pantaloncini: '#dc2626', calzettoni: '#eab308' }, 
    portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } 
  },
  milan: { 
    nome: 'AC Milan', 
    casa: { maglia: '#dc2626', pantaloncini: '#000000', calzettoni: '#dc2626' }, 
    portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } 
  },
  monza: { 
    nome: 'Monza', 
    casa: { maglia: '#dc2626', pantaloncini: '#ffffff', calzettoni: '#dc2626' }, 
    portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } 
  },
  napoli: { 
    nome: 'Napoli', 
    casa: { maglia: '#1e40af', pantaloncini: '#ffffff', calzettoni: '#1e40af' }, 
    portiere: { maglia: '#f97316', pantaloncini: '#000000', calzettoni: '#f97316' } 
  },
  parma: { 
    nome: 'Parma', 
    casa: { maglia: '#eab308', pantaloncini: '#1e3a8a', calzettoni: '#eab308' }, 
    portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } 
  },
  roma: { 
    nome: 'AS Roma', 
    casa: { maglia: '#991b1b', pantaloncini: '#ffffff', calzettoni: '#991b1b' }, 
    portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } 
  },
  sassuolo: { 
    nome: 'Sassuolo', 
    casa: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' }, 
    portiere: { maglia: '#f97316', pantaloncini: '#000000', calzettoni: '#f97316' } 
  },
  torino: { 
    nome: 'Torino', 
    casa: { maglia: '#991b1b', pantaloncini: '#1e3a8a', calzettoni: '#991b1b' }, 
    portiere: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' } 
  },
  udinese: { 
    nome: 'Udinese', 
    casa: { maglia: '#000000', pantaloncini: '#ffffff', calzettoni: '#000000' }, 
    portiere: { maglia: '#eab308', pantaloncini: '#000000', calzettoni: '#eab308' } 
  },
  venezia: { 
    nome: 'Venezia', 
    casa: { maglia: '#16a34a', pantaloncini: '#000000', calzettoni: '#16a34a' }, 
    portiere: { maglia: '#f97316', pantaloncini: '#000000', calzettoni: '#f97316' } 
  }
};

/* ============================================================
   FUNZIONE PER GENERARE L'SVG DEL GIOCATORE
   ============================================================ */
function creaGiocatoreSVG(divisa, animazione) {
  if (!divisa) divisa = { maglia: '#888888', pantaloncini: '#333333', calzettoni: '#888888' };
  
  var animClass = animazione === 'fermo' ? 'anim-fermo' : '';
  
  var svg = '<svg viewBox="0 0 40 60" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="' + animClass + '">';
  
  // Testa
  svg += '<circle cx="20" cy="10" r="7" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  // Capelli
  svg += '<path d="M 13 8 Q 20 2 27 8 Q 27 5 20 4 Q 13 5 13 8 Z" fill="#4a2e1b"/>';
  // Occhi
  svg += '<circle cx="17" cy="10" r="1" fill="#000"/>';
  svg += '<circle cx="23" cy="10" r="1" fill="#000"/>';
  
  // Maglia
  svg += '<path d="M 12 18 L 28 18 L 30 38 L 10 38 Z" fill="' + divisa.maglia + '" stroke="#222" stroke-width="1"/>';
  // Colletto
  svg += '<path d="M 16 18 L 20 22 L 24 18" fill="none" stroke="#fff" stroke-width="1"/>';
  
  // Maniche
  svg += '<rect x="4" y="18" width="8" height="14" rx="3" fill="' + divisa.maglia + '" stroke="#222" stroke-width="1"/>';
  svg += '<rect x="28" y="18" width="8" height="14" rx="3" fill="' + divisa.maglia + '" stroke="#222" stroke-width="1"/>';
  
  // Mani
  svg += '<circle cx="8" cy="34" r="3" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  svg += '<circle cx="32" cy="34" r="3" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  
  // Pantaloncini
  svg += '<path d="M 10 38 L 30 38 L 28 48 L 22 48 L 20 44 L 18 48 L 12 48 Z" fill="' + divisa.pantaloncini + '" stroke="#222" stroke-width="1"/>';
  
  // Gambe
  svg += '<rect x="14" y="48" width="4" height="8" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  svg += '<rect x="22" y="48" width="4" height="8" fill="#fcd7b6" stroke="#333" stroke-width="1"/>';
  
  // Calzettoni
  svg += '<rect x="13" y="54" width="6" height="5" fill="' + divisa.calzettoni + '" stroke="#222" stroke-width="1"/>';
  svg += '<rect x="21" y="54" width="6" height="5" fill="' + divisa.calzettoni + '" stroke="#222" stroke-width="1"/>';
  
  // Scarpe
  svg += '<ellipse cx="16" cy="59" rx="4" ry="1.5" fill="#111"/>';
  svg += '<ellipse cx="24" cy="59" rx="4" ry="1.5" fill="#111"/>';
  
  svg += '</svg>';
  return svg;
}

/* ============================================================
   FUNZIONE PER SCEGLIERE LE DIVISE (evita conflitti di colore)
   ============================================================ */
function scegliDivise(sqTU, sqCPU) {
  var divTu = SQUADRE[sqTU] ? SQUADRE[sqTU].casa : { maglia: '#4dabf7', pantaloncini: '#0f3460', calzettoni: '#4dabf7' };
  var divCpu = SQUADRE[sqCPU] ? SQUADRE[sqCPU].casa : { maglia: '#ff6b6b', pantaloncini: '#7f1d1d', calzettoni: '#ff6b6b' };
  
  // Se le maglie sono identiche, cambia quella della CPU (usa la divisa da portiere come alternativa)
  if (divTu.maglia === divCpu.maglia) {
    divCpu = SQUADRE[sqCPU] ? SQUADRE[sqCPU].portiere : { maglia: '#ffffff', pantaloncini: '#000000', calzettoni: '#ffffff' };
  }
  
  return { tu: divTu, cpu: divCpu };
}