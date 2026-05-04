import './CookiePolicy.css';
import './PrivacyPolicy.css';
import Footer from '../components/layout/Footer';
import { NavLink } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      <div className="cp-page">
        <header className="cp-hero">
          <div className="cp-hero-inner">
            <span className="eyebrow">Informativa</span>
            <h1 className="cp-title">Privacy Policy</h1>
            <p className="cp-subtitle">
              Informativa ai sensi degli artt. 13–14 del Regolamento UE 2016/679 (GDPR) —
              Ultimo aggiornamento: maggio 2026
            </p>
          </div>
        </header>

        <div className="cp-content container">

          {/* 1 — Titolare */}
          <section className="cp-section">
            <h2>1. Titolare del trattamento</h2>
            <p>
              <strong>RHEAURA OP Società Cooperativa Agricola</strong><br />
              Via Capolanza, 58 — 87011 Cassano Allo Ionio (CS)<br />
              P.IVA 15462331008<br />
              Rappresentata dal Presidente del Consiglio di Amministrazione:{' '}
              <strong>Vocaturi Leonardo</strong>
            </p>
            <p>
              E-mail:{' '}
              <a href="mailto:info@rheaura.it" className="cp-link">info@rheaura.it</a>
              {' '}— Tel.{' '}
              <a href="tel:+390984000000" className="cp-link">+39 0984 000000</a>
            </p>
          </section>

          {/* 2 — Dati trattati */}
          <section className="cp-section">
            <h2>2. Dati personali trattati</h2>

            <div className="cp-card">
              <div className="cp-card-head">
                <h3>Dati di navigazione</h3>
                <span className="cp-badge cp-badge--required">Automatici</span>
              </div>
              <p>
                I sistemi informatici e le procedure software preposte al funzionamento
                di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni
                dati la cui trasmissione è implicita nell'uso dei protocolli di comunicazione
                Internet. In questa categoria rientrano gli indirizzi IP, il tipo di browser,
                il sistema operativo, il nome a dominio e gli indirizzi dei siti dai quali
                si è effettuato l'accesso, informazioni sulle pagine visitate e sull'orario
                della visita.
              </p>
              <p>
                Questi dati vengono utilizzati esclusivamente per ricavare informazioni
                statistiche anonime sull'uso del sito e per controllarne il corretto
                funzionamento. Non vengono conservati oltre il tempo strettamente necessario
                e non sono associati a utenti identificati.
              </p>
            </div>

            <div className="cp-card">
              <div className="cp-card-head">
                <h3>Dati forniti volontariamente — form di contatto</h3>
                <span className="cp-badge cp-badge--optional">Su richiesta</span>
              </div>
              <p>
                Compilando il form nella pagina Contatti, l'utente fornisce volontariamente
                i seguenti dati personali:
              </p>
              <table className="cp-table">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Obbligatorio</th>
                    <th>Finalità</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nome e cognome</td>
                    <td>Sì</td>
                    <td>Identificazione del contatto</td>
                  </tr>
                  <tr>
                    <td>Azienda</td>
                    <td>Sì</td>
                    <td>Qualificazione della richiesta commerciale</td>
                  </tr>
                  <tr>
                    <td>Indirizzo e-mail</td>
                    <td>Sì</td>
                    <td>Risposta alla richiesta</td>
                  </tr>
                  <tr>
                    <td>Numero di telefono</td>
                    <td>No</td>
                    <td>Contatto diretto, se necessario</td>
                  </tr>
                  <tr>
                    <td>Settore di interesse</td>
                    <td>Sì</td>
                    <td>Indirizzamento della richiesta al reparto competente</td>
                  </tr>
                  <tr>
                    <td>Messaggio</td>
                    <td>Sì</td>
                    <td>Descrizione della necessità commerciale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3 — Finalità e basi giuridiche */}
          <section className="cp-section">
            <h2>3. Finalità e basi giuridiche del trattamento</h2>
            <p>
              I dati personali raccolti tramite il form di contatto sono trattati per le
              seguenti finalità, con le rispettive basi giuridiche ai sensi dell'art. 6 GDPR:
            </p>
            <div className="pp-table-wrap">
              <table className="cp-table">
                <thead>
                  <tr>
                    <th>Finalità</th>
                    <th>Base giuridica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rispondere alla richiesta di contatto o di informazioni commerciali</td>
                    <td>Consenso dell'interessato (art. 6(1)(a)) e legittimo interesse del Titolare (art. 6(1)(f))</td>
                  </tr>
                  <tr>
                    <td>Gestione della relazione pre-contrattuale (offerte, listini, trattative)</td>
                    <td>Misure pre-contrattuali su richiesta dell'interessato (art. 6(1)(b))</td>
                  </tr>
                  <tr>
                    <td>Adempimento di obblighi legali e contabili</td>
                    <td>Obbligo legale (art. 6(1)(c))</td>
                  </tr>
                  <tr>
                    <td>Statistica e miglioramento del sito (cookie analitici, solo se acconsentiti)</td>
                    <td>Consenso dell'interessato (art. 6(1)(a))</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Il conferimento dei dati contrassegnati come obbligatori nel form è necessario
              per soddisfare la richiesta; il mancato conferimento rende impossibile evadere
              la stessa. Il conferimento dei dati facoltativi è libero e non pregiudica
              l'evasione della richiesta.
            </p>
          </section>

          {/* 4 — Conservazione */}
          <section className="cp-section">
            <h2>4. Periodo di conservazione</h2>
            <p>
              I dati raccolti tramite il form di contatto sono conservati per il tempo
              strettamente necessario a gestire la richiesta e, ove sia instaurata una
              relazione commerciale, per tutta la durata del rapporto contrattuale e per
              i successivi <strong>10 anni</strong> in adempimento degli obblighi civilistici
              e fiscali previsti dalla legge italiana.
            </p>
            <p>
              In assenza di rapporto contrattuale, i dati di contatto sono cancellati entro
              <strong> 24 mesi</strong> dalla ricezione dell'ultima comunicazione.
            </p>
            <p>
              I dati di navigazione tecnici sono cancellati automaticamente entro
              <strong> 7 giorni</strong> dalla raccolta.
            </p>
          </section>

          {/* 5 — Destinatari */}
          <section className="cp-section">
            <h2>5. Destinatari e comunicazione dei dati</h2>
            <p>
              I dati personali non sono ceduti a terzi né diffusi. Possono essere comunicati,
              nei limiti strettamente necessari, a:
            </p>
            <ul className="cp-list">
              <li>
                Personale interno autorizzato (commerciale, amministrativo) operante
                sotto la diretta autorità del Titolare
              </li>
              <li>
                Fornitori di servizi tecnici (hosting, e-mail, manutenzione del sito)
                che operano in qualità di Responsabili del trattamento ai sensi
                dell'art. 28 GDPR, vincolati da appositi accordi
              </li>
              <li>
                Autorità pubbliche, giudiziarie o di vigilanza, nei casi previsti
                dalla legge
              </li>
            </ul>
            <p>
              I dati non sono trasferiti verso Paesi terzi al di fuori dello Spazio
              Economico Europeo (SEE). Qualora ciò diventasse necessario in futuro,
              il Titolare adotterà le garanzie adeguate previste dagli artt. 44–49 GDPR.
            </p>
          </section>

          {/* 6 — Diritti */}
          <section className="cp-section">
            <h2>6. Diritti dell'interessato</h2>
            <p>
              In qualità di interessato, hai il diritto di esercitare in qualsiasi
              momento i seguenti diritti nei confronti del Titolare:
            </p>
            <ul className="cp-list">
              <li>
                <strong>Accesso (art. 15):</strong> ottenere conferma che sia o meno
                in corso un trattamento di dati che ti riguardano e, in caso affermativo,
                ottenerne copia
              </li>
              <li>
                <strong>Rettifica (art. 16):</strong> ottenere la correzione di dati
                inesatti o incompleti
              </li>
              <li>
                <strong>Cancellazione (art. 17):</strong> ottenere la cancellazione
                dei tuoi dati, salvo sussistano obblighi legali di conservazione
              </li>
              <li>
                <strong>Limitazione del trattamento (art. 18):</strong> ottenere la
                sospensione del trattamento nelle ipotesi previste dalla norma
              </li>
              <li>
                <strong>Portabilità (art. 20):</strong> ricevere i tuoi dati in un
                formato strutturato e leggibile da dispositivo automatico
              </li>
              <li>
                <strong>Opposizione (art. 21):</strong> opporti al trattamento
                fondato sul legittimo interesse del Titolare
              </li>
              <li>
                <strong>Revoca del consenso:</strong> revocare in qualsiasi momento
                il consenso prestato, senza pregiudicare la liceità del trattamento
                effettuato prima della revoca
              </li>
            </ul>
            <p>
              Per esercitare i tuoi diritti, invia una richiesta scritta a:{' '}
              <a href="mailto:info@rheaura.it" className="cp-link">info@rheaura.it</a>.
              Il Titolare risponderà entro <strong>30 giorni</strong> dalla ricezione.
            </p>
            <p>
              Hai inoltre il diritto di proporre reclamo al{' '}
              <strong>Garante per la protezione dei dati personali</strong> (
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="cp-link"
              >
                www.garanteprivacy.it
              </a>
              ), qualora ritieni che il trattamento dei tuoi dati violi il GDPR.
            </p>
          </section>

          {/* 7 — Cookie */}
          <section className="cp-section">
            <h2>7. Cookie</h2>
            <p>
              Il sito utilizza cookie tecnici e, previo consenso, cookie analitici.
              Per informazioni dettagliate sulle tipologie di cookie, la loro durata
              e le modalità di gestione, consulta la nostra{' '}
              <NavLink to="/cookie-policy" className="cp-link">Cookie Policy</NavLink>.
            </p>
          </section>

          {/* 8 — Modifiche */}
          <section className="cp-section">
            <h2>8. Modifiche alla presente informativa</h2>
            <p>
              Il Titolare si riserva il diritto di apportare modifiche alla presente
              informativa in qualsiasi momento, dandone idonea pubblicità agli utenti
              tramite aggiornamento della data indicata in cima alla pagina. Si invita
              pertanto a consultare periodicamente questa pagina.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
