export const PLUK_TIPS = [
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
  'Groet je buren alsof je ze al jaren mist.',
];

export const KARPER_QUOTES = [
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
  'Carpe diem? Nee joh. Diem karper. Zo, weer wat geleerd.',
];

export type GeplukteDag = {
  datum: string;
  datumLabel: string;
  tag: string;
  titel: string;
  tekst: string;
  foto: string;
};

export const GEPLUKTE_DAGEN: GeplukteDag[] = [
  {
    datum: '2026-06-14',
    datumLabel: '14 juni 2026',
    tag: 'vroeg op',
    titel: 'Om 05:12 op voor de zon',
    tekst: 'Eerst de wekker vervloekt, daarna drie kwartier stil van hoe mooi het was.',
    foto: '[foto: zonsopgang]',
  },
  {
    datum: '2026-03-03',
    datumLabel: '3 maart 2026',
    tag: 'keuken',
    titel: 'Zelf zuurdesem gebakken',
    tekst: 'Het brood was een baksteen. Het was wel een héérlijke baksteen.',
    foto: '[foto: het brood]',
  },
  {
    datum: '2026-04-27',
    datumLabel: '27 april 2026',
    tag: 'zomaar',
    titel: 'Fietsen tot de weg ophield',
    tekst: 'Geen plan, wel een thermoskan. Uitgekomen bij zee, en bij een patatkraam.',
    foto: '[foto: fietsen]',
  },
  {
    datum: '2026-01-01',
    datumLabel: '1 januari 2026',
    tag: 'durf',
    titel: 'Eerste keer ijszwemmen',
    tekst: 'Vier seconden in het water. Vier onvergetelijke, ijskoude seconden.',
    foto: '[foto: brrr]',
  },
  {
    datum: '2026-08-08',
    datumLabel: '8 augustus 2026',
    tag: 'oogst',
    titel: 'Een moestuin, één courgette',
    tekst: 'Maandenlang gewied en gegoten. Resultaat: één courgette. Wel ónze courgette.',
    foto: '[foto: de courgette]',
  },
  {
    datum: '2026-05-19',
    datumLabel: '19 mei 2026',
    tag: 'vals',
    titel: 'Karaoke zonder schaamte',
    tekst: 'Niemand vroeg erom. We deden het toch. Twee keer, want er was een toegift.',
    foto: '[foto: microfoon]',
  },
];

export type Droom = {
  tekst: string;
  rijp: boolean;
};

export const DROMEN: Droom[] = [
  { tekst: 'Het noorderlicht zien', rijp: false },
  { tekst: 'Een boom planten (en er later van plukken)', rijp: true },
  { tekst: 'Een marathon uitlopen (wandelen telt)', rijp: false },
  { tekst: 'Leren salsadansen zonder tenen te pletten', rijp: true },
  { tekst: 'Een nacht onder de sterren slapen', rijp: false },
  { tekst: 'Zelf pasta maken zonder dat de keuken ontploft', rijp: true },
  { tekst: 'Een brief schrijven aan onszelf over 10 jaar', rijp: false },
  { tekst: 'Op een dinsdag zomaar vrij nemen', rijp: true },
];

export const FEITJES = [
  { tekst: 'Eén ochtendmens, één avondmens', kleur: 'bg-mosterd', draai: 'draai-l' },
  { tekst: 'Houden precies 1 plant in leven', kleur: 'bg-mint', draai: 'draai-r' },
  { tekst: 'Zeggen vaker ja dan nee', kleur: 'bg-roze', draai: 'draai-l1' },
];
