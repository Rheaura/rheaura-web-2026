import { useReveal } from '../hooks/useReveal';
import { certIntroText, certCards, processoSteps } from '../data/certificazioni';
import PageHero from '../components/shared/PageHero';
import Footer from '../components/layout/Footer';
import './Certificazioni.css';

export default function Certificazioni() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  return (
    <div>
      <PageHero
        eyebrow="Certificazioni"
        title="La qualità<br>non si dichiara,<br><em>si dimostra.</em>"
        lead="Ogni certificazione che portiamo è il risultato di audit indipendenti, controlli sistematici e standard che l'industria alimentare mondiale riconosce come riferimento assoluto. Non promesse — evidenze verificate."
        imgSrc="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&q=85"
        imgAlt="Controllo qualità agricolo"
        scrollHint="Le nostre certificazioni"
      />

      {/* Intro */}
      <div className="cert-intro" ref={ref1}>
        <div className="ci-text">
          <span className="eyebrow">Il Nostro Impegno</span>
          <h2>{certIntroText.titolo} <em>{certIntroText.titoloEm}</em></h2>
          {certIntroText.paragrafi.map((p, i) => <p key={i}>{p}</p>)}
          <div className="ci-promise">
            {certIntroText.promise.map((item) => (
              <div key={item.titolo} className="promise-item reveal">
                <span className="promise-icon">{item.icon}</span>
                <div className="promise-text">
                  <strong>{item.titolo}</strong>
                  {item.testo}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ci-visual">
          <p dangerouslySetInnerHTML={{ __html: certIntroText.visual }} />
          <div className="cert-logos">
            {certIntroText.logos.map((l) => (
              <span key={l} className="cert-logo-chip">{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Deep-dive cards */}
      <div className="cert-deep" ref={ref2}>
        <div className="container">
          <span className="eyebrow center">Nel Dettaglio</span>
          <h2 className="cert-deep-title">Le certificazioni <em>che portiamo</em></h2>
          <div className="cert-deep-grid">
            {certCards.map((c) => (
              <div key={c.id} className="cert-card reveal">
                <div className="cc-head">
                  <div className={`cc-icon ${c.iconClass}`}>{c.icon}</div>
                  <div>
                    <div className="cc-title">{c.titolo}</div>
                    <div className="cc-subtitle">{c.sottotitolo}</div>
                  </div>
                </div>
                <div className="cc-body">
                  <p className="cc-desc">{c.desc}</p>
                  <div className="cc-what">
                    <strong>Cosa garantisce: </strong>{c.cosa}
                  </div>
                  <div className="cc-who">
                    {c.chi.map((t) => <span key={t} className="who-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Processo */}
      <div className="processo" ref={ref3}>
        <div className="container">
          <h2>Il processo di <em>garanzia</em></h2>
          <p className="processo-sub">Come ogni lotto percorre la filiera RheAura prima di raggiungere il cliente.</p>
          <div className="processo-steps">
            {processoSteps.map((s) => (
              <div key={s.num} className="proc-step">
                <div className="proc-num">{s.num}</div>
                <div className="proc-title">{s.titolo}</div>
                <p className="proc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reg. CE banner */}
      <div className="reg-banner">
        <div className="rb-text">
          <h3>Riconosciuta ai sensi del <em>Reg. CE 1308/2013</em></h3>
          <p>Il riconoscimento istituzionale come Organizzazione di Produttori è la garanzia più alta che uno Stato possa conferire a un'aggregazione agricola. Non è un'autocertificazione: è un atto formale del Ministero dell'Agricoltura, verificato e rinnovabile.</p>
        </div>
        <div className="rb-badge">
          <strong>CE 1308/2013</strong>
          <span>OP Riconosciuta<br />Min. Agricoltura</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
