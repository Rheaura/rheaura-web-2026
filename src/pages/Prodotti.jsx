import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { categorie, stagionalita } from '../data/prodotti';
import PageHero from '../components/shared/PageHero';
import Footer from '../components/layout/Footer';
import './Prodotti.css';

const mesi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];

const kpiProdotti = [
  { val: '23,3M',   label: 'Kg Totali\nCommercializzati' },
  { val: '€ 20M',   label: 'Valore Imponibile\n2025' },
  { val: '9,1M kg', label: 'Clementine\n(1° categoria)' },
  { val: '11',      label: 'Categorie di\nProdotto' },
];

const bilancio = [
  { prodotto: '🍊 Clementine',          kg: '9.171.484',  imp: '€ 7.290.496' },
  { prodotto: '🥬 Ortaggi Vari',        kg: '7.407.593',  imp: '€ 5.268.179' },
  { prodotto: '🟠 Arance',              kg: '2.519.986',  imp: '€ 1.520.662' },
  { prodotto: '🍉 Angurie',             kg: '1.402.607',  imp: '€ 489.809' },
  { prodotto: '🍓 Fragole',             kg: '1.859.320',  imp: '€ 3.135.794' },
  { prodotto: '🍋 Limoni e Mandarini',  kg: '506.332',    imp: '€ 477.914' },
  { prodotto: '🍑 Pesche e Percoche',   kg: '231.958',    imp: '€ 150.995' },
  { prodotto: '🍈 Altra Frutta',        kg: '166.621',    imp: '€ 180.217' },
  { prodotto: '🍑 Nettarine',           kg: '70.899',     imp: '€ 56.989' },
  { prodotto: '🍇 Piccoli Frutti',      kg: '16.934',     imp: '€ 109.197' },
  { prodotto: '🌸 Albicocche',          kg: '2.741',      imp: '€ 3.979' },
];

const bars = [
  { label: '🍊 Clementine',     width: '100%', gradient: 'linear-gradient(to right,var(--g-accent),var(--g-light))', val: '9,17 M kg' },
  { label: '🥬 Ortaggi Vari',   width: '80%',  gradient: 'linear-gradient(to right,#4a7a30,#7eba6a)',              val: '7,41 M kg' },
  { label: '🟠 Arance',         width: '27%',  gradient: 'linear-gradient(to right,#c07a20,#e8a840)',              val: '2,52 M kg' },
  { label: '🍓 Fragole',        width: '20%',  gradient: 'linear-gradient(to right,#b83250,#e85a7a)',              val: '1,86 M kg' },
  { label: '🍉 Angurie',        width: '15%',  gradient: 'linear-gradient(to right,#2a7a50,#50b882)',              val: '1,40 M kg' },
  { label: '🍋 Limoni/Mandarini',width: '5.5%',gradient: 'linear-gradient(to right,#b8a820,#e8d850)',              val: '506 K kg' },
  { label: '🍑 Pesche',         width: '2.5%', gradient: 'linear-gradient(to right,#c07050,#e8a070)',              val: '232 K kg' },
];

const mensile = [
  { mese: 'Gennaio',   fragole: '102.158',   agrumi: '1.437.259', ortaggi: '346.162',  tot: '1.885.579' },
  { mese: 'Febbraio',  fragole: '202.371',   agrumi: '954.474',   ortaggi: '307.197',  tot: '1.464.043' },
  { mese: 'Marzo',     fragole: '868.264',   agrumi: '686.495',   ortaggi: '222.036',  tot: '1.776.796' },
  { mese: 'Aprile',    fragole: '493.477',   agrumi: '140.451',   ortaggi: '241.364',  tot: '875.293' },
  { mese: 'Maggio',    fragole: '814.467',   agrumi: '81.484',    ortaggi: '191.554',  tot: '1.087.505' },
  { mese: 'Giugno',    fragole: '262.923',   agrumi: '143.577',   ortaggi: '333.549',  tot: '740.050' },
  { mese: 'Luglio',    fragole: '4.180',     agrumi: '1.028.762', ortaggi: '276.958',  tot: '1.309.901' },
  { mese: 'Agosto',    fragole: '2.212',     agrumi: '625.106',   ortaggi: '393.309',  tot: '1.020.628' },
  { mese: 'Settembre', fragole: '2.781',     agrumi: '133.322',   ortaggi: '437.277',  tot: '573.381' },
  { mese: 'Ottobre',   fragole: '136.766',   agrumi: '676.920',   ortaggi: '376.089',  tot: '1.189.776' },
  { mese: 'Novembre',  fragole: '—',         agrumi: '3.533.274', ortaggi: '184.763',  tot: '3.718.037' },
  { mese: 'Dicembre',  fragole: '20.086',    agrumi: '4.208.852', ortaggi: '147.428',  tot: '4.376.366' },
];

