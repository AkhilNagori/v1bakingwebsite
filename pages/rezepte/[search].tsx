import { IResponse, IResponseStatus } from '../../interfaces/response.interface';
import HistoryBack from '../../components/HistoryBack';
import RecipeTypes from '../../components/RecipeTypes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import CardList from '../../components/CardList';
import Image from 'next/image';
import couplePic from '../../public/images/couple.webp';
import HeadSEO from '../../components/HeadSEO';

export default function Rezepte({ data, search }: { data: IResponse; search: string }) {
  return (
    <section className="recipes">
      <HeadSEO siteDescription={`Alle Suchergebnisse für die Suche ${search}`} siteTitle={`${search} Rezepte | Nils & Kathi`} />
      <HistoryBack />
      <h1 className="recipes--title">
        {search.charAt(0).toUpperCase() + search.slice(1)} Rezepte <span className="rounded">{data.data ? data.data.length : 0}</span>
      </h1>
      <RecipeTypes />
      {data.status !== IResponseStatus.success && <div className="error">{data.message}</div>}
      {data.data?.length === 0 && (
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
      )}
      {data.data && <CardList data={data.data} />}
      <style jsx>{`
        .recipes--title {
          margin-bottom: 0.2rem;
        }

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

export async function getServerSideProps(context: any) {
  const { search } = context.query;
  const res = await fetch(`${process.env.API_BASEURL}recipe?q=${search}`);
  const data: IResponse = await res.json();
  return { props: { data, search } };
}
