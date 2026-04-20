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

const sociList = [
  'Cons. Peperoncino Calabria',
  'Soc. Coop. San Pietro',
  'Passione di Terra',
  'Soc. Coop. Romano',
  'Soc. Coop. Turano',
  'Soc. Coop. Agridoc',
  'Soc. Coop. Komus',
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
          <h5>I Soci</h5>
          <ul>
            {sociList.map((s) => (
              <li key={s}><a href="#">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="ft-col">
          <h5>Prodotti</h5>
          <ul>
            {prodotti.map((p) => (
              <li key={p}><a href="#">{p}</a></li>
            ))}
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
