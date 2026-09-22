'use client';

import { useRef, useState } from 'react';
import { dagIndex, useVandaag } from '@/lib/datum';
import { KARPER_QUOTES } from '@/lib/inhoud';

export function KarperQuote() {
  const vandaag = useVandaag();
  const [extra, setExtra] = useState(0);
  const volgendeRef = useRef<HTMLButtonElement>(null);

  const vanDeDag = vandaag ? dagIndex(vandaag) : 0;
  const quote = KARPER_QUOTES[(vanDeDag + extra) % KARPER_QUOTES.length];
  const datum = vandaag?.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long' });

  const label = extra
    ? 'Bonuswijsheid'
    : datum
      ? `Quote van de dag · ${datum}`
      : 'Quote van de dag';

  return (
    <>
      <section className="quote venster" aria-labelledby="quote-titel">
        <div className="venster__balk">
          <span>wijsheid_van_de_dag.txt</span>
          <span className="venster__knoppen" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div className="quote__body">
          <span className="quote__label" id="quote-titel">
            {label}
          </span>
          <span className="quote__teken" aria-hidden="true">
            “
          </span>
          <blockquote aria-live="polite">{quote}</blockquote>
          <span className="quote__bron">— De Diem Karper, na lang staren</span>
        </div>
      </section>

      <div className="karper__acties">
        <button
          ref={volgendeRef}
          className="knop"
          type="button"
          onClick={() => setExtra((was) => (was % (KARPER_QUOTES.length - 1)) + 1)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2F2B3D"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="8" cy="15" r="3" />
            <circle cx="15" cy="8" r="4" />
            <circle cx="18" cy="17" r="2" />
          </svg>
          Nog een wijsheid opvissen
        </button>
        <button
          className="knop knop--wit"
          type="button"
          hidden={extra === 0}
          onClick={() => {
            setExtra(0);
            volgendeRef.current?.focus();
          }}
        >
          Terug naar die van vandaag
        </button>
      </div>
    </>
  );
}
