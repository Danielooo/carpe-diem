'use client';

import { useVandaag } from '@/lib/datum';

export function HeroIllustratie() {
  const vandaag = useVandaag();

  return (
    <div className="hero__illustratie">
      <svg
        viewBox="0 0 560 520"
        width="560"
        height="520"
        style={{ width: '100%', height: 'auto' }}
        role="img"
        aria-label="Illustratie: een hand plukt een lachend zonnetje van een boom"
      >
        <path
          d="M0 470 Q140 440 280 462 T560 455 L560 520 L0 520 Z"
          fill="#9CCBBE"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M40 462 l6 -14 l5 12 M470 452 l5 -14 l5 12 M330 460 l5 -12 l4 11 M230 458 l4 -10 l4 9"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M120 468 C128 400 126 320 134 230 L172 230 C176 320 178 400 190 468 Z"
          fill="#F2EBDD"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M148 300 q7 10 0 22 M162 380 q-7 10 0 22 M150 430 q6 8 0 16"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M40 190 C0 150 20 80 80 78 C90 30 160 10 200 40 C240 10 310 30 312 84 C360 100 360 180 320 200 C320 250 250 262 220 240 C190 262 120 262 100 236 C60 250 30 226 40 190 Z"
          fill="#9CCBBE"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M70 120 q10 -9 20 0 M226 64 q10 -9 20 0 M284 176 q10 -9 20 0 M110 196 q10 -9 20 0"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <g stroke="#2F2B3D" strokeWidth="3" strokeLinecap="round">
          <path d="M100 136 v-8" />
          <path d="M190 81 v-8" />
          <path d="M252 126 v-8" />
          <path d="M170 196 v-8" />
        </g>
        <circle cx="100" cy="150" r="14" fill="#D8796A" stroke="#2F2B3D" strokeWidth="3" />
        <circle cx="190" cy="95" r="14" fill="#D8796A" stroke="#2F2B3D" strokeWidth="3" />
        <circle cx="252" cy="140" r="14" fill="#D8796A" stroke="#2F2B3D" strokeWidth="3" />
        <circle cx="170" cy="210" r="14" fill="#E6A9BD" stroke="#2F2B3D" strokeWidth="3" />
        <g fill="#FFFFFF">
          <circle cx="95" cy="145" r="3" />
          <circle cx="185" cy="90" r="3" />
          <circle cx="247" cy="135" r="3" />
          <circle cx="165" cy="205" r="3" />
        </g>
        <path d="M70 236 v20" stroke="#2F2B3D" strokeWidth="2.5" strokeLinecap="round" />
        <g transform="rotate(-8 70 276)">
          <rect x="52" y="256" width="36" height="40" rx="5" fill="#FAF6EE" stroke="#2F2B3D" strokeWidth="3" />
          <rect x="52" y="256" width="36" height="12" rx="3" fill="#D8796A" stroke="#2F2B3D" strokeWidth="3" />
          <text
            x="70"
            y="290"
            textAnchor="middle"
            fontFamily="var(--font-kop)"
            fontWeight="800"
            fontSize="17"
            fill="#2F2B3D"
          >
            {vandaag?.getDate() ?? ''}
          </text>
        </g>
        <g stroke="#2F2B3D" strokeWidth="4" strokeLinecap="round">
          <line x1="342" y1="330" x2="360" y2="330" />
          <line x1="328.6" y1="371.2" x2="343.2" y2="381.7" />
          <line x1="293.6" y1="396.6" x2="299.2" y2="413.7" />
          <line x1="250.4" y1="396.6" x2="244.8" y2="413.7" />
          <line x1="215.4" y1="371.2" x2="200.8" y2="381.7" />
          <line x1="202" y1="330" x2="184" y2="330" />
          <line x1="215.4" y1="288.8" x2="200.8" y2="278.3" />
          <line x1="328.6" y1="288.8" x2="343.2" y2="278.3" />
        </g>
        <path
          d="M272 272 C268 262 276 252 272 240"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="272" cy="330" r="58" fill="#E9C77E" stroke="#2F2B3D" strokeWidth="3" />
        <path
          d="M249 324 q8 -9 16 0 M281 324 q8 -9 16 0"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M254 344 q18 17 36 0"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="243" cy="342" r="7" fill="#E6A9BD" />
        <circle cx="301" cy="342" r="7" fill="#E6A9BD" />
        <rect x="366" y="222" width="220" height="80" fill="#D8796A" stroke="#2F2B3D" strokeWidth="3" />
        <rect x="300" y="232" width="72" height="60" rx="24" fill="#F2EBDD" stroke="#2F2B3D" strokeWidth="3" />
        <rect x="358" y="218" width="22" height="88" rx="6" fill="#E9C77E" stroke="#2F2B3D" strokeWidth="3" />
        <rect x="258" y="238" width="62" height="19" rx="9.5" fill="#F2EBDD" stroke="#2F2B3D" strokeWidth="3" />
        <rect x="264" y="260" width="52" height="18" rx="9" fill="#F2EBDD" stroke="#2F2B3D" strokeWidth="3" />
        <path
          d="M330 264 h16 M332 278 h14"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M404 196 l20 -16 M422 206 l26 -10 M408 330 l20 14"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M410 372 C390 352 372 354 350 362"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M360 350 L348 363 L363 370"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="392"
          y="404"
          transform="rotate(-6 392 404)"
          fontFamily="var(--font-hand)"
          fontSize="32"
          fontWeight="700"
          fill="#2F2B3D"
        >
          vers geplukt!
        </text>
        <path
          d="M470 60 Q470 80 490 80 Q470 80 470 100 Q470 80 450 80 Q470 80 470 60 Z"
          fill="#E9C77E"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M36 18 Q36 30 48 30 Q36 30 36 42 Q36 30 24 30 Q36 30 36 18 Z"
          fill="#E6A9BD"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M510 150 Q510 160 520 160 Q510 160 510 170 Q510 160 500 160 Q510 160 510 150 Z"
          fill="#9CCBBE"
          stroke="#2F2B3D"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
      <div className="vers-sticker" aria-hidden="true">
        100%
        <br />
        vers van
        <br />
        de boom
      </div>
    </div>
  );
}
