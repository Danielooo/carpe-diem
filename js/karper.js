/* De Diem Karper – quote van de dag */
(function () {
  'use strict';

  var QUOTES = [
    'Pluk de dag. Of in elk geval de ochtend. De middag mag je laten hangen.',
    'Wie niet plukt, heeft straks alleen nog compote.',
    'Ik zwem niet tegen de stroom in. Ik zwem rondjes. Ook dat is een koers.',
    'Het leven is kort. Eet het toetje eerst.',
    'Maak je niet druk om het water. Maak je druk om de broodkruimels.',
    'Soms is niks doen ook een dag plukken. Kijk maar naar mij.',
    'Je hoeft niet de grootste vis in de vijver te zijn. Wel de vrolijkste.',
    'Gisteren is weggezwommen. Morgen ligt nog in de kuit. Vandaag is nu. Blub.',
    'Hap naar alles wat glinstert. Behalve naar haakjes.',
    'Een goede dag begint met één slag van je staart. De rest volgt vanzelf.',
    'Ik kijk niet dom. Ik denk na. Dat duurt bij mij gewoon wat langer.',
    'Carpe diem? Nee joh. Diem karper. Zo, weer wat geleerd.'
  ];

  var nu = new Date();
  var jaar = nu.getFullYear();
  var dagIndex = Math.round((new Date(jaar, nu.getMonth(), nu.getDate()) - new Date(jaar, 0, 1)) / 86400000);
  var datum = nu.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' });
  var extra = 0;

  var quoteEl = document.querySelector('[data-quote]');
  var labelEl = document.querySelector('[data-quote-label]');
  var volgende = document.querySelector('[data-volgende]');
  var terug = document.querySelector('[data-terug]');

  document.querySelectorAll('[data-jaar]').forEach(function (el) { el.textContent = jaar; });

  function toon() {
    quoteEl.textContent = QUOTES[(dagIndex + extra) % QUOTES.length];
    labelEl.textContent = extra ? 'Bonuswijsheid' : 'Quote van de dag · ' + datum;
    terug.hidden = extra === 0;
  }

  volgende.addEventListener('click', function () {
    extra = (extra % (QUOTES.length - 1)) + 1;
    toon();
  });
  terug.addEventListener('click', function () {
    extra = 0;
    toon();
    volgende.focus();
  });

  toon();
})();
