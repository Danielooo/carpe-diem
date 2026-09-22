'use client';

import { useEffect, useRef, useState } from 'react';
import { PLUK_TIPS } from '@/lib/inhoud';

function Zonnetje() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
      <g stroke="#2F2B3D" strokeWidth="3" strokeLinecap="round">
        <line x1="20" y1="2" x2="20" y2="7" />
        <line x1="20" y1="33" x2="20" y2="38" />
        <line x1="2" y1="20" x2="7" y2="20" />
        <line x1="33" y1="20" x2="38" y2="20" />
      </g>
      <circle cx="20" cy="20" r="10" fill="#E9C77E" stroke="#2F2B3D" strokeWidth="3" />
    </svg>
  );
}

export function PlukTip() {
  const [tip, setTip] = useState<number | null>(null);
  const [laadt, setLaadt] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const pluk = () => {
    if (laadt) return;
    setLaadt(true);
    timer.current = setTimeout(() => {
      setTip((vorige) => {
        let i = Math.floor(Math.random() * PLUK_TIPS.length);
        if (i === vorige) i = (i + 1) % PLUK_TIPS.length;
        return i;
      });
      setLaadt(false);
    }, 700);
  };

  return (
    <>
      <div className="hero__acties">
        <button className="knop" type="button" onClick={pluk}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2F2B3D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 7c0-3 2-5 5-5" />
            <circle cx="12" cy="14" r="7" />
          </svg>
          <span>{tip === null ? 'Geef me een pluk-tip' : 'Nog eentje plukken'}</span>
        </button>
        <div className="hero__notitie">
          <svg
            width="56"
            height="34"
            viewBox="0 0 56 34"
            fill="none"
            stroke="#2F2B3D"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M54 10 C40 2 22 6 6 22" />
            <path d="M4 10 L6 23 L19 22" />
          </svg>
          <span className="hand">klik maar, het is gratis</span>
        </div>
      </div>

      <div className="tipvak" aria-live="polite">
        {laadt ? (
          <div className="tipvak__laden">
            <Zonnetje />
            <span>Dag aan het plukken...</span>
          </div>
        ) : tip === null ? (
          <div className="tipvak__leeg">
            Hier valt zo je tip uit de boom. Even geduld, hij hangt nog.
          </div>
        ) : (
          <div className="venster tipkaart">
            <div className="venster__balk">
              <span>pluktip.exe</span>
              <span className="venster__knoppen" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="tipkaart__body">
              <span className="tipkaart__label">Vers geplukte tip voor vandaag</span>
              <span className="tipkaart__tekst">{PLUK_TIPS[tip]}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
