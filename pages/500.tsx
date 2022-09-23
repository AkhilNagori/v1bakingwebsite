import Image from 'next/image';
import couplePic from '../public/images/couple.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

export default function Custom500() {
  return (
    <section>
      <h1>Error 500: Internal Server error.</h1>
      <div className="recipes--empty">
        <Image className="recipes--empty-image" src={couplePic} alt="Nils & Kathi beim Kochen" layout="responsive" />
        <p className="recipes--empty-title">Leider haben wir nichts Passendes gefunden</p>
        <p className="recipes--empty-text">
          Versuche es doch mit einer <strong>anderen Suche</strong> oder schreibe uns <strong>dein</strong> Wunschgericht in die Kommentare{' '}
          <span className="primary">
            <FontAwesomeIcon icon={faSmile} />
          </span>
        </p>
      </div>
      <style jsx>{`
        .recipes--empty {
          text-align: center;
          border-radius: 1rem;
          box-shadow: 0 0.25rem 0.5rem var(--shadow-25);
          padding: 1rem 2rem;
          margin: 0.5rem 0;
        }

        .recipes--empty svg {
          color: var(--primary);
        }

        .recipes--empty-image {
          width: 100%;
          max-width: 20rem;
        }

        .recipes--empty-title {
          color: var(--primary);
          font-weight: bold;
          font-size: 1rem;
        }

        .recipes--empty-text {
        }
      `}</style>
    </section>
  );
}
