import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import './Home.css';

/* ── hook: aggiunge classe "up" a tutti i .reveal dentro il ref ── */
function useRevealSection() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('up'); obs.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const el = ref.current;
    if (el) el.querySelectorAll('.reveal').forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const soci = [
  { tipo: 'coop', nome: 'Soc. Coop. Acli Talia',                  meta: 'Calabria · ~25 ha' },
  { tipo: 'coop', nome: 'Cons. Prod. Peperoncino Calabria',        meta: 'Calabria · 137 ha · 58 az.' },
  { tipo: 'coop', nome: 'Soc. Coop. San Pietro',                   meta: 'Campania · 36 ha · 17 az.' },
  { tipo: 'coop', nome: 'Soc. Coop. Passione di Terra',            meta: 'Calabria · 158 ha · 30 az.' },
  { tipo: 'coop', nome: 'Soc. Coop. Romano',                       meta: 'Calabria · 125 ha · 24 az.' },
  { tipo: 'coop', nome: 'Soc. Coop. Turano',                       meta: 'Calabria · 141 ha · 43 az.' },
  { tipo: 'coop', nome: 'Soc. Coop. Roccanatura',                  meta: 'Calabria · 26 ha · 16 az.' },
  { tipo: 'coop', nome: 'Soc. Coop. Agridoc',                      meta: 'Calabria · 286 ha · 19 az.' },
  { tipo: 'coop', nome: 'Soc. Coop. Komus',                        meta: 'Calabria · 188 ha · 41 az.' },
  { tipo: 'farm', nome: 'De Gregorio Aniello',                     meta: 'Calabria · 23 ha' },
  { tipo: 'farm', nome: 'Soc. Agricola Morrone',                   meta: 'Calabria · 34 ha' },
  { tipo: 'farm', nome: 'Az. Agr. Sammarro Massimo',               meta: 'Calabria · 26 ha' },
  { tipo: 'farm', nome: 'Az. Agr. De Risi Antonio',                meta: 'Calabria · 13 ha' },
  { tipo: 'farm', nome: 'La Camera Rosamaria',                     meta: 'Calabria · 58 ha' },
  { tipo: 'farm', nome: 'Az. Agr. I Confini di Podella',           meta: 'Calabria · 5 ha' },
  { tipo: 'farm', nome: 'Calabria Verde SRL',                      meta: 'Calabria · 10 ha' },
  { tipo: 'farm', nome: 'Devona Antonio / Devona Rocco',           meta: 'Calabria · 5 + 5 ha' },
  { tipo: 'farm', nome: 'Soc. Agr. Valle Lao',                     meta: 'Calabria · 102 ha' },
  { tipo: 'farm', nome: 'Soc. Coop. Bella Clementina',             meta: 'Calabria · 51 ha' },
  { tipo: 'farm', nome: 'Scarpone Soc. Agricola',                  meta: 'Abruzzo · 22 ha' },
];

const bars = [
  { cls: 'green-1', h: '90%', val: '668 ha',  name: 'Clementine',   pct: '44,9%' },
  { cls: 'green-2', h: '51%', val: '382 ha',  name: 'Ortaggi',      pct: '25,7%' },
  { cls: 'orange-1',h: '26%', val: '197 ha',  name: 'Pesco',        pct: '13,2%' },
  { cls: 'green-3', h: '23%', val: '174 ha',  name: 'Altri Agrumi', pct: '11,7%' },
  { cls: 'brown-1', h: '8%',  val: '65 ha',   name: 'Altra Frutta', pct: '4,4%' },
];

