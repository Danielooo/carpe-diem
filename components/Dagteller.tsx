'use client';

import { dagIndex, dagenInJaar, useVandaag } from '@/lib/datum';

export function Dagteller() {
  const vandaag = useVandaag();

  const jaar = vandaag?.getFullYear();
  const geplukt = vandaag ? dagIndex(vandaag) : 0;
  const totaal = jaar ? dagenInJaar(jaar) : 365;
  const over = totaal - geplukt;

  return (
    <div className="teller">
      <span className="kicker">de teller loopt, de dag ook</span>
      <span className="teller__nog">Nog</span>
      <div className="teller__cijfers" role="img" aria-label={vandaag ? `${over} dagen` : 'dagen'}>
        {vandaag &&
          String(over)
            .split('')
            .map((cijfer, i) => <span key={i}>{cijfer}</span>)}
      </div>
      <span className="teller__zin">dagen te plukken in {jaar}.</span>
      <div className="balk">
        <div className="balk__rail">
          <div
            className="balk__vulling"
            style={{ width: vandaag ? `${((geplukt / totaal) * 100).toFixed(1)}%` : 0 }}
          />
        </div>
        <div className="balk__labels">
          <span>{vandaag && <>{geplukt} al geplukt</>}</span>
          <span>{vandaag && <>{over} nog aan de boom</>}</span>
        </div>
      </div>
      <span className="teller__noot">(vandaag telt nog mee, dus: hup)</span>
    </div>
  );
}
