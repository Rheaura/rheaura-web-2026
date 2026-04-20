import { useReveal } from '../hooks/useReveal';
import { numeri } from '../data/numeri';
import PageHero from '../components/shared/PageHero';
import Footer from '../components/layout/Footer';
import './ChiSiamo.css';

const modelloSteps = [
  { num: '01', icon: '🌱', titolo: 'Coltivazione Certificata',       testo: 'Ogni socio produttore opera seguendo disciplinari certificati — GlobalGAP, IFS Food, biologico ICEA. Le buone pratiche agricole non sono un\'opzione, sono la base su cui costruiamo tutto.' },
  { num: '02', icon: '📊', titolo: 'Coordinamento e Programmazione', testo: 'RheAura integra i cicli produttivi stagionali di ogni cooperativa per garantire continuità di fornitura tutto l\'anno. La pianificazione condivisa è il nostro vantaggio competitivo principale.' },
  { num: '03', icon: '🚚', titolo: 'Commercializzazione Nazionale',  testo: 'Grazie alla rete RheAura, ogni singola cooperativa accede a canali commerciali nazionali — GDO, mercati all\'ingrosso, export — che singolarmente non potrebbero raggiungere.' },
  { num: '04', icon: '🔍', titolo: 'Tracciabilità Totale',           testo: 'Dalla semina al punto vendita, ogni prodotto porta con sé la storia del suo territorio, del suo produttore, del suo percorso. La trasparenza è il fondamento della nostra credibilità.' },
  { num: '05', icon: '💡', titolo: 'Innovazione Condivisa',          testo: 'L\'innovazione informatica e telematica trasforma l\'informazione in servizio. Dati, competenze ed esperienze di ogni produttore diventano patrimonio comune dell\'intera organizzazione.' },
  { num: '06', icon: '🌍', titolo: 'Sviluppo Sostenibile',           testo: 'Preserviamo l\'equilibrio ecologico dei territori in cui operiamo. Ogni scelta colturale tiene conto dell\'impatto ambientale a lungo termine, per consegnare terra fertile alle generazioni future.' },
];

const cooperative = [
  { nome: 'Soc. Coop. Acli Talia',                    regione: 'Calabria',  az: 4,  ha: '~25' },
  { nome: 'Cons. Prod. Peperoncino di Calabria',       regione: 'Calabria',  az: 58, ha: '137' },
  { nome: 'Soc. Coop. San Pietro',                     regione: 'Campania',  az: 17, ha: '36' },
  { nome: 'Soc. Coop. Passione di Terra',              regione: 'Calabria',  az: 30, ha: '158' },
  { nome: 'Soc. Coop. Romano',                         regione: 'Calabria',  az: 24, ha: '125' },
  { nome: 'Soc. Coop. Turano',                         regione: 'Calabria',  az: 43, ha: '141' },
  { nome: 'Soc. Coop. Roccanatura',                    regione: 'Calabria',  az: 16, ha: '26' },
  { nome: 'Soc. Coop. Agridoc',                        regione: 'Calabria',  az: 19, ha: '286' },
  { nome: 'Soc. Coop. Komus',                          regione: 'Calabria',  az: 41, ha: '188' },
];

const aziendeAgricole = [
  { nome: 'De Gregorio Aniello',           ha: '23',  regione: 'Calabria' },
  { nome: 'Soc. Agricola Morrone',          ha: '34',  regione: 'Calabria' },
  { nome: 'Az. Agr. Sammarro Massimo',     ha: '26',  regione: 'Calabria' },
  { nome: 'Az. Agr. De Risi Antonio',      ha: '13',  regione: 'Calabria' },
  { nome: 'La Camera Rosamaria',            ha: '58',  regione: 'Calabria' },
  { nome: 'Az. Agr. I Confini di Podella', ha: '5',   regione: 'Calabria' },
  { nome: 'Calabria Verde SRL',             ha: '10',  regione: 'Calabria' },
  { nome: 'Devona Antonio',                 ha: '5',   regione: 'Calabria' },
  { nome: 'Devona Rocco',                   ha: '5',   regione: 'Calabria' },
  { nome: 'Soc. Agr. Valle Lao',           ha: '102', regione: 'Calabria' },
  { nome: 'Soc. Coop. Bella Clementina',   ha: '51',  regione: 'Calabria' },
  { nome: 'Scarpone Soc. Agricola',         ha: '22',  regione: 'Abruzzo' },
];

const superfici = [
  { val: '668 ha', label: 'Clementine' },
  { val: '382 ha', label: 'Ortaggi' },
  { val: '197 ha', label: 'Pesco' },
  { val: '174 ha', label: 'Altri Agrumi' },
  { val: '65 ha',  label: 'Altra Frutta' },
];

