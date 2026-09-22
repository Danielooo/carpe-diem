const TEKST =
  '★ Welkom op de homepage van Daan & Vic ★ Je bent bezoeker nr. 000.001 (voor ons gevoel) ★ Pluk de dag ★ Deze site wordt nooit af ★ Groetjes aan iedereen die ons kent ★ ';

export function Lichtkrant() {
  return (
    <div className="lichtkrant" aria-hidden="true">
      {/* Twee keer: de animatie schuift precies de helft op en loopt zo naadloos rond. */}
      <span>
        {TEKST}
        {TEKST}
      </span>
    </div>
  );
}
