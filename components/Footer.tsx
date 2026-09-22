import { Jaar } from './Jaar';

export function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>
          © <Jaar /> Daan &amp; Vic
        </span>
        {children}
      </div>
    </footer>
  );
}
