import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import ScrollToTop from './components/layout/ScrollToTop';
import CookieBanner from './components/shared/CookieBanner';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Valori from './pages/Valori';
import Prodotti from './pages/Prodotti';
import Certificazioni from './pages/Certificazioni';
import Contatti from './pages/Contatti';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <CookieBanner />
      <main style={{ paddingTop: '68px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/valori" element={<Valori />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/certificazioni" element={<Certificazioni />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
