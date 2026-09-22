import { Bucketlist } from '@/components/Bucketlist';
import { Dagteller } from '@/components/Dagteller';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeroIllustratie } from '@/components/HeroIllustratie';
import { Lichtkrant } from '@/components/Lichtkrant';
import { Driehoek, Kronkel, Memphis, Stippelcirkel, Zigzag } from '@/components/Memphis';
import { PlukTip } from '@/components/PlukTip';
import { FEITJES, GEPLUKTE_DAGEN } from '@/lib/inhoud';

export default function Home() {
  return (
    <>
      <Header />
      <Lichtkrant />

      <main id="top">
        <section className="hero">
          <Memphis>
            <Kronkel style={{ top: 30, left: '3%' }} />
            <Driehoek style={{ top: 70, right: '4%' }} kern="#E6A9BD" />
            <Zigzag style={{ bottom: 30, left: '42%' }} segmenten={5} />
            <Stippelcirkel style={{ bottom: 60, left: '2%' }} maat={60} />
          </Memphis>

          <div className="wrap hero__grid">
            <div className="hero__tekst">
              <span className="sticker sticker--pil bg-mint draai-l">
                Carpe diem, maar dan letterlijk
              </span>
              <h1>
                Pluk de{' '}
                <span className="onderstreept">
                  dag.
                  <svg viewBox="0 0 250 26" width="250" height="26" aria-hidden="true">
                    <path
                      d="M4 16 Q 34 2 64 16 T 124 16 T 184 16 T 244 14"
                      fill="none"
                      stroke="#D8796A"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p>
                Hoi! Wij zijn <strong>Daan en Vic</strong>. Professionele dagplukkers, amateur in
                al het andere. We verzamelen goede dagen zoals anderen postzegels: zorgvuldig,
                een tikje obsessief en met plakkerige vingers.
              </p>
              <PlukTip />
            </div>

            <HeroIllustratie />
          </div>
        </section>

        <section className="sectie sectie--wit" id="over">
          <div className="wrap over__grid">
            <div className="fotolijst">
              <figure className="venster">
                <div className="venster__balk">
                  <span>daan_en_vic.jpg</span>
                  <span className="venster__knoppen" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div className="foto-placeholder fotolijst__foto">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2F2B3D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
                    <circle cx="12" cy="13" r="3.5" />
                  </svg>
                  <span>[foto van Daan &amp; Vic]</span>
                </div>
                <figcaption>vlak voor een slecht idee dat goed uitpakte</figcaption>
              </figure>
              <span className="plakband plakband--1" aria-hidden="true" />
              <span className="plakband plakband--2" aria-hidden="true" />
            </div>

            <div className="over__tekst">
              <span className="kicker">even voorstellen</span>
              <h2>Over ons</h2>
              <p>
                Daan maakt plannen, Vic maakt ze beter. Samen zoeken we elke dag naar iets dat de
                moeite van het plukken waard is: een zonsopgang, een raar gesprek met een vreemde,
                of gewoon de perfecte tosti.
              </p>
              <p>We geloven niet zo in &quot;ooit&quot;. Ooit is namelijk geen dag van de week.</p>
              <div className="feitjes">
                {FEITJES.map((feitje) => (
                  <span key={feitje.tekst} className={`sticker ${feitje.kleur} ${feitje.draai}`}>
                    {feitje.tekst}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sectie prikbord" id="geplukt">
          <div className="wrap">
            <div className="sectie__kop sectie__kop--rij">
              <div className="sectie__kop">
                <span className="kicker">de fruitmand</span>
                <h2>Geplukte dagen</h2>
              </div>
              <p className="sectie__intro">
                Momenten die we niet wilden laten liggen. Sommige rijp, sommige een beetje geplet,
                allemaal de moeite waard.
              </p>
            </div>
            <div className="kaarten">
              {GEPLUKTE_DAGEN.map((dag) => (
                <article className="kaart" key={dag.titel}>
                  <span className="kaart__punaise" aria-hidden="true" />
                  <div className="foto-placeholder">{dag.foto}</div>
                  <div className="kaart__meta">
                    <time dateTime={dag.datum}>{dag.datumLabel}</time>
                    <span className="tag">{dag.tag}</span>
                  </div>
                  <h3>{dag.titel}</h3>
                  <p>{dag.tekst}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sectie sectie--wit" id="bucketlist">
          <Bucketlist />
        </section>

        <section className="dagteller" id="dagteller">
          <div className="wrap">
            <Dagteller />
          </div>
        </section>

        <section className="sectie" id="contact">
          <div className="wrap contact">
            <span className="kicker">het laatste hapje</span>
            <h2>Zeg eens hallo</h2>
            <p className="sectie__intro">
              Een goed plan, een slecht grapje of een tip voor de bucketlist? Stuur maar op. We
              reageren sneller dan fruit rijpt.
            </p>
            <div className="contact__knoppen">
              <a className="knop" href="mailto:jullie@email.nl">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2F2B3D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                [jullie@email.nl]
              </a>
              <div className="contact__socials">
                <a className="knop knop--wit" href="#">
                  Instagram
                </a>
                <a className="knop knop--wit" href="#">
                  Onze playlist
                </a>
              </div>
            </div>
            <div className="ps">
              <p>
                P.S. Je hebt net een stukje van je dag aan ons gegeven. Dank je! Ga er nu gauw zelf
                eentje plukken.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer>
        <span className="in-aanbouw">Beste bekeken in Netscape Navigator op 800×600</span>
        <a href="#top">
          <strong>Terug naar boven</strong>
        </a>
      </Footer>
    </>
  );
}
