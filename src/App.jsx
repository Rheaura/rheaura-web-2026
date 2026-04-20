import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Valori from './pages/Valori';
import Prodotti from './pages/Prodotti';
import Certificazioni from './pages/Certificazioni';
import Contatti from './pages/Contatti';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main style={{ paddingTop: '68px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/valori" element={<Valori />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/certificazioni" element={<Certificazioni />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