export default function Prodotti() {
  const [activeFilter, setActiveFilter] = useState('tutti');
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  const visibili = activeFilter === 'tutti'
    ? categorie
    : categorie.filter((c) => c.id === activeFilter);

  return (
    <div>
      <PageHero
        eyebrow="Le Nostre Produzioni"
        title="23 milioni di kg.<br><em>Ogni anno.</em>"
        lead="Nel 2025 RheAura ha commercializzato 23,3 milioni di chilogrammi di prodotto fresco per un valore imponibile di quasi 20 milioni di euro. Clementine, ortaggi, arance, fragole e frutta — una filiera che copre l'anno intero."
        imgSrc="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=900&q=85"
        imgAlt="Prodotti ortofrutticoli freschi"
        scrollHint="Esplora i prodotti"
      />

      {/* KPI band */}
      <div className="numeri-band">
        <div className="numeri-grid" ref={ref1}>
          {kpiProdotti.map((n) => (
            <div key={n.val} className="numero reveal">
              <div className="numero-val">{n.val}</div>
              <div className="numero-label">{n.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bilancio 2024/2025 */}
      <div className="bilancio-section" ref={ref2}>
        <div className="container">
          <div className="bilancio-header reveal">
            <span className="eyebrow center">Bilancio 2024/2025</span>
            <h2>Totale Commercializzato <em>per Prodotto</em></h2>
            <p>Dati riferiti al bilancio 2024/2025 dell'OP RheAura — Programma Operativo 2024-2028.</p>
          </div>
          <div className="bilancio-grid reveal">
            <div>
              <table className="bilancio-table">
                <thead>
                  <tr>
                    <th className="col-prodotto">Prodotto</th>
                    <th className="col-num">Quantità (kg)</th>
                    <th className="col-num">Imponibile (€)</th>
                  </tr>
                </thead>
                <tbody>
                  {bilancio.map((r, i) => (
                    <tr key={r.prodotto} className={i % 2 === 0 ? 'row-alt' : ''}>
                      <td className="cell-prodotto">{r.prodotto}</td>
                      <td className="cell-num">{r.kg}</td>
                      <td className="cell-num">{r.imp}</td>
                    </tr>
                  ))}
                  <tr className="row-totale">
                    <td>TOTALE O.P.</td>
                    <td className="cell-num">23.356.479</td>
                    <td className="cell-num">€ 18.684.236</td>
                  </tr>
                </tbody>
              </table>
              <p className="bilancio-fonte">Fonte: Bilancio OP RheAura 2024/2025 — Programma Operativo 2024-2028</p>
            </div>
            <div>
              <div className="bars-title">Distribuzione per volume (kg)</div>
              <div className="bars-list">
                {bars.map((b) => (
                  <div key={b.label} className="bar-row">
                    <span className="bar-label">{b.label}</span>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: b.width, background: b.gradient }} />
                    </div>
                    <span className="bar-val">{b.val}</span>
                  </div>
                ))}
              </div>
              <div className="bilancio-note bilancio-note-red">
                <div className="note-title">📌 Fragole: il prodotto ad alto valore</div>
                <div>Con 1,86 milioni di kg e oltre <strong>€ 3,1 milioni</strong>, le fragole hanno il prezzo medio per kg più alto del portfolio — quasi il triplo delle clementine. Asset strategico di valore.</div>
              </div>
              <div className="bilancio-note bilancio-note-green">
                <div className="note-title">📌 Ortaggi: il volume più diversificato</div>
                <div>7,4 milioni di kg in decine di specie. La categoria che garantisce la presenza RheAura su tutti i mesi dell'anno.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Andamento mensile 2025 */}
      <div className="mensile-section" ref={ref3}>
        <div className="container">
          <div className="bilancio-header reveal">
            <span className="eyebrow center">Riepilogo Mensile Anno 2025</span>
            <h2>Come si distribuisce <em>il fatturato</em></h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table className="mensile-table">
              <thead>
                <tr>
                  <th className="col-mese">Mese</th>
                  <th>🍓 Fragole</th>
                  <th>🍊 Agrumi &amp; Frutta</th>
                  <th>🥬 Ortaggi</th>
                  <th className="col-tot">Totale €</th>
                </tr>
              </thead>
              <tbody>
                {mensile.map((r, i) => (
                  <tr key={r.mese} className={i % 2 !== 0 ? 'row-alt' : ''}>
                    <td className="cell-mese">{r.mese}</td>
                    <td className="cell-num-m">{r.fragole}</td>
                    <td className="cell-num-m">{r.agrumi}</td>
                    <td className="cell-num-m">{r.ortaggi}</td>
                    <td className="cell-tot">{r.tot}</td>
                  </tr>
                ))}
                <tr className="row-totale-m">
                  <td>TOTALI 2025</td>
                  <td className="cell-num-m">2.909.689</td>
                  <td className="cell-num-m">13.649.982</td>
                  <td className="cell-num-m">3.457.690</td>
                  <td className="cell-tot">20.017.362</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="picchi-grid reveal">
            <div className="picco-card picco-fragole">
              <div className="picco-icon">🍓</div>
              <div className="picco-title">Picco Fragole: Mar–Mag</div>
              <p>Oltre €2,1 milioni concentrati in 3 mesi. Finestra breve, alto valore unitario: la logistica rapida è il fattore critico.</p>
            </div>
            <div className="picco-card picco-agrumi">
              <div className="picco-icon">🍊</div>
              <div className="picco-title">Picco Agrumi: Nov–Dic</div>
              <p>Novembre e Dicembre da soli valgono oltre €7,7 milioni. Stoccaggio, calibratura e logistica al massimo della tensione.</p>
            </div>
            <div className="picco-card picco-ortaggi">
              <div className="picco-icon">🥬</div>
              <div className="picco-title">Ortaggi: presidio annuale</div>
              <p>Presenti ogni mese senza interruzione. Da €147K a dicembre a €437K a settembre: la categoria che non dorme mai.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="prod-filter-bar">
        <button
          className={`filter-btn ${activeFilter === 'tutti' ? 'active' : ''}`}
          onClick={() => setActiveFilter('tutti')}
        >Tutti</button>
        {categorie.map((c) => (
          <button
            key={c.id}
            className={`filter-btn ${activeFilter === c.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(c.id)}
          >
            {c.tag}
          </button>
        ))}
      </div>

      {/* Categorie */}
      {visibili.map((cat) => (
        <div key={cat.id} className={`cat-block ${cat.alt ? 'alt' : ''}`}>
          <div className={`cat-header ${cat.flip ? 'flip' : ''}`}>
            <div className="cat-h-text">
              <span className="cat-tag">{cat.tag}</span>
              <h2>
                {cat.titolo} — <em>{cat.titolEm}</em>
              </h2>
              <p className="cat-body">{cat.corpo}</p>
            </div>
            <div className="cat-h-img">
              <img src={cat.imgSrc} alt={cat.imgAlt} />
            </div>
          </div>

          <div className="varieta-grid">
            {cat.varietà.map((v) => (
              <div key={v.nome} className="varieta-card">
                <div className={`vc-top ${cat.colorTop}`}>{v.emoji}</div>
                <div className="vc-body">
                  <div className="vc-name">{v.nome}</div>
                  <p className="vc-note">{v.note}</p>
                  <span className={`badge ${v.badge}`}>{v.badgeLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Stagionalità */}
      <div className="stagionalita">
        <h2 className="stag-title">Disponibilità <em>Stagionale</em></h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="stag-table">
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Prodotto</th>
                {mesi.map((m) => <th key={m}>{m}</th>)}
              </tr>
            </thead>
            <tbody>
              {stagionalita.map((row) => (
                <tr key={row.prodotto}>
                  <td>{row.prodotto}</td>
                  {row.mesi.map((v, i) => (
                    <td key={i}>
                      <span className={`stag-dot ${v === 0 ? 'dot-off' : v === 2 ? 'dot-peak' : 'dot-on'}`} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="stag-legend">
          <span className="stag-legend-item"><span className="stag-dot dot-peak stag-dot-sm" /> Piena stagione</span>
          <span className="stag-legend-item"><span className="stag-dot dot-on stag-dot-sm" /> Disponibile</span>
          <span className="stag-legend-item"><span className="stag-dot dot-off stag-dot-sm" /> Non disponibile</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
