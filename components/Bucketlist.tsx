'use client';

import { useState } from 'react';
import { DROMEN } from '@/lib/inhoud';

function FruitOnrijp() {
  return (
    <svg className="fruit fruit--onrijp" width="46" height="46" viewBox="0 0 56 56" aria-hidden="true">
      <path d="M28 16 q1 -7 6 -10" fill="none" stroke="#2F2B3D" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M31 11 q10 -9 18 -1 q-9 8 -18 1 Z"
        fill="#F2EBDD"
        stroke="#2F2B3D"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="33" r="17" fill="#9CCBBE" stroke="#2F2B3D" strokeWidth="3" />
      <circle cx="22.5" cy="31" r="2" fill="#2F2B3D" />
      <circle cx="33.5" cy="31" r="2" fill="#2F2B3D" />
      <path d="M24 39 h8" stroke="#2F2B3D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function FruitRijp() {
  return (
    <svg className="fruit fruit--rijp" width="46" height="46" viewBox="0 0 56 56" aria-hidden="true">
      <path d="M28 16 q1 -7 6 -10" fill="none" stroke="#2F2B3D" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M31 11 q10 -9 18 -1 q-9 8 -18 1 Z"
        fill="#9CCBBE"
        stroke="#2F2B3D"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="33" r="18" fill="#D8796A" stroke="#2F2B3D" strokeWidth="3" />
      <ellipse cx="20" cy="25" rx="4" ry="3" fill="#FFFFFF" />
      <path
        d="M20 32 q3 -4 6 0 M30 32 q3 -4 6 0"
        fill="none"
        stroke="#2F2B3D"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M22 38 q6 6 12 0" fill="none" stroke="#2F2B3D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Bucketlist() {
  const [rijp, setRijp] = useState(() => DROMEN.map((droom) => droom.rijp));

  const wissel = (i: number) =>
    setRijp((was) => was.map((waarde, j) => (i === j ? !waarde : waarde)));

  const aantalRijp = rijp.filter(Boolean).length;

  return (
    <div className="wrap">
      <div className="sectie__kop">
        <span className="kicker">de boom hangt nog vol</span>
        <div className="bucket__kop">
          <h2>Nog te plukken</h2>
          <div className="rijpteller">
            <strong>
              {aantalRijp}/{DROMEN.length}
            </strong>
            <span>al rijp</span>
          </div>
        </div>
        <p className="sectie__intro">
          Onze bucketlist. Groen is nog niet rijp, rood is geplukt en opgegeten. Klik op een
          droom om hem te oogsten.
        </p>
      </div>

      <ul className="dromen">
        {DROMEN.map((droom, i) => (
          <li key={droom.tekst}>
            <button
              className="droom"
              type="button"
              aria-pressed={rijp[i]}
              onClick={() => wissel(i)}
            >
              <FruitOnrijp />
              <FruitRijp />
              <span className="droom__tekst">
                <span className="droom__label">{droom.tekst}</span>
                <span className="droom__status">
                  {rijp[i] ? 'Rijp & geplukt' : 'Nog niet rijp'}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <p className="voetnoot">psst: rijp fruit krijg je alleen door het gewoon te doen.</p>
    </div>
  );
}
