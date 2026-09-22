import Link from 'next/link';
import { Logo } from './Logo';

export function HeaderTerug({ metKnop = true }: { metKnop?: boolean }) {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <Logo href="/" />
        {metKnop && (
          <Link
            className="knop knop--wit"
            href="/"
            style={{ minHeight: 46, padding: '0 16px' }}
          >
            <svg
              width="18"
              height="18"
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
        )}
      </div>
    </header>
  );
}
