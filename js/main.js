/* Pluk de dag – interactie voor de homepage */
(function () {
  'use strict';

  /* ---------- Jaartal overal ---------- */
  var nu = new Date();
  var jaar = nu.getFullYear();
  document.querySelectorAll('[data-jaar]').forEach(function (el) { el.textContent = jaar; });
  document.querySelectorAll('[data-vandaag]').forEach(function (el) { el.textContent = nu.getDate(); });

  /* ---------- Mobiel menu ---------- */
  var menuKnop = document.querySelector('[data-menu-knop]');
  var menu = document.getElementById('menu');
  if (menuKnop && menu) {
    var label = menuKnop.querySelector('[data-menu-label]');
    var zetMenu = function (open) {
      menu.hidden = !open;
      menuKnop.setAttribute('aria-expanded', String(open));
      label.textContent = open ? 'Sluit' : 'Menu';
    };
    menuKnop.addEventListener('click', function () { zetMenu(menu.hidden); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) zetMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { zetMenu(false); menuKnop.focus(); } });
  }

  /* ---------- Pluk-tip ---------- */
  var TIPS = [
    'Eet je ontbijt vandaag buiten. Ook als het motregent.',
    'Stuur iemand een appje zonder reden. Gewoon: hoi, jij bent leuk.',
    'Neem een andere route naar huis en verdwaal een klein beetje.',
    'Koop die rare vrucht in de supermarkt die je nooit koopt.',
    'Zet een liedje op en dans de hele afwas door.',
    'Kijk tien minuten naar de wolken. Telefoon in een andere kamer.',
    'Zeg ja tegen het eerste leuke plan dat voorbijkomt.',
    'Schrijf drie dingen op die vandaag goed gingen. Koffie telt.',
    'Ga zitten op dat bankje waar je altijd langs loopt.',
    'Bak pannenkoeken. Op een woensdag. Waarom niet.',
    'Loop even blootsvoets door het gras (kijk wel waar je stapt).',
    'Groet je buren alsof je ze al jaren mist.'
  ];
  var plukKnop = document.querySelector('[data-pluk-knop]');
  var tipvak = document.querySelector('[data-tipvak]');
  var laatste = -1;
  var bezig = false;
  var ZON = '<svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true"><g stroke="#2F2B3D" stroke-width="3" stroke-linecap="round"><line x1="20" y1="2" x2="20" y2="7"/><line x1="20" y1="33" x2="20" y2="38"/><line x1="2" y1="20" x2="7" y2="20"/><line x1="33" y1="20" x2="38" y2="20"/></g><circle cx="20" cy="20" r="10" fill="#E9C77E" stroke="#2F2B3D" stroke-width="3"/></svg>';

  function venster(titel, inhoud) {
    return '<div class="venster__balk"><span>' + titel + '</span><span class="venster__knoppen" aria-hidden="true"><span></span><span></span><span></span></span></div>' + inhoud;
  }

  if (plukKnop && tipvak) {
    plukKnop.addEventListener('click', function () {
      if (bezig) return;
      bezig = true;
      tipvak.innerHTML = '<div class="tipvak__laden">' + ZON + '<span>Dag aan het plukken...</span></div>';
      setTimeout(function () {
        var i = Math.floor(Math.random() * TIPS.length);
        if (i === laatste) i = (i + 1) % TIPS.length;
        laatste = i;
        var kaart = document.createElement('div');
        kaart.className = 'venster tipkaart';
        kaart.innerHTML = venster('pluktip.exe',
          '<div class="tipkaart__body"><span class="tipkaart__label">Vers geplukte tip voor vandaag</span><span class="tipkaart__tekst"></span></div>');
        kaart.querySelector('.tipkaart__tekst').textContent = TIPS[i];
        tipvak.innerHTML = '';
        tipvak.appendChild(kaart);
        plukKnop.querySelector('[data-pluk-label]').textContent = 'Nog eentje plukken';
        bezig = false;
      }, 700);
    });
  }

  /* ---------- Bucketlist ---------- */
  var ONRIJP = '<svg class="fruit fruit--onrijp" width="46" height="46" viewBox="0 0 56 56" aria-hidden="true"><path d="M28 16 q1 -7 6 -10" fill="none" stroke="#2F2B3D" stroke-width="3" stroke-linecap="round"/><path d="M31 11 q10 -9 18 -1 q-9 8 -18 1 Z" fill="#F2EBDD" stroke="#2F2B3D" stroke-width="2.5" stroke-linejoin="round"/><circle cx="28" cy="33" r="17" fill="#9CCBBE" stroke="#2F2B3D" stroke-width="3"/><circle cx="22.5" cy="31" r="2" fill="#2F2B3D"/><circle cx="33.5" cy="31" r="2" fill="#2F2B3D"/><path d="M24 39 h8" stroke="#2F2B3D" stroke-width="2.5" stroke-linecap="round"/></svg>';
  var RIJP = '<svg class="fruit fruit--rijp" width="46" height="46" viewBox="0 0 56 56" aria-hidden="true"><path d="M28 16 q1 -7 6 -10" fill="none" stroke="#2F2B3D" stroke-width="3" stroke-linecap="round"/><path d="M31 11 q10 -9 18 -1 q-9 8 -18 1 Z" fill="#9CCBBE" stroke="#2F2B3D" stroke-width="2.5" stroke-linejoin="round"/><circle cx="28" cy="33" r="18" fill="#D8796A" stroke="#2F2B3D" stroke-width="3"/><ellipse cx="20" cy="25" rx="4" ry="3" fill="#FFFFFF"/><path d="M20 32 q3 -4 6 0 M30 32 q3 -4 6 0" fill="none" stroke="#2F2B3D" stroke-width="2.5" stroke-linecap="round"/><path d="M22 38 q6 6 12 0" fill="none" stroke="#2F2B3D" stroke-width="2.5" stroke-linecap="round"/></svg>';

  var dromen = Array.prototype.slice.call(document.querySelectorAll('[data-dromen] .droom'));
  var rijpEl = document.querySelector('[data-rijp]');

  function zetStatus(knop) {
    var rijp = knop.getAttribute('aria-pressed') === 'true';
    knop.querySelector('.droom__status').textContent = rijp ? 'Rijp & geplukt' : 'Nog niet rijp';
  }
  function telRijp() {
    if (!rijpEl) return;
    var n = dromen.filter(function (d) { return d.getAttribute('aria-pressed') === 'true'; }).length;
    rijpEl.textContent = n + '/' + dromen.length;
  }

  dromen.forEach(function (knop) {
    var label = knop.querySelector('.droom__label');
    var tekst = document.createElement('span');
    tekst.className = 'droom__tekst';
    tekst.appendChild(label);
    var status = document.createElement('span');
    status.className = 'droom__status';
    tekst.appendChild(status);
    knop.innerHTML = ONRIJP + RIJP;
    knop.appendChild(tekst);
    zetStatus(knop);
    knop.addEventListener('click', function () {
      var rijp = knop.getAttribute('aria-pressed') === 'true';
      knop.setAttribute('aria-pressed', String(!rijp));
      zetStatus(knop);
      telRijp();
    });
  });
  telRijp();

  /* ---------- Dagteller ---------- */
  var cijfersEl = document.querySelector('[data-cijfers]');
  if (cijfersEl) {
    var vandaag = new Date(jaar, nu.getMonth(), nu.getDate());
    var index = Math.round((vandaag - new Date(jaar, 0, 1)) / 86400000); // al geplukte dagen
    var schrikkel = (jaar % 4 === 0 && jaar % 100 !== 0) || jaar % 400 === 0;
    var totaal = schrikkel ? 366 : 365;
    var over = totaal - index; // vandaag telt nog mee

    cijfersEl.setAttribute('aria-label', over + ' dagen');
    cijfersEl.innerHTML = String(over).split('').map(function (c) { return '<span>' + c + '</span>'; }).join('');
    document.querySelectorAll('[data-over]').forEach(function (el) { el.textContent = over; });
    document.querySelectorAll('[data-geplukt]').forEach(function (el) { el.textContent = index; });
    var balk = document.querySelector('[data-balk]');
    if (balk) balk.style.width = (index / totaal * 100).toFixed(1) + '%';
  }
})();
