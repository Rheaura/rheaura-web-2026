import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { categorie, stagionalita } from '../data/prodotti';
import PageHero from '../components/shared/PageHero';
import Footer from '../components/layout/Footer';
import './Prodotti.css';

const mesi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];

const kpiProdotti = [
  { val: '6',        label: 'Gruppi di\nProdotto' },
  { val: '1.486 ha', label: 'Superficie\nColtivata' },
  { val: '12',       label: 'Mesi di\nCopertura' },
  { val: '282',      label: 'Aziende\nProduttrici' },
];


export default function Prodotti() {
  const [activeFilter, setActiveFilter] = useState('tutti');
  const ref1 = useReveal();

  const visibili = activeFilter === 'tutti'
    ? categorie
    : categorie.filter((c) => c.id === activeFilter);

  return (
    <div>
      <PageHero
        eyebrow="Le Nostre Produzioni"
        title="Dalla terra<br>alla tavola,<br><em>ogni giorno.</em>"
        lead="Clementine calabresi, arance tardive, fragole profumate, pesche della Sibaritide, ortaggi freschi tutto l'anno. RheAura porta sui mercati italiani ed europei il meglio di ciò che il Sud Italia sa coltivare — con la garanzia di certificazioni internazionali e una filiera tracciabile dalla semina alla consegna."
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
              <span className="cat-tag">{cat.catTag || cat.tag}</span>
              <h2>
                {cat.titolo} — <em>{cat.titolEm}</em>
              </h2>
              {cat.corpo.split('\n\n').map((p, i) => (
                <p key={i} className="cat-body" style={i > 0 ? { marginTop: '1rem' } : {}}>{p}</p>
              ))}
            </div>
            <div className="cat-h-img">
              <img src={cat.imgSrc} alt={cat.imgAlt} />
            </div>
          </div>

          <div className="varieta-grid">
            {cat.varietà.map((v) => (
              <div key={v.nome} className="varieta-card" style={{ borderTop: `4px solid ${cat.borderColor}` }}>
                <div className="vc-body">
                  <div className="vc-name">{v.nome}</div>
                  <p className="vc-note">{v.note}</p>
                  {v.badge && <span className={`badge ${v.badge}`}>{v.badgeLabel}</span>}
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
