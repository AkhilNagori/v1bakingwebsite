import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Statistics from './Statistics';
import Link from 'next/link';
import Image from 'next/image';
import mailPic from '../public/images/mail.png';

const year = new Date().getFullYear();

export default function Footer() {
  const openCookieConsent = () => {
    const element = document.getElementById('cookie-consent');
    if (element) element.style.display = 'grid';
  };

  return (
    <footer className="footer">
      <hr />
      <ul className="footer--links">
        <li>
          <Image src={mailPic} alt="Kontakt E-Mail-Adresse von Nils & Kathi" />
        </li>
        <li>
          <Link href="/impressum">Impressum</Link> - <Link href="/datenschutz">Datenschutz</Link> -{' '}
          <span
            onClick={() => {
              openCookieConsent();
            }}
          >
            Cookie Einstellungen
          </span>
        </li>
      </ul>
      <hr />
      <Statistics />
      <div className="footer--copyright">
        <small>
          Leckere Back- und Kochrezepte mit{' '}
          <span className="primary">
            <FontAwesomeIcon icon={faHeart} />
          </span>{' '}
          aus der Nähe von Stuttgart
        </small>
        <p>
          &copy; {year === 2022 ? year : `2022-${year}`} Nils & Kathi{' '}
          <a href="https://github.com/NurNils/nilskathi.de" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </div>
      <style jsx>{`
        .footer {
          padding: 0 1rem;
          color: var(--grey-900);
        }

        .footer ul {
          list-style-type: none;
          padding: 0;
        }

        .footer ul li span {
          cursor: pointer;
        }

        .footer--links {
          display: grid;
          grid-template-columns: 1fr;
          text-align: center;
          grid-gap: 0.5rem;
        }

        .footer--links-svg {
          height: 0.2rem;
          position: relative;
          top: -0.3rem;
        }

        .footer--copyright {
          text-align: center;
        }
      `}</style>
    </footer>
  );
}
