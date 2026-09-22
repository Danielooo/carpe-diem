import type { CSSProperties } from 'react';

export function Memphis({ children }: { children: React.ReactNode }) {
  return (
    <div className="memphis" aria-hidden="true">
      {children}
    </div>
  );
}

export function Kronkel({ style }: { style: CSSProperties }) {
  return (
    <svg width="130" height="40" viewBox="0 0 130 40" style={style}>
      <path
        d="M5 25 q20 -26 40 0 t40 0 t40 0"
        fill="none"
        stroke="#B9AAD6"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Driehoek({
  style,
  vulling = 'none',
  kern,
}: {
  style: CSSProperties;
  vulling?: string;
  kern?: string;
}) {
  return (
    <svg width="96" height="84" viewBox="0 0 96 84" style={style}>
      <path
        d="M48 4 l44 76 h-88 Z"
        fill={vulling}
        stroke="#2F2B3D"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {kern && <path d="M48 18 l30 52 h-60 Z" fill={kern} />}
    </svg>
  );
}

export function Zigzag({ style, segmenten }: { style: CSSProperties; segmenten: number }) {
  const d = Array.from({ length: segmenten }, (_, i) =>
    i % 2 === 0 ? 'l22 -22' : 'l22 22',
  ).join(' ');
  return (
    <svg width={segmenten * 22 + 20} height="34" viewBox={`0 0 ${segmenten * 22 + 20} 34`} style={style}>
      <path
        d={`M5 28 ${d}`}
        fill="none"
        stroke="#D8796A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Stippelcirkel({ style, maat }: { style: CSSProperties; maat: number }) {
  const mid = maat / 2;
  return (
    <svg width={maat} height={maat} viewBox={`0 0 ${maat} ${maat}`} style={style}>
      <circle
        cx={mid}
        cy={mid}
        r={mid - 4}
        fill="none"
        stroke="#2F2B3D"
        strokeWidth="3"
        strokeDasharray="4 7"
      />
    </svg>
  );
}
