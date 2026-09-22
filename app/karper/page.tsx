import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { HeaderTerug } from '@/components/HeaderTerug';
import { KarperIllustratie } from '@/components/KarperIllustratie';
import { KarperQuote } from '@/components/KarperQuote';
import { Driehoek, Kronkel, Memphis, Stippelcirkel, Zigzag } from '@/components/Memphis';

export const metadata: Metadata = {
  title: 'De Diem Karper – quote van de dag',
  description: 'Elke dag een wijsheid van de Diem Karper. Filosoof, vis, tja.',
};

export default function Karper() {
  return (
    <>
      <HeaderTerug />

      <main className="karper">
        <Memphis>
          <Kronkel style={{ top: 90, left: '6%' }} />
          <Driehoek style={{ top: 60, right: '8%' }} vulling="#9CCBBE" />
          <Zigzag style={{ bottom: 120, left: '8%' }} segmenten={4} />
          <Stippelcirkel style={{ bottom: 300, right: '7%' }} maat={66} />
        </Memphis>

        <div className="wrap">
          <div className="karper__inner">
            <span className="kicker">niet carpe diem, maar...</span>
            <h1>De Diem Karper</h1>
            <p className="karper__intro">
              Hij zwemt. Hij staart. Hij weet dingen, alleen niet welke. Elke dag deelt onze
              huisfilosoof één wijsheid, vers opgedoken uit de vijver.
            </p>

            <KarperIllustratie />
            <KarperQuote />

            <p className="hand" style={{ fontSize: 25, fontWeight: 500 }}>
              De quote van de dag wisselt om middernacht. De karper merkt het niet.
            </p>
          </div>
        </div>
      </main>

      <Footer>
        <span>Geen vissen gestrest bij het maken van deze pagina.</span>
      </Footer>
    </>
  );
}
