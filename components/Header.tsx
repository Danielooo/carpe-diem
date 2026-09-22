'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';

const LINKS = [
  { href: '/#over', label: 'Over ons' },
  { href: '/#geplukt', label: 'Geplukt' },
  { href: '/#bucketlist', label: 'Bucketlist' },
  { href: '/#dagteller', label: 'Dagteller' },
  { href: '/karper', label: 'Diem Karper' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const knopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const bijToets = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      knopRef.current?.focus();
    };
    document.addEventListener('keydown', bijToets);
    return () => document.removeEventListener('keydown', bijToets);
  }, [open]);

  return (
    <header className="header">
      <div className="wrap header__inner">
        <Logo href="/#top" />

        <nav className="nav" aria-label="Hoofdmenu">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="knop knop--mosterd" href="/#contact">
            Zeg hallo
          </Link>
        </nav>

        <button
          ref={knopRef}
          className="knop knop--mosterd menu-knop"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((was) => !was)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2F2B3D"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h10" />
          </svg>
          <span>{open ? 'Sluit' : 'Menu'}</span>
        </button>

        <nav className="menu" id="menu" aria-label="Mobiel menu" hidden={!open}>
          {[...LINKS, { href: '/#contact', label: 'Zeg hallo' }].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
