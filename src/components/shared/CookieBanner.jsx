import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './CookieBanner.css';

const STORAGE_KEY = 'rheaura_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  function accept(type) {
    localStorage.setItem(STORAGE_KEY, type);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <div className="ck-overlay" aria-hidden="true" />
      <div className="ck-banner" role="dialog" aria-modal="true" aria-label="Consenso cookie">
        <div className="ck-inner">
          <div className="ck-text">
            <p className="ck-title">Utilizziamo i cookie</p>
            <p className="ck-body">
              Questo sito usa cookie tecnici necessari al suo funzionamento e, con il tuo consenso,
              cookie analitici per migliorare la tua esperienza. Puoi scegliere di accettare tutti
              i cookie oppure di utilizzare solo quelli funzionali.{' '}
              <NavLink to="/cookie-policy" className="ck-link">
                Cookie Policy
              </NavLink>
            </p>
          </div>
          <div className="ck-actions">
            <button
              className="ck-btn ck-btn--secondary"
              onClick={() => accept('functional')}
            >
              Solo funzionali
            </button>
            <button
              className="ck-btn ck-btn--primary"
              onClick={() => accept('all')}
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
