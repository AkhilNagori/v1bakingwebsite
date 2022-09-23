import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSignal } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

import getTime from '../lib/getTime';
import Image from 'next/image';

export default function Card({ id, idTiktok, idInstagram, idYoutube, title, thumbnail, isNew, description, duration, difficulty }: any) {
  return (
    <section>
      <div className="card">
        {isNew && <div className="card--badge">NEU</div>}
        <Link href={`/rezept/${id}`}>
          <div className="card--thumbnail">
            <Image className="card--thumbnail" src={thumbnail} loading="lazy" alt={title} width="176" height="220" />
          </div>
        </Link>
        <div className="card--social">
          <a href={`https://www.tiktok.com/@nils_kathi/video/${idTiktok}/`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href={`https://www.instagram.com/p/${idInstagram}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={`https://www.youtube.com/shorts/${idYoutube}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <h2 className="card--title">
          <Link href={`/rezept/${id}`}>{title}</Link>
        </h2>
        <div className="card--info">
          {duration && (
            <span>
              <span className="primary">
                <FontAwesomeIcon icon={faClock} />
              </span>{' '}
              {getTime(duration)}
            </span>
          )}
          {difficulty && (
            <span>
              <span className="primary">
                <FontAwesomeIcon icon={faSignal} />
              </span>{' '}
              {difficulty}
            </span>
          )}
        </div>
        <p className="card--description">{description}</p>
      </div>
      <style jsx>{`
        .card {
          width: 11rem;
          font-size: 0.75rem;
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          position: relative;
          padding-bottom: 1rem;
        }

        .card--badge {
          position: absolute;
          top: 0.25rem;
          left: 0.25rem;
          background-color: var(--primary);
          color: var(--white);
          padding: 0.25rem 0.4rem;
          border-radius: 0.7rem;
          font-weight: bold;
        }

        .card--thumbnail {
          width: 100%;
          aspect-ratio: 2 / 2.5;
          text-align: center;
          border-radius: 1rem;
          pointer-events: none;
          overflow: hidden;
        }

        .card--social {
          padding: 0.5rem 0;
          display: grid;
          grid-template-columns: 1rem 1rem 1rem;
          grid-gap: 0.25rem;
          justify-content: center;
          text-align: center;
        }

        .card--likes {
          margin: 0;
          color: var(--grey-500);
        }

        .card--title {
          margin: 0.5rem 0;
          /*min-height: 2.5rem;*/
          color: var(--black);
          text-decoration: none;
          text-underline: none;
        }

        .card--info {
          color: var(--grey-500);
          display: inline-block;
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .card--info > span {
          margin-right: 0.5rem;
        }

        .card--description {
          margin: 0;
          font-size: 0.75rem;
          color: var(--grey-500);
        }
      `}</style>
    </section>
  );
}