export default function Home() {
  const navigate = useNavigate();
  const marqueeRef = useRef(null);

  /* reveal per ogni sezione */
  const rHero       = useRevealSection();
  const rManifesto  = useRevealSection();
  const rNumeri     = useRevealSection();
  const rProdotti   = useRevealSection();
  const rSoci       = useRevealSection();
  const rTerritorio = useRevealSection();
  const rSuperfici  = useRevealSection();
  const rValori     = useRevealSection();
  const rCert       = useRevealSection();
  const rCta        = useRevealSection();

  /* bar chart animato */
  const barsRef = useRef(null);
  useEffect(() => {
    let done = false;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done) {
        done = true;
        barsRef.current?.querySelectorAll('.sup-bar-inner').forEach((bar, i) => {
          setTimeout(() => { bar.style.height = bar.dataset.height; }, i * 120);
        });
      }
    }, { threshold: 0.3 });
    if (barsRef.current) obs.observe(barsRef.current);
    return () => obs.disconnect();
  }, []);

  /* form */
  const [form, setForm]       = useState({ nome:'', cognome:'', azienda:'', email:'', prodotto:'', messaggio:'', privacy: false });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.privacy) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>

      {/* ── HERO ── */}
      <section className="hero" ref={rHero}>
        <div className="hero-bg">
          <img src="/hero_home.jpg" alt="Campi agricoli del Sud Italia" />
        </div>

        <div className="scroll-cue">
          <span>Scorri</span>
          <div className="scroll-line" />
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-eyebrow">Organizzazione di Produttori — Reg. CE 1308/2013</span>
            <h1 className="hero-title">
              <span>Una Nazione.</span>
              <strong>Un Territorio.</strong>
              <em>Una Passione.</em>
            </h1>
            <p className="hero-sub">
              RheAura commercializza le produzioni delle cooperative agricole associate del Sud Italia. 21 soci, 1.486 ettari coltivati tra Calabria e Campania, 282 aziende produttrici — una rete che lavora ogni giorno.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/chi-siamo')}>
                Scopri i Nostri Soci
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </button>
              <button className="btn btn-ghost" onClick={() => navigate('/prodotti')}>
                I Prodotti 2025
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-data-strip">
              {[['21','Soci\nDiretti'],['1.486','Ettari\nColtivati'],['282','Aziende\nAssociate'],['365','Giorni di\nProduzione']].map(([v, l]) => (
                <div className="hd-item" key={v}>
                  <div className="hd-val">{v}</div>
                  <div className="hd-label" style={{whiteSpace:'pre-line'}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="manifesto" ref={rManifesto}>
        <div className="reveal">
          <span className="eyebrow">La Nostra Essenza</span>
          <blockquote className="manifesto-quote">
            "Nata da una passione vera per la terra e l'<strong>ambiente.</strong>"
          </blockquote>
        </div>
        <div className="reveal reveal-delay-2">
          <p className="manifesto-body">
            RheAura è un'<strong>Organizzazione di Produttori ortofrutticoli</strong> riconosciuta ai sensi del Reg. CE 1308/2013. Siamo il ponte tra la passione autentica dei nostri soci agricoli e i consumatori italiani che ogni giorno scelgono frutto fresco, tracciabile e certificato.
          </p>
          <p className="manifesto-body">
            Garantiamo quotidianamente l'arrivo di frutta e ortaggi freschi sulle tavole degli italiani grazie all'integrazione di territori, competenze, cicli produttivi e stagionali. Una rete di 21 soci, 1.486 ettari coltivati e 282 aziende associate che lavora ogni giorno con passione e metodo.
          </p>
          <button className="manifesto-link" onClick={() => navigate('/chi-siamo')}>Conosci la nostra storia</button>
        </div>
      </section>

      {/* ── NUMERI ── */}
      <section className="numeri-section" ref={rNumeri}>
        <div className="numeri-header">
          <div className="reveal">
            <span className="eyebrow light">I Numeri del 2025</span>
            <h2 className="sec-title on-dark">La qualità<br /><em>si misura.</em></h2>
          </div>
          <div className="reveal reveal-delay-2">
            <p className="sec-sub" style={{color:'rgba(245,240,231,0.5)',maxWidth:'440px'}}>
              Dati dal Programma Operativo 2024-2028 e dal Progetto Esecutivo 2026. Ogni numero è verificato, auditato, certificato da terze parti indipendenti.
            </p>
          </div>
        </div>
        <div className="numeri-grid-full">
          {[
            ['21','Soci Diretti','9 coop + 12 az. agricole'],
            ['282','Unità Produttive','Aziende associate totali'],
            ['1.486 ha','Superficie Totale','Coltivata e certificata'],
            ['11','Categorie di Prodotto','Dal campo alla tavola'],
            ['365','Giorni all\'Anno','Copertura stagionale continua'],
          ].map(([v,l,s], i) => (
            <div className={`numero-box reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={v}>
              <div className="n-val">{v}</div>
              <div className="n-label">{l}</div>
              <div className="n-sub">{s}</div>
            </div>
          ))}
        </div>
        <div className="numeri-note reveal">
          Fonte: Compagine Sociale · Programma Operativo 2024-2028 · Progetto Esecutivo 2026
        </div>
      </section>

      {/* ── PRODOTTI ── */}
      <section className="prodotti-section" ref={rProdotti}>
        <div className="prodotti-header">
          <div className="reveal">
            <span className="eyebrow">Le Produzioni</span>
            <h2 className="sec-title">Dal campo<br /><em>alla tavola.</em></h2>
          </div>
          <div className="reveal reveal-delay-2">
            <p className="sec-sub">11 categorie di prodotto, dalla clementina calabrese alla fragola campana, dalle pesche estive all'arancia tardiva Lane-late di maggio. Una copertura stagionale che non si ferma mai.</p>
          </div>
        </div>
        <div className="prodotti-grid reveal">
          <div className="prod-card prod-card-featured">
            <img src="https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=85" alt="Clementine Calabria" />
            <div className="prod-arrow">↗</div>
            <div className="prod-card-body">
              <span className="prod-card-tag">🍊 Prima Categoria · Calabria</span>
              <div className="prod-card-name">Clementine<br />di Calabria</div>
              <div className="prod-card-stat">La categoria leader della nostra produzione.<br />Caffin, Spinoso, Hernandine, Comune e varietà biologiche</div>
            </div>
          </div>
          <div className="prod-card prod-card-small">
            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80" alt="Ortaggi Vari" />
            <div className="prod-arrow">↗</div>
            <div className="prod-card-body">
              <span className="prod-card-tag">🥬 Tutto l'Anno</span>
              <div className="prod-card-name">Ortaggi Vari</div>
              <div className="prod-card-stat">Disponibili tutto l'anno.<br />Peperoncini, cipolla, ortaggi vari</div>
            </div>
          </div>
          <div className="prod-card prod-card-small">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Fragole Campania" />
            <div className="prod-arrow">↗</div>
            <div className="prod-card-body">
              <span className="prod-card-tag">🍓 Alto Valore · Campania</span>
              <div className="prod-card-name">Fragole</div>
              <div className="prod-card-stat">Varietà Sabrina · Campania<br />Picco di stagione: marzo–maggio</div>
            </div>
          </div>
          <div className="prod-card prod-card-small">
            <img src="https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=600&q=80" alt="Arance Calabria" />
            <div className="prod-arrow">↗</div>
            <div className="prod-card-body">
              <span className="prod-card-tag">🟠 Inverno · Sibaritide</span>
              <div className="prod-card-name">Arance</div>
              <div className="prod-card-stat">Tarocco, Navelina, Lane-late<br />Sibaritide · ottobre–maggio</div>
            </div>
          </div>
          <div className="prod-card prod-card-small">
            <img src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&q=80" alt="Pesche Calabria" />
            <div className="prod-arrow">↗</div>
            <div className="prod-card-body">
              <span className="prod-card-tag">🍑 Estate · Sibaritide</span>
              <div className="prod-card-name">Pesche &amp;<br />Nettarine</div>
              <div className="prod-card-stat">Pescheti della Piana di Sibari<br />giugno–settembre</div>
            </div>
          </div>
        </div>
        <div className="prodotti-footer reveal">
          <p>Clementine · Ortaggi · Arance · Fragole · Pesche · Piccoli Frutti e molto altro</p>
          <button className="manifesto-link" onClick={() => navigate('/prodotti')}>Vedi tutti i prodotti</button>
        </div>
      </section>

      {/* ── SOCI ── */}
      <section className="soci-section" ref={rSoci}>
        <div className="soci-header">
          <div className="reveal">
            <span className="eyebrow">La Compagine Sociale</span>
            <h2 className="sec-title">21 soci.<br /><em>Una sola voce.</em></h2>
          </div>
          <div className="soci-header-right reveal reveal-delay-2">
            <p>La compagine sociale dell'OP RheAura è costituita da 9 cooperative e 12 aziende agricole singole. Ogni socio porta la propria identità territoriale, la propria storia, la propria eccellenza produttiva.</p>
            <button className="manifesto-link" onClick={() => navigate('/chi-siamo')}>Schede complete dei soci</button>
          </div>
        </div>
        <div className="soci-summary reveal">
          {[['9','Cooperative'],['12','Az. Singole'],['282','Az. Associate'],['1.486 ha','Sup. Investita'],['2','Regioni']].map(([v,l]) => (
            <div className="ss-item" key={l}><div className="ss-val">{v}</div><div className="ss-label">{l}</div></div>
          ))}
        </div>
        <div className="soci-list reveal">
          {soci.map((s) => (
            <div className="socio-item" key={s.nome}>
              <div className={`socio-dot ${s.tipo}`} />
              <div className="socio-info">
                <div className="socio-name">{s.nome}</div>
                <div className="socio-meta">
                  <span className={`socio-type${s.tipo === 'farm' ? ' farm-tag' : ''}`}>{s.tipo === 'coop' ? 'Cooperativa' : 'Az. Agricola'}</span>
                  <span>{s.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="soci-legend reveal">
          <div className="legend-item"><div className="legend-dot" style={{background:'var(--g-accent)'}} />Cooperativa</div>
          <div className="legend-item"><div className="legend-dot" style={{background:'var(--g-light)'}} />Azienda Agricola Singola</div>
        </div>
      </section>

      {/* ── TERRITORIO ── */}
      <section className="territorio-section" ref={rTerritorio}>
        <div className="territorio-grid">
          <div className="territorio-text reveal">
            <span className="eyebrow light">Il Territorio</span>
            <h2 className="sec-title on-dark">Radici nel<br /><em>Sud Italia.</em></h2>
            <p className="territorio-body">
              Le nostre cooperative operano prevalentemente in <strong>Calabria</strong> — dalla Valle dell'Esaro alla Piana della Sibaritide, dalla Riviera degli Agrumi alla piana di Corigliano-Rossano — e in <strong>Campania</strong>, nella fertile Piana di Caserta che i Romani chiamavano Felix.
            </p>
            <p className="territorio-body">
              Qui, dove la Magna Grecia fondò Sibari e i contadini hanno lavorato la stessa terra per millenni, RheAura costruisce ogni giorno un sistema agricolo moderno, certificato, proiettato ai mercati europei — senza dimenticare le radici.
            </p>
            <div className="territorio-pills">
              {['🌶️ Valle dell\'Esaro','🍊 Piana di Sibari','🧅 Costa degli Dei','🍓 Piana di Caserta','🍊 Corigliano-Rossano','🌿 Rocca di Neto'].map(p => (
                <span className="pill" key={p}>{p}</span>
              ))}
            </div>
          </div>
          <div className="territorio-right reveal reveal-delay-2">
            <div className="territorio-img-grid">
              <div className="t-img-cell tall">
                <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&q=80" alt="Peperoncini Calabria" />
                <span className="t-img-label">Peperoncini · Cosenza</span>
              </div>
              <div className="t-img-cell">
                <img src="https://images.unsplash.com/photo-1582819508369-4937b9c2d98f?w=600&q=80" alt="Cipolla Rossa di Tropea" />
                <span className="t-img-label">Cipolla IGP · Tropea</span>
              </div>
              <div className="t-img-cell">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Fragole Campania" />
                <span className="t-img-label">Fragole · Caserta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPERFICI ── */}
      <section className="superfici-section" ref={rSuperfici}>
        <div className="superfici-header reveal">
          <span className="eyebrow" style={{justifyContent:'center'}}>Ripartizione Superficie · 1.486 ha Totali</span>
          <h2 className="sec-title">La terra che <em>coltiviamo</em></h2>
          <p>Distribuzione degli ettari per gruppo di prodotto — Programma Operativo 2024-2028</p>
        </div>
        <div className="superfici-bars reveal" ref={barsRef}>
          {bars.map((b) => (
            <div className="sup-bar-wrap" key={b.name}>
              <div className="sup-bar-outer">
                <div className={`sup-bar-inner ${b.cls}`} style={{height: 0}} data-height={b.h} />
              </div>
              <div className="sup-val">{b.val}</div>
              <div className="sup-name">{b.name}</div>
              <div className="sup-pct">{b.pct}</div>
            </div>
          ))}
        </div>
        <div className="superfici-total reveal">
          Superficie totale investita: <strong>1.486,18 ettari</strong> · 282 aziende associate · Calabria e Campania
        </div>
      </section>

      {/* ── VALORI ── */}
      <section className="valori-section" ref={rValori}>
        <div className="valori-intro">
          <div className="valori-quote reveal">
            "Cultura dell'<strong>innovazione</strong> per aumentare produttività e qualità — in modo <strong>sostenibile</strong> e <strong>inclusivo.</strong>"
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">I Nostri Valori</span>
            <h2 className="sec-title" style={{marginBottom:'1rem'}}>Non solo cosa,<br /><em>ma perché.</em></h2>
            <p className="sec-sub">Sei principi che guidano ogni decisione: dalla scelta varietale alla trattativa commerciale, dalla certificazione all'apertura di nuovi mercati.</p>
            <button className="manifesto-link" style={{marginTop:'1.5rem',display:'inline-flex'}} onClick={() => navigate('/valori')}>Leggi il manifesto</button>
          </div>
        </div>
        <div className="valori-grid-home">
          {[
            ['01','🏆','Qualità','Sicurezza alimentare, tracciabilità completa e certificazioni internazionali. La qualità non è un bollino — è la nostra ragione di esistere.',''],
            ['02','❤️','Passione','Amore per la terra, per le stagioni, per i sapori autentici. La passione dei nostri soci è l\'energia che muove tutta la rete RheAura.','reveal-delay-1'],
            ['03','🌿','Visione','Un\'agricoltura sostenibile a lungo termine che preserva l\'equilibrio ecologico e costruisce un settore competitivo per le prossime generazioni.','reveal-delay-2'],
            ['04','♟️','Strategia','Innovazione intelligente basata sulla conoscenza, sostenibile per l\'ambiente, inclusiva per l\'occupazione e la coesione delle comunità rurali.',''],
            ['05','💬','Comunicazione','Trasparenza radicale come fondamento della fiducia. Le competenze di ogni produttore diventano patrimonio condiviso dell\'intera organizzazione.','reveal-delay-1'],
            ['06','🤝','Opportunità','Massima attenzione ai mercati nuovi. La rete RheAura apre porte che ogni singola cooperativa, da sola, non potrebbe mai raggiungere.','reveal-delay-2'],
          ].map(([n, icon, title, body, delay]) => (
            <div className={`valore-home reveal${delay ? ' ' + delay : ''}`} key={n}>
              <span className="v-num">{n}</span>
              <div className="v-icon">{icon}</div>
              <div className="v-title">{title}</div>
              <p className="v-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CERT STRIP ── */}
      <div className="cert-strip-section" ref={rCert}>
        <div className="cert-strip-inner reveal">
          <span className="cert-strip-label">Certificazioni</span>
          <div className="cert-strip-divider" />
          <div className="cert-items">
            {[['GlobalG.A.P.', true],['IFS Food', true],['ISO/IEC 17065', false],['ICEA Biologico', false],['Reg. CE 1308/2013', false]].map(([c, feat]) => (
              <span className={`cert-chip${feat ? ' featured' : ''}`} key={c}>{c}</span>
            ))}
          </div>
          <div className="cert-strip-right">
            <button className="cert-link" onClick={() => navigate('/certificazioni')}>Approfondisci →</button>
          </div>
        </div>
      </div>

      {/* ── CONTATTI CTA ── */}
      <section className="cta-section" id="contatti" ref={rCta}>
        <div className="cta-left reveal">
          <span className="eyebrow">Contatti</span>
          <h2 className="sec-title">Parliamo di<br /><em>prodotti.</em></h2>
          <p className="cta-body">
            Sei un buyer della GDO, un importatore europeo o un distributore alla ricerca di un partner affidabile? RheAura offre <strong>copertura stagionale completa</strong>, certificazioni internazionali e la flessibilità di una rete distribuita su due regioni.
          </p>
          <div className="cta-contacts">
            <div className="cta-contact-row">
              <div className="cta-contact-icon">📍</div>
              <div>
                <div className="cta-contact-label">Sede Operativa</div>
                <div className="cta-contact-value">Via Capolanza, 58 — 87011 Cassano alla Ionio (CS)</div>
              </div>
            </div>
            <div className="cta-contact-row">
              <div className="cta-contact-icon">✉️</div>
              <div>
                <div className="cta-contact-label">Email</div>
                <div className="cta-contact-value"><a href="mailto:commerciale@rheaura.it">commerciale@rheaura.it</a></div>
              </div>
            </div>
            <div className="cta-contact-row">
              <div className="cta-contact-icon">🌐</div>
              <div>
                <div className="cta-contact-label">Sito Web</div>
                <div className="cta-contact-value"><a href="http://www.rheaura.it" target="_blank" rel="noreferrer">www.rheaura.it</a></div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-right reveal reveal-delay-2">
          <div className="cta-form-title">Richiedi Informazioni</div>
          <div className="cta-form-sub">Compila il form — ti risponderemo entro 24 ore lavorative.</div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-g">
                <label>Nome</label>
                <input name="nome" type="text" placeholder="Mario" value={form.nome} onChange={handleChange} required />
              </div>
              <div className="form-g">
                <label>Cognome</label>
                <input name="cognome" type="text" placeholder="Rossi" value={form.cognome} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-g">
              <label>Azienda</label>
              <input name="azienda" type="text" placeholder="Nome dell'azienda" value={form.azienda} onChange={handleChange} />
            </div>
            <div className="form-g">
              <label>Email</label>
              <input name="email" type="email" placeholder="nome@azienda.it" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-g">
              <label>Interesse Principale</label>
              <select name="prodotto" value={form.prodotto} onChange={handleChange}>
                <option value="">Seleziona un prodotto…</option>
                <option>Clementine di Calabria</option>
                <option>Ortaggi Vari</option>
                <option>Arance</option>
                <option>Fragole</option>
                <option>Pesche &amp; Nettarine</option>
                <option>Tutta l'offerta RheAura</option>
              </select>
            </div>
            <div className="form-g">
              <label>Messaggio</label>
              <textarea name="messaggio" rows="3" placeholder="Descrivi la tua esigenza, i volumi indicativi e il mercato di destinazione…" value={form.messaggio} onChange={handleChange} />
            </div>
            <div className="form-g form-privacy">
              <label className="privacy-label">
                <input name="privacy" type="checkbox" checked={form.privacy} onChange={handleChange} required />
                <span>Ho letto e accetto la <a href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> ai sensi del Reg. UE 2016/679 (GDPR).</span>
              </label>
            </div>
            <button className={`form-submit${submitted ? ' sent' : ''}`} type="submit" disabled={!form.privacy}>
              {submitted ? 'Messaggio Inviato ✓' : 'Invia Richiesta →'}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
