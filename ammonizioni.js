/* ============================================================
   AMMONIZIONI.JS
   Struttura dati per le ammonizioni persistenti tra partite.
   
   Ogni giocatore ha:
   - gialli: numero di cartellini gialli accumulati (0, 1, 2...)
   - squalificato: true se deve saltare la prossima partita
   
   La struttura viene letta all'avvio dal gioco.
   Il file può essere esportato/importato come JSON dal menu Impostazioni.
   ============================================================ */

var AMMONIZIONI_DEFAULT = {
  versione: 1,
  stagione: '2026/27',
  dataUltimoAggiornamento: null,
  squadre: {}
};

/* Questa funzione verrà chiamata dal gioco per inizializzare
   la struttura vuota se non esiste già un file caricato. */
function inizializzaAmmonizioniVuote() {
  var struttura = JSON.parse(JSON.stringify(AMMONIZIONI_DEFAULT));
  var keys = Object.keys(ROSE);
  for (var i = 0; i < keys.length; i++) {
    var sqId = keys[i];
    var rosa = ROSE[sqId];
    var sqData = {
      portiere: {},
      difensori: {},
      centrocampisti: {},
      difensori_alta: {},
      panchina: {}
    };
    // Portiere
    for (var p = 0; p < rosa.portiere.length; p++) {
      sqData.portiere[rosa.portiere[p]] = { gialli: 0, squalificato: false };
    }
    // Difensori
    for (var d = 0; d < rosa.difensori.length; d++) {
      sqData.difensori[rosa.difensori[d]] = { gialli: 0, squalificato: false };
    }
    // Centrocampisti
    for (var c = 0; c < rosa.centrocampisti.length; c++) {
      sqData.centrocampisti[rosa.centrocampisti[c]] = { gialli: 0, squalificato: false };
    }
    // Difensori alta
    for (var da = 0; da < rosa.difensori_alta.length; da++) {
      sqData.difensori_alta[rosa.difensori_alta[da]] = { gialli: 0, squalificato: false };
    }
    // Panchina
    if (rosa.panchina) {
      var panRuoli = ['por', 'dif', 'cen', 'att'];
      for (var pr = 0; pr < panRuoli.length; pr++) {
        var ruolo = panRuoli[pr];
        if (!rosa.panchina[ruolo]) continue;
        for (var pk = 0; pk < rosa.panchina[ruolo].length; pk++) {
          sqData.panchina[rosa.panchina[ruolo][pk]] = { gialli: 0, squalificato: false };
        }
      }
    }
    struttura.squadre[sqId] = sqData;
  }
  return struttura;
}