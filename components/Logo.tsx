import Link from 'next/link';

export function Logo({ href }: { href: string }) {
  return (
    <Link className="logo" href={href}>
      <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true">
        <g stroke="#2F2B3D" strokeWidth="3" strokeLinecap="round">
          <line x1="20" y1="2" x2="20" y2="7" />
          <line x1="20" y1="33" x2="20" y2="38" />
          <line x1="2" y1="20" x2="7" y2="20" />
          <line x1="33" y1="20" x2="38" y2="20" />
          <line x1="7" y1="7" x2="10.5" y2="10.5" />
          <line x1="29.5" y1="29.5" x2="33" y2="33" />
          <line x1="33" y1="7" x2="29.5" y2="10.5" />
          <line x1="7" y1="33" x2="10.5" y2="29.5" />
        </g>
        <circle cx="20" cy="20" r="10" fill="#E9C77E" stroke="#2F2B3D" strokeWidth="3" />
        <path
          d="M16 22 q4 4 8 0"
          fill="none"
          stroke="#2F2B3D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span>Daan &amp; Vic</span>
    </Link>
  );
}
