import { useReveal } from '../hooks/useReveal';
import { manifesto, valori, pilastri, sostCards } from '../data/valori';
import PageHero from '../components/shared/PageHero';
import Footer from '../components/layout/Footer';
import './Valori.css';

export default function Valori() {
  const ref1 = useReveal();
  const ref2 = useReveal();

  return (
    <div>
      <PageHero
        eyebrow="I Nostri Valori"
        title="Non solo cosa,<br>ma <em>perché.</em>"
        lead="Sei principi fondamentali guidano ogni decisione che prendiamo, ogni relazione che costruiamo, ogni campo che coltiviamo. Non sono slogan — sono la nostra bussola quotidiana."
        imgSrc="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=900&q=85"
        imgAlt="Mani di agricoltore con prodotti"
        scrollHint=""
      />

      {/* Manifesto */}
      <div className="valori-manifesto">
        <div className="valori-manifesto-quote">"</div>
        <p className="manifesto-text" dangerouslySetInnerHTML={{ __html: manifesto }} />
        <div className="manifesto-firma">— La Filosofia di RheAura OP</div>
      </div>

      {/* Valori full */}
      {valori.map((v) => (
        <div
          key={v.id}
          className={`valore-full ${v.reverse ? 'reverse' : ''} ${v.altBg ? 'alt-bg' : ''}`}
        >
          <div className="vf-text">
            <span className="vf-label">{v.label}</span>
            <h2 className="vf-title" dangerouslySetInnerHTML={{ __html: v.titolo }} />
            {v.body.map((p, i) => (
              <p key={i} className="vf-body" dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <ul className="vf-list">
              {v.lista.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="vf-visual">
            <div className="vf-img-box">
              <img src={v.imgSrc} alt={v.imgAlt} />
            </div>
            <div className="vf-accent-box">{v.accentBox}</div>
          </div>
        </div>
      ))}

      {/* Pilastri */}
      <div className="pilastri-section" ref={ref1}>
        <div className="pilastri-header">
          <span className="eyebrow center light">Tutti i Pilastri</span>
          <h2>I sei valori che <em>ci definiscono</em></h2>
        </div>
        <div className="pilastri-track">
          {pilastri.map((p) => (
            <div key={p.nome} className="pilastro reveal">
              <div className="pilastro-icon">{p.icon}</div>
              <div className="pilastro-name">{p.nome}</div>
              <p className="pilastro-mini">{p.mini}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sostenibilità */}
      <div className="sostenibilita" ref={ref2}>
        <div className="sost-left">
          <span className="eyebrow">Sostenibilità</span>
          <h2>Un'agricoltura <em>che rispetta</em> ciò che coltiva</h2>
          <p>La sostenibilità non è un plus comunicativo — è un vincolo di sopravvivenza. Un suolo impoverito non produce. Un'acqua inquinata non nutre. Una comunità rurale svuotata non lavora. Ecco perché la sostenibilità è al centro della nostra strategia operativa.</p>
        </div>
        <div className="sost-right">
          {sostCards.map((c) => (
            <div key={c.titolo} className="sost-card reveal">
              <div className="sost-card-icon">{c.icon}</div>
              <h4>{c.titolo}</h4>
              <p>{c.testo}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
