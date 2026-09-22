import Link from 'next/link';
import { HeaderTerug } from '@/components/HeaderTerug';
import { Driehoek, Kronkel, Memphis, Zigzag } from '@/components/Memphis';

export default function NietGevonden() {
  return (
    <>
      <HeaderTerug metKnop={false} />

      <main className="fout">
        <svg className="fout__tak" width="620" height="230" viewBox="0 0 620 230" aria-hidden="true">
          <path
            d="M-10 60 C120 50 260 78 420 70 C470 68 520 60 560 50"
            fill="none"
            stroke="#2F2B3D"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M-10 60 C120 50 260 78 420 70 C470 68 520 60 560 50"
            fill="none"
            stroke="#F2EBDD"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M150 58 q20 -40 60 -34 q-16 38 -60 34 Z M300 72 q30 -30 66 -14 q-28 30 -66 14 Z M470 64 q10 40 48 50 q4 -40 -48 -50 Z"
            fill="#9CCBBE"
            stroke="#2F2B3D"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M392 71 C388 86 396 96 390 110"
            fill="none"
            stroke="#2F2B3D"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M383 110 l7 6 l6 -8"
            fill="none"
            stroke="#2F2B3D"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M300 170 C330 160 360 146 382 124"
            fill="none"
            stroke="#2F2B3D"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M368 124 L384 121 L381 137"
            fill="none"
            stroke="#2F2B3D"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="160"
            y="196"
            transform="rotate(-4 160 196)"
            fontFamily="var(--font-hand)"
            fontSize="30"
            fontWeight="700"
            fill="#2F2B3D"
          >
            hier hing ie nog, echt waar
          </text>
        </svg>

        <Memphis>
          <Kronkel style={{ bottom: 60, right: '8%' }} />
          <Driehoek style={{ top: 180, right: '10%' }} vulling="#9CCBBE" />
          <Zigzag style={{ bottom: 160, left: '6%' }} segmenten={4} />
        </Memphis>

        <div className="wrap fout__inner">
          <div className="fout__getal" role="img" aria-label="404">
            <span>4</span>
            <svg width="160" height="210" viewBox="0 0 170 220" aria-hidden="true">
              <path
                d="M85 34 q-4 -18 8 -28"
                fill="none"
                stroke="#2F2B3D"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M92 16 q24 -16 42 -2 q-20 16 -42 2 Z"
                fill="#9CCBBE"
                stroke="#2F2B3D"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M36 60 C36 34 134 34 134 60 C134 86 106 100 106 128 C106 156 138 168 138 192 C138 220 32 220 32 192 C32 168 64 156 64 128 C64 100 36 86 36 60 Z"
                fill="#F2EBDD"
                stroke="#2F2B3D"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M36 60 C36 34 134 34 134 60 C134 70 36 70 36 60 Z"
                fill="#D8796A"
                stroke="#2F2B3D"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M32 192 C32 182 138 182 138 192 C138 220 32 220 32 192 Z"
                fill="#D8796A"
                stroke="#2F2B3D"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <ellipse cx="78" cy="122" rx="4" ry="7" fill="#2F2B3D" transform="rotate(-20 78 122)" />
              <ellipse cx="92" cy="136" rx="4" ry="7" fill="#2F2B3D" transform="rotate(20 92 136)" />
            </svg>
            <span>4</span>
          </div>

          <h1>Oeps, deze dag is al geplukt.</h1>
          <p style={{ maxWidth: 560 }}>
            Iemand was je voor, of deze pagina heeft nooit aan de boom gehangen. Geen paniek: er
            hangen er nog genoeg.
          </p>

          <div className="fout__acties">
            <Link className="knop" href="/">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2F2B3D"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 5l-7 7 7 7" />
              </svg>
              Terug naar de boom
            </Link>
            <div className="venster foutvenster" role="note">
              <div className="venster__balk">
                <span>Fout</span>
                <span className="venster__knoppen" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <p>
                <strong>Deze dag heeft een ongeldige bewerking uitgevoerd</strong> en wordt
                afgesloten. Foutcode: te laat uit bed.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
