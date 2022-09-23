import { useEffect, useState } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import { IResponse, IResponseStatus } from '../../interfaces/response.interface';
import getTime from '../../lib/getTime';
import HistoryBack from '../../components/HistoryBack';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSignal, faCalendar, faSubtract, faAdd, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Ingredient } from '../../interfaces/ingredient.interface';
import Image from 'next/image';
import HeadSEO from '../../components/HeadSEO';

export default function Rezept({ data }: any) {
  const [portions, setPortions] = useState(1);

  useEffect(() => {
    if (data && data.data) {
      setPortions(data.data.portions);
    }
  }, [data]);

  const subtractPortions = () => {
    const newValue = portions - 1;
    if (newValue > 0) {
      setPortions(newValue);
    }
  };

  const addPortions = () => {
    setPortions(portions + 1);
  };

  const getAmountFormatted = (amount: number) => {
    let format = ((amount / data.data.portions) * portions).toFixed(2).replace('.00', '');
    format = format.replace('.50', ' ½');
    format = format.replace('.33', ' ⅓');
    format = format.replace('.67', ' ⅔');
    format = format.replace('.25', ' ¼');
    format = format.replace('.75', ' ¾');
    format = format.replace('0 ', '');
    return format;
  };

  return (
    <section className="recipe">
      <HistoryBack />
      {data.status !== IResponseStatus.success && <div className="error">{data.message}</div>}
      {data.data && (
        <article>
          <HeadSEO siteDescription={data.data.description} siteTitle={`${data.data.title} | Nils & Kathi`} />
          <h2 className="recipe--title">{data.data.title}</h2>
          <p className="recipe--author">
            <small>Rezept von {data.data.author}</small>
          </p>
          <p className="recipe--description">{data.data.description}</p>
          <figure className="recipe--figure">
            <Image alt={data.data.title} src={`/images/thumbnails/thumbnail-${data.data.id}-min.jpg`} fill={true} />
            <figcaption>{data.data.title}</figcaption>
          </figure>
          <div className="recipe--overview">
            <div className="recipe--badges">
              <span>
                <span className="primary">
                  <FontAwesomeIcon icon={faClock} />
                </span>{' '}
                {getTime(data.data.durationCook + data.data.durationWork)}
              </span>
              <span>
                <span className="primary">
                  <FontAwesomeIcon icon={faSignal} />
                </span>{' '}
                {data.data.difficulty}
              </span>
              <span>
                <span className="primary">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>{' '}
                {new Date(data.data.date).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
              </span>
            </div>
            <ul className="recipe--actions">
              <li>
                <a href={`https://www.tiktok.com/@nils_kathi/video/${data.data.idTiktok}/`} target="_blank" rel="noreferrer">
                  <button className="flat">
                    <FontAwesomeIcon icon={faTiktok} />
                  </button>
                </a>
              </li>
              <li>
                <a href={`https://www.instagram.com/p/${data.data.idInstagram}`} target="_blank" rel="noreferrer">
                  <button className="flat">
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                </a>
              </li>
              <li>
                <a href={`https://www.youtube.com/shorts/${data.data.idYoutube}`} target="_blank" rel="noreferrer">
                  <button className="flat">
                    <FontAwesomeIcon icon={faYoutube} />
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <h3>
            Zutaten für{' '}
            <button
              onClick={() => {
                subtractPortions();
              }}
            >
              <FontAwesomeIcon icon={faSubtract} />
            </button>
            {portions}
            <button
              onClick={() => {
                addPortions();
              }}
            >
              <FontAwesomeIcon icon={faAdd} />
            </button>{' '}
            {portions === 1 ? 'Portion' : 'Portionen'}:
          </h3>
          <table>
            <tbody>
              {data.data.ingredients.map((i: Ingredient) => (
                <tr key={i.name}>
                  <td>{i.amount && i.amount > 0 ? `${getAmountFormatted(i.amount)} ${i.type ?? ''}` : ''}</td>
                  {i.ref && (
                    <td>
                      <a href={i.ref} target="_blank" rel="noreferrer">
                        {i.name}* <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    </td>
                  )}
                  {i.to && (
                    <td>
                      <Link href={i.to}>
                        {i.name} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </Link>
                    </td>
                  )}
                  {!i.ref && !i.to && <td>{i.name}</td>}
                </tr>
              ))}
            </tbody>
          </table>
          {data.data.ingredients.filter((i: Ingredient) => i.ref).length > 0 && (
            <p>
              <small>
                Die mit Sternchen (*) gekennzeichneten Links sind sogenannte Affiliate-Links. Wenn du auf so einen Affiliate-Link klickst und über
                diesen Link einkaufst, bekommen wir von dem betreffenden Online-Shop oder Anbieter eine Provision. Für dich verändert sich der Preis
                nicht.
              </small>
            </p>
          )}
          <h3>Zubereitung:</h3>
          <div className="recipe--durations">
            <div>
              <FontAwesomeIcon icon={faClock} /> Arbeitszeit ca. {getTime(data.data.durationWork)}
            </div>
            {data.data.durationCook > 0 && (
              <div>
                <FontAwesomeIcon icon={faClock} /> Koch-/Backzeit ca. {getTime(data.data.durationCook)}
              </div>
            )}
            <div>
              <FontAwesomeIcon icon={faClock} /> Gesamtzeit ca. {getTime(data.data.durationCook + data.data.durationWork)}
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.data.content }}></div>
        </article>
      )}
      <style jsx>{`
        .recipe table a {
          color: var(--primary);
        }

        .recipe a:hover {
          text-decoration: underline;
        }

        .recipe--title {
          margin-bottom: 0;
        }

        .recipe--author {
          margin-top: 0;
        }

        .recipe--figure {
          position: relative;
          overflow: hidden;
          margin: 0 0 0.5rem 0;
          width: 100%;
          aspect-ratio: 3 / 2;
          border-radius: 1rem;
        }

        .recipe--figure figcaption {
          height: 0;
          visibility: hidden;
        }

        .recipe--thumbnail {
          width: 100%;
          border-radius: 1rem;
        }

        .recipe--overview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-content: center;
          align-items: center;
          grid-gap: 1rem;
          margin-top: 0.2rem;
        }

        .recipe--actions {
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: right;
        }

        .recipe--actions li {
          display: inline;
          margin-left: 0.5rem;
        }

        .recipe--actions li button {
        }

        .recipe--badges {
          color: var(--grey-500);
          display: inline-block;
          font-size: 0.75rem;
        }

        .recipe--badges > span {
          margin-right: 0.5rem;
        }

        .recipe--badges svg {
          color: var(--primary);
        }

        .recipe--durations {
          margin-bottom: 1rem;
        }

        .recipe--durations div {
          display: inline-block;
          background-color: var(--grey-300);
          padding: 0.1rem 0.5rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          margin: 0.1rem;
          color: var(--grey-900);
        }

        .recipe--durations div {
          color: var(--primary);
        }

        @media screen and (max-width: 50rem) {
          .recipe--overview {
            grid-template-columns: 1fr;
          }
          .recipe--actions {
            text-align: left;
          }

          .recipe--actions li {
            margin-left: 0;
            margin-right: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const res = await fetch(`${process.env.API_BASEURL}recipe/${id}`);
  const data: IResponse = await res.json();
  return { props: { data } };
}
