import './CookiePolicy.css';
import Footer from '../components/layout/Footer';

export default function CookiePolicy() {
  return (
    <>
      <div className="cp-page">
        <header className="cp-hero">
          <div className="cp-hero-inner">
            <span className="eyebrow">Informativa</span>
            <h1 className="cp-title">Cookie Policy</h1>
            <p className="cp-subtitle">
              Ultimo aggiornamento: maggio 2026
            </p>
          </div>
        </header>

        <div className="cp-content container">

          <section className="cp-section">
            <h2>Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati dagli utenti
              inviano ai loro terminali (computer, tablet, smartphone), dove vengono
              memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
              I cookie sono usati per diverse finalità: esecuzione di autenticazioni
              informatiche, monitoraggio di sessioni, memorizzazione di informazioni
              su specifiche configurazioni riguardanti gli utenti che accedono al server.
            </p>
          </section>

          <section className="cp-section">
            <h2>Tipologie di cookie utilizzati</h2>

            <div className="cp-card">
              <div className="cp-card-head">
                <h3>Cookie tecnici e funzionali</h3>
                <span className="cp-badge cp-badge--required">Sempre attivi</span>
              </div>
              <p>
                Questi cookie sono necessari per il corretto funzionamento del sito.
                Senza di essi alcune funzionalità di base, come il salvataggio delle
                preferenze sui cookie, non potrebbero operare. Non richiedono consenso
                ai sensi dell'art. 122 del D.Lgs. 196/2003.
              </p>
              <table className="cp-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Finalità</th>
                    <th>Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>rheaura_cookie_consent</code></td>
                    <td>Memorizza la preferenza sui cookie espressa dall'utente</td>
                    <td>12 mesi</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cp-card">
              <div className="cp-card-head">
                <h3>Cookie analitici</h3>
                <span className="cp-badge cp-badge--optional">Su consenso</span>
              </div>
              <p>
                Questi cookie ci consentono di contare le visite e le sorgenti di traffico
                per misurare e migliorare le prestazioni del sito. Ci aiutano a capire
                quali pagine sono più o meno popolari e vedere come i visitatori si muovono
                nel sito. Tutte le informazioni raccolte sono aggregate e quindi anonime.
                Se non autorizzi questi cookie, non sapremo quando hai visitato il sito e
                non saremo in grado di monitorarne le prestazioni.
              </p>
              <table className="cp-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Fornitore</th>
                    <th>Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>_ga</code>, <code>_ga_*</code></td>
                    <td>Google Analytics</td>
                    <td>2 anni</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="cp-section">
            <h2>Come gestire i cookie</h2>
            <p>
              Puoi modificare le tue preferenze in qualsiasi momento agendo sulle
              impostazioni del tuo browser o tramite il nostro banner al prossimo
              accesso al sito. Di seguito trovi le istruzioni per i principali browser:
            </p>
            <ul className="cp-list">
              <li>
                <strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza →
                Cookie e altri dati dei siti
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Opzioni → Privacy e sicurezza →
                Cookie e dati dei siti web
              </li>
              <li>
                <strong>Safari:</strong> Preferenze → Privacy → Gestisci dati siti web
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni
                del sito → Cookie e dati archiviati
              </li>
            </ul>
            <p>
              Tieni presente che la disabilitazione dei cookie tecnici potrebbe
              compromettere il corretto funzionamento del sito.
            </p>
          </section>

          <section className="cp-section">
            <h2>Revoca del consenso</h2>
            <p>
              Puoi revocare il consenso precedentemente prestato in qualsiasi momento.
              Per farlo, è sufficiente cancellare i cookie dal tuo browser: alla successiva
              visita il banner apparirà nuovamente e potrai effettuare una nuova scelta.
            </p>
          </section>

          <section className="cp-section">
            <h2>Titolare del trattamento</h2>
            <p>
              <strong>RheAura OP Soc. Coop. Agricola</strong><br />
              Via Capolanza, 58 — 87011 Cassano all'Ionio (CS)<br />
              E-mail: <a href="mailto:commerciale@rheaura.it" className="cp-link">commerciale@rheaura.it</a>
            </p>
            <p>
              Per ulteriori informazioni sul trattamento dei dati personali, consulta
              la nostra <a href="#" className="cp-link">Privacy Policy</a>.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