export default function ChiSiamo() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();
  const ref4 = useReveal();

  return (
    <div>
      <PageHero
        eyebrow="Chi Siamo"
        title="Radici <em>profonde,</em><br>tavole italiane."
        lead="RheAura è l'Organizzazione di Produttori ortofrutticoli riconosciuta ai sensi del Reg. CE 1308/2013. Siamo il ponte tra la passione dei nostri soci agricoli e i consumatori di tutta Italia."
        imgSrc="/hero_chisiamo.jpg"
        imgAlt="Campi agricoli del Sud Italia"
        scrollHint="Scopri la nostra storia"
      />

      {/* Numeri */}
      <div className="numeri-band">
        <div className="numeri-grid" ref={ref1}>
          {numeri.map((n) => (
            <div key={n.val} className="numero reveal">
              <div className="numero-val">{n.val}</div>
              <div className="numero-label">{n.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Storia */}
      <div className="cs-storia" ref={ref2}>
        <div className="storia-grid">
          <div className="storia-text reveal">
            <span className="eyebrow">La Nostra Storia</span>
            <h2>Nata da una <em>passione vera</em> per la terra</h2>
            <p className="storia-body">
              RheAura nasce dall'incontro di cooperative agricole del Sud Italia che condividono un obiettivo comune: <strong>portare frutta e verdura fresca di qualità certificata sulle tavole degli italiani</strong>, valorizzando l'identità territoriale di ogni produzione.
            </p>
            <p className="storia-body">
              Il nome stesso racconta la nostra essenza: <strong>Rhe</strong>, come il movimento perpetuo della natura, <strong>Aura</strong>, come l'energia invisibile che anima ogni semino, ogni raccolto, ogni cooperativa che fa parte della nostra rete.
            </p>
            <p className="storia-body">
              Riconosciuta ai sensi del <strong>Regolamento CE 1308/2013</strong>, RheAura agisce come soggetto collettivo che commercializza le produzioni dei soci, garantendo standard qualitativi uniformi, tracciabilità completa di filiera e accesso a mercati altrimenti irraggiungibili per la singola realtà cooperativa.
            </p>
            <p className="storia-body">
              Oggi la compagine sociale conta <strong>21 soci diretti</strong> — 9 cooperative e 12 aziende agricole singole — per un totale di 282 unità produttive associate e <strong>1.486 ettari coltivati</strong> tra Calabria e Campania. Nel 2025 abbiamo commercializzato oltre <strong>23 milioni di kg</strong> di prodotto fresco per un imponibile di quasi <strong>20 milioni di euro</strong>.
            </p>
          </div>
          <div className="storia-visual reveal">
            <div className="storia-img-wrap">
              <img className="img-main" src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80" alt="Raccolta ortofrutticola" />
              <img className="img-inset" src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80" alt="Prodotti ortofrutticoli" />
              <div className="floatbox">
                <strong>CE</strong>
                <span>Reg. 1308/2013<br />Riconosciuta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modello Operativo */}
      <div className="cs-modello" ref={ref3}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow center">Il Nostro Modello</span>
            <h2 className="section-title">Come <em>operiamo</em></h2>
            <p className="section-lead">
              Un sistema integrato che mette la qualità del prodotto al centro di ogni decisione, dalla semina alla consegna.
            </p>
          </div>
          <div className="modello-grid">
            {modelloSteps.map((s) => (
              <div key={s.num} className="modello-step reveal">
                <div className="step-num">{s.num}</div>
                <span className="step-icon">{s.icon}</span>
                <h4>{s.titolo}</h4>
                <p>{s.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compagine Sociale */}
      <div className="cs-compagine" ref={ref4}>
        <div className="container">
          <div className="territorio-intro reveal">
            <span className="eyebrow center">La Compagine Sociale</span>
            <h2>21 soci. <em>1.486 ettari.</em> Una rete.</h2>
            <p>La compagine sociale di RheAura è costituita da 9 cooperative e 12 aziende agricole singole, distribuite prevalentemente in Calabria con una presenza in Campania. Insieme coprono 1.486 ettari e 282 unità produttive associate — una rete solida, radicata, in crescita continua.</p>
          </div>

          {/* 9 Cooperative */}
          <div className="compagine-group reveal">
            <div className="compagine-group-header">
              <div className="compagine-group-icon">🤝</div>
              <div>
                <div className="compagine-group-title">9 Cooperative Associate</div>
                <div className="compagine-group-sub">Strutture collettive con pluralità di soci produttori</div>
              </div>
            </div>
            <div className="coop-grid">
              {cooperative.map((c) => (
                <div key={c.nome} className="coop-card reveal">
                  <div className="coop-card-top">
                    <div className="coop-nome">{c.nome}</div>
                    <span className={`regione-badge ${c.regione === 'Campania' ? 'badge-campania' : 'badge-calabria'}`}>{c.regione}</span>
                  </div>
                  <div className="coop-meta">
                    <span>🏭 {c.az} az. associate</span>
                    <span>🌿 {c.ha} ha</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 12 Aziende Singole */}
          <div className="compagine-group reveal">
            <div className="compagine-group-header">
              <div className="compagine-group-icon" style={{ background: 'var(--g-mid)' }}>👨‍🌾</div>
              <div>
                <div className="compagine-group-title">12 Aziende Agricole Singole</div>
                <div className="compagine-group-sub">Produttori individuali diretti</div>
              </div>
            </div>
            <div className="aziende-grid">
              {aziendeAgricole.map((a) => (
                <div key={a.nome} className="azienda-card reveal">
                  <span className="azienda-icon">🌿</span>
                  <div>
                    <div className="azienda-nome">{a.nome}</div>
                    <div className="azienda-meta">{a.ha} ha · {a.regione}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Riepilogo superfici */}
          <div className="superfici-band reveal">
            {superfici.map((s, i) => (
              <div key={s.label} className={`superfici-item ${i > 0 ? 'has-border' : ''}`}>
                <div className="superfici-val">{s.val}</div>
                <div className="superfici-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
