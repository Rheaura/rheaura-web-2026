import { useState } from 'react';
import { contattiInfo, formFields } from '../data/contatti';
import Footer from '../components/layout/Footer';
import './Contatti.css';

export default function Contatti() {
  const [formData, setFormData] = useState({});
  const [privacy, setPrivacy] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui si integrerà l'invio reale (API, EmailJS, ecc.)
    setSent(true);
  };

  return (
    <div>
      {/* Hero semplificato */}
      <div className="contatti-hero">
        <div className="contatti-hero-inner">
          <span className="eyebrow">Contatti</span>
          <h1 className="contatti-title">
            {contattiInfo.titolo} <em>{contattiInfo.titoloEm}</em>
          </h1>
          <p className="contatti-lead">{contattiInfo.intro}</p>
        </div>
      </div>

      {/* Contenuto */}
      <div className="contatti-body">
        <div className="contatti-grid">

          {/* Info */}
          <div className="contatti-info">
            <h3>Dove siamo</h3>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span>{contattiInfo.indirizzo}</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <a href={`mailto:${contattiInfo.email}`}>{contattiInfo.email}</a>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <a href={`tel:${contattiInfo.telefono}`}>{contattiInfo.telefono}</a>
            </div>
            <div className="info-item">
              <span className="info-icon">🏛️</span>
              <span>{contattiInfo.piva}</span>
            </div>

            <div className="info-box">
              <h4>Siamo un'Organizzazione di Produttori</h4>
              <p>Operiamo principalmente con buyer GDO, importatori europei e operatori del settore ortofrutticolo professionale. Per ordini di prodotti certificati o richieste di listino, utilizza il form.</p>
            </div>
          </div>

          {/* Form */}
          <div className="contatti-form-wrap">
            {sent ? (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h3>Messaggio inviato!</h3>
                <p>Ti risponderemo entro 24 ore lavorative. Grazie per averci contattato.</p>
              </div>
            ) : (
              <form className="contatti-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  {formFields.map((field) => (
                    <div
                      key={field.id}
                      className={`form-group ${field.col === 'full' ? 'full' : ''}`}
                    >
                      <label htmlFor={field.id}>{field.label}{field.required && ' *'}</label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.id}
                          rows={5}
                          required={field.required}
                          onChange={handleChange}
                        />
                      ) : field.type === 'select' ? (
                        <select id={field.id} required={field.required} onChange={handleChange}>
                          <option value="">— Seleziona —</option>
                          {field.options.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          id={field.id}
                          required={field.required}
                          onChange={handleChange}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <label className="privacy-check">
                  <input
                    type="checkbox"
                    checked={privacy}
                    onChange={(e) => setPrivacy(e.target.checked)}
                    required
                  />
                  <span>
                    Ho letto e acconsento al trattamento dei miei dati personali ai sensi del{' '}
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">Regolamento UE 679/2016 (GDPR)</a>.
                  </span>
                </label>
                <button type="submit" className="btn-primary form-submit">
                  Invia messaggio →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
