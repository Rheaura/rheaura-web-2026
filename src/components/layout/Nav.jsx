import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Nav.css';

const links = [
  { to: '/',               label: 'Home' },
  { to: '/chi-siamo',      label: 'Chi Siamo' },
  { to: '/valori',         label: 'Valori' },
  { to: '/prodotti',       label: 'Prodotti' },
  { to: '/certificazioni', label: 'Certificazioni' },
  { to: '/contatti',       label: 'Contatti' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // chiude il menu ad ogni cambio pagina
  useEffect(() => { setOpen(false); }, [location]);

  // blocca lo scroll del body quando il menu è aperto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className="main-nav">
        <NavLink to="/" className="logo">
          <img src="/rheaura_logo_neg.png" alt="RheAura OP" className="logo-img" />
        </NavLink>

        <ul className="nav-tabs">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Overlay mobile */}
      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <ul>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
