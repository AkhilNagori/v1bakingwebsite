import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

import Search from './Search';
import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../public/logo40.jpg';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav--header">
        <Link href="/">
          <div className="nav--logo">
            <Image className="nav--icon" src={logoPic} alt="Nils & Kathi Logo" layout="responsive" />
          </div>
        </Link>
        <h3 className="nav--logo_text">
          <Link href="/">Nils & Kathi</Link>
        </h3>
        <h4 className="nav--title">
          <a href="https://tiktok.com/@nils_kathi" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://instagram.com/nils_kathi" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/@nils_kathi" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </h4>
      </div>
      <Search />
      <style jsx>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: var(--white);
          -webkit-box-shadow: 0 0.3rem 0.25rem -0.25rem var(--shadow-25);
          -moz-box-shadow: 0 0.3rem 0.25rem -0.25rem var(--shadow-25);
          box-shadow: 0 0.3rem 0.25rem -0.25rem var(--shadow-25);
        }

        .nav--header {
          display: flex;
          align-items: center;
          padding: 0 1rem;
        }

        .nav--logo {
          overflow: hidden;
          height: 2rem;
          aspect-ratio: 1 / 1;
          border-radius: 100%;
        }

        .nav--icon {
          width: 2.5rem;
          border-radius: 100%;
        }

        .nav--logo_text {
          margin-left: 0.5rem;
          margin-right: auto;
          font-width: 700;
        }

        .nav--title a {
          margin-right: 0.75rem;
        }
      `}</style>
    </nav>
  );
}
