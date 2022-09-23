import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';

// Google Analytics
import TagManager from 'react-gtm-module';
const tagManagerArgs = { gtmId: 'G-D4FQ95385N' };

// NilsKathi Cookie
const CookieNilsKathi = 'nilskathi-cookie';

export default function CookieConsent() {
  const cookieConsent = useRef<any>(null);
  const [showAll, setShowAll] = useState(false);
  const [settings, setSettings] = useState({
    essential: true,
    statistic: false,
    statisticGoogleAnalytics: false,
    marketing: false,
    marketingGoogleAds: false,
    extern: false,
  });

  useEffect(() => {
    const cookie = document.cookie.split(';').find((c) => c.includes(CookieNilsKathi));
    if (cookie) {
      const value = JSON.parse(cookie.split('=')[1]);
      setSettings(value);
      checkCookies(value);
    } else {
      cookieConsent.current.style.display = 'grid';
    }
  }, []);

  const acceptAll = () => {
    const allSettings = {
      essential: true,
      statistic: true,
      statisticGoogleAnalytics: true,
      marketing: true,
      marketingGoogleAds: true,
      extern: true,
    };
    setSettings(allSettings);
    acceptSelection(allSettings);
  };

  const acceptSelection = (value = settings) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = `${CookieNilsKathi}=${JSON.stringify(value)}; expires=${date.toUTCString()}; path=/;`;
    setTimeout(() => {
      cookieConsent.current.style.display = 'none';
    }, 200);
    checkCookies(value);
  };

  const checkCookies = (value: any) => {
    // Google Analytics
    if (value.statisticGoogleAnalytics === true) {
      TagManager.initialize(tagManagerArgs);
    } else {
      document.cookie = `_ga=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
      document.cookie = `_ga_D4FQ95385N=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    }

    // TODO: Google Ads
    if (value.marketingGoogleAds === true) {
    } else {
    }
  };

  return (
    <section id="cookie-consent" ref={cookieConsent} className="cookie-consent">
      <div className="cookie-consent--content">
        <h2>Wir verwenden Cookies (Cookie Einstellungen)</h2>
        <div className={showAll ? 'cookie-consent--description-active' : 'cookie-consent--description'}>
          <div className="cookie-consent--text">
            <p>Wir benötigen Ihre Zustimmung, bevor Sie unsere Website weiter besuchen können.</p>
            <p>
              Wenn Sie unter 16 Jahre alt sind und Ihre Zustimmung zu freiwilligen Diensten geben möchten, müssen Sie Ihre Erziehungsberechtigten um
              Erlaubnis bitten.
            </p>
            <p>
              Wir verwenden Cookies und andere Technologien auf unserer Webseite. Einige von ihnen sind essenziell, während andere uns helfen, diese
              Webseite und Ihre Erfahrung zu verbessern. Personenbezogene Daten können verarbeitet werden (z. B. IP-Adressen), z. B. für
              personalisierte Anzeigen und Inhalte oder Anzeigen- und Inhaltsmessung. Weitere Informationen über die Verwendung Ihrer Daten finden Sie
              in unserer <Link href="/datenschutz">Datenschutzerklärung</Link>. Sie können Ihre Auswahl jederzeit unter Einstellungen widerrufen oder
              anpassen:
            </p>
            <button
              className="primary"
              onClick={() => {
                setShowAll(!showAll);
              }}
            >
              Individuelle Cookie-Einstellungen {showAll ? 'verbergen' : 'öffnen'}
            </button>
            <hr />
            <small>
              Einige Services verarbeiten personenbezogene Daten in den USA. Indem du der Nutzung dieser Services zustimmst, erklärst du dich auch mit
              der Verarbeitung deiner Daten in den USA gemäß Art. 49 (1) lit. a DSGVO einverstanden. Die USA werden vom EuGH als ein Land mit einem
              unzureichenden Datenschutz-Niveau nach EU-Standards angesehen. Insbesondere besteht das Risiko, dass deine Daten von US-Behörden zu
              Kontroll- und Überwachungszwecken verarbeitet werden – unter Umständen ohne die Möglichkeit eines Rechtsbehelfs. Folgende Dienste
              erheben personenbezogene Daten in den USA: Du bist unter 16 Jahre alt? Dann kannst du nicht in optionale Services einwilligen. Du kannst
              deine Eltern oder Erziehungsberechtigten bitten, mit dir in diese Services einzuwilligen.
            </small>
          </div>
          <div className="cookie-consent--actions">
            <form>
              <div>
                <label>
                  <input
                    disabled
                    type="checkbox"
                    checked={settings.essential}
                    name="essential"
                    onChange={(e) => setSettings({ ...settings, essential: e.target.checked })}
                  />{' '}
                  Essenziell (1)
                </label>
                <p>Essenzielle Cookies ermöglichen grundlegende Funktionen und sind für die einwandfreie Funktion der Website erforderlich.</p>
                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>NilsKathi Cookie</td>
                    </tr>
                    <tr>
                      <th>Anbieter</th>
                      <td>
                        Eigentümer dieser Website, <Link href="/impressum">Impressum</Link>
                      </td>
                    </tr>
                    <tr>
                      <th>Zweck</th>
                      <td>Speichert die Einstellungen der Besucher, die in der Cookie Box ausgewählt wurden.</td>
                    </tr>
                    <tr>
                      <th>Cookie-Name</th>
                      <td>{CookieNilsKathi}</td>
                    </tr>
                    <tr>
                      <th>Cookie Laufzeit</th>
                      <td>1 Jahr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={settings.statistic}
                    name="statistic"
                    onChange={(e) => setSettings({ ...settings, statistic: e.target.checked, statisticGoogleAnalytics: e.target.checked })}
                  />{' '}
                  Statistik (1)
                </label>
                <p>
                  Statistik Cookies erfassen Informationen anonym. Diese Informationen helfen uns zu verstehen, wie unsere Besucher unsere Website
                  nutzen.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <th>Akzeptieren</th>
                      <td>
                        <input
                          type="checkbox"
                          checked={settings.statisticGoogleAnalytics}
                          name="googleanalytics"
                          onChange={(e) => setSettings({ ...settings, statisticGoogleAnalytics: e.target.checked })}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>Google Analytics</td>
                    </tr>
                    <tr>
                      <th>Anbieter</th>
                      <td>Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland</td>
                    </tr>
                    <tr>
                      <th>Zweck</th>
                      <td>Cookie von Google für Website-Analysen. Erzeugt statistische Daten darüber, wie der Besucher die Website nutzt.</td>
                    </tr>
                    <tr>
                      <th>Datenschutz</th>
                      <td>https://policies.google.com/privacy?hl=de</td>
                    </tr>
                    <tr>
                      <th>Cookie-Name</th>
                      <td>_ga, _ga_D4FQ95385N,_gat,_gid</td>
                    </tr>
                    <tr>
                      <th>Cookie Laufzeit</th>
                      <td>13 Monate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={settings.marketing}
                    name="marketing"
                    onChange={(e) => setSettings({ ...settings, marketing: e.target.checked, marketingGoogleAds: e.target.checked })}
                  />{' '}
                  Marketing (1)
                </label>
                <p>
                  Marketing Cookies werden von Drittanbietern oder Publishern verwendet, um personalisierte Werbung anzuzeigen. Sie tun dies, indem
                  sie Besucher über Websites hinweg verfolgen.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <th>Akzeptieren</th>
                      <td>
                        <input
                          type="checkbox"
                          checked={settings.marketingGoogleAds}
                          name="googleads"
                          onChange={(e) => setSettings({ ...settings, marketingGoogleAds: e.target.checked })}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>Google Ads</td>
                    </tr>
                    <tr>
                      <th>Anbieter</th>
                      <td>Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland</td>
                    </tr>
                    <tr>
                      <th>Zweck</th>
                      <td>Cookie von Google, das für das Conversion-Tracking von Google Ads verwendet wird.</td>
                    </tr>
                    <tr>
                      <th>Datenschutz</th>
                      <td>https://policies.google.com/privacy?hl=de</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={settings.extern}
                    name="functional"
                    onChange={(e) => setSettings({ ...settings, extern: e.target.checked })}
                  />{' '}
                  Externe Medien (0)
                </label>
                <p>
                  Inhalte von Videoplattformen und Social Media Plattformen werden standardmäßig blockiert. Wenn Cookies von externen Medien
                  akzeptiert werden, bedarf der Zugriff auf diese Inhalte keiner manuellen Zustimmung mehr.
                </p>
              </div>
            </form>
            <br />
          </div>
        </div>
        <div className="cookie-consent--buttons">
          <button
            className="flat"
            onClick={() => {
              acceptSelection();
            }}
          >
            Auswahl speichern
          </button>
          <button
            className="flat primary"
            onClick={() => {
              acceptAll();
            }}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
      <style jsx>{`
        .cookie-consent {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          z-index: 1000;
          background-color: var(--shadow-25);
        }

        .cookie-consent--content {
          display: grid;
          margin: auto;
          max-width: 50rem;
          padding: 1rem;
          width: 90%;
          font-size: 0.75rem;
          background-color: var(--white);
          -webkit-box-shadow: 0 0 1.25rem 0.5rem var(--shadow-25);
          -moz-box-shadow: 0 0 1.25rem 0.5rem var(--shadow-25);
          box-shadow: 0 0 1.25rem 0.5rem var(--shadow-25);
        }

        .cookie-consent--description {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
          max-height: 20rem;
          overflow-y: scroll;
        }

        .cookie-consent--description table {
          display: none;
        }

        .cookie-consent--description-active {
          display: grid;
          grid-template-columns: 100%;
          max-height: 20rem;
          overflow-y: scroll;
        }

        .cookie-consent--description-active table {
          max-width: none;
        }

        .cookie-consent--description-active .cookie-consent--actions div {
          margin: 0.5rem 0;
          border: 0.0625rem solid var(--grey-300);
          padding: 1rem;
        }

        .cookie-consent--buttons {
          display: grid;
          grid-gap: 0.5rem;
          grid-template-columns: 1fr 1fr;
        }

        .cookie-consent--buttons button {
          margin: 0;
        }

        @media screen and (max-width: 50rem) {
          .cookie-consent--description {
            grid-template-columns: 100%;
          }

          .cookie-consent--buttons {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
