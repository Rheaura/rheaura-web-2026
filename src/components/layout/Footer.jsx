import { NavLink } from 'react-router-dom';
import './Footer.css';

const pagine = [
  { to: '/',               label: 'Home' },
  { to: '/chi-siamo',      label: 'Chi Siamo' },
  { to: '/valori',         label: 'I Nostri Valori' },
  { to: '/prodotti',       label: 'I Prodotti' },
  { to: '/certificazioni', label: 'Le Certificazioni' },
  { to: '/contatti',       label: 'Contatti' },
];


const prodotti = [
  'Clementine Calabria',
  'Ortaggi Vari',
  'Arance',
  'Fragole',
  'Pesche & Nettarine',
  'Piccoli Frutti',
];

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-top">
        <div className="ft-brand">
          <NavLink to="/" className="ft-logo-link">
            <img src="/rheaura_logo_neg.png" alt="RheAura OP" className="ft-logo-img" />
          </NavLink>
          <p className="ft-tagline">
            Organizzazione di Produttori ortofrutticoli a livello nazionale. Riconosciuta ai sensi del Reg. CE 1308/2013. Frutta e verdura fresca italiana — dalla terra alla tavola.
          </p>
          <p className="ft-reg">
            Sede Operativa: Via Capolanza, 58 — 87011 Cassano alla Ionio (CS)<br />
            commerciale@rheaura.it · www.rheaura.it
          </p>
        </div>

        <div className="ft-col">
          <h5>Pagine</h5>
          <ul>
            {pagine.map(({ to, label }) => (
              <li key={to}><NavLink to={to}>{label}</NavLink></li>
            ))}
          </ul>
        </div>


        <div className="ft-col">
          <h5>Prodotti</h5>
          <ul>
            {prodotti.map((p) => (
              <li key={p}><a href="/prodotti">{p}</a></li>
            ))}
          </ul>
        </div>

        <div className="ft-col">
          <h5>Seguici sui Social</h5>
          <ul>
            <li>
              <a href="https://www.facebook.com/rheaura" target="_blank" rel="noopener noreferrer" className="ft-social-link">
                <svg className="ft-social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rheaura" target="_blank" rel="noopener noreferrer" className="ft-social-link">
                <svg className="ft-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0" fill="currentColor" stroke="none"/><path d="M17.5 6.5h.01"/></svg>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-bottom">
        <p>© {new Date().getFullYear()} RheAura OP Soc. Coop. Agricola — Tutti i diritti riservati</p>
        <div className="ft-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Note Legali</a>
        </div>
      </div>
    </footer>
  );
}
