import CardList from './CardList';
import FadeInSection from './FadeInSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCookieBite, faMartiniGlass, faUtensils } from '@fortawesome/free-solid-svg-icons';
import RecipeTypes from './RecipeTypes';
import Hero from './Hero';
import Link from 'next/link';
import { IResponse, IResponseStatus } from '../interfaces/response.interface';
import { Recipe } from '../interfaces/recipe.interface';

export default function RecipesList({ data }: { data: IResponse }) {
  return (
    <>
      <FadeInSection>{data.data && <Hero slides={data.data.slice(0, 5)} />}</FadeInSection>
      <FadeInSection>
        <RecipeTypes />
        <br />
      </FadeInSection>
      <FadeInSection>
        <section className="recipe-list">
          <h1>
            Kochrezepte <FontAwesomeIcon icon={faUtensils} />{' '}
            <span>
              <Link href="/rezepte">
                Alle Rezepte <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </span>
          </h1>
          {data.status !== IResponseStatus.success && <div className="error">{data.message}</div>}
          {data.data && <CardList data={data.data.filter((e: Recipe) => e.type === 'cooking-recipe')} />}
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="recipe-list">
          <h1>
            Backrezepte <FontAwesomeIcon icon={faCookieBite} />{' '}
            <span>
              <Link href="/rezepte">
                Alle Rezepte <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </span>
          </h1>
          {data.status !== IResponseStatus.success && <div className="error">{data.message}</div>}
          {data.data && <CardList data={data.data.filter((e: Recipe) => e.type === 'baking-recipe')} />}
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="recipe-list">
          <h1>
            Weitere Rezepte <FontAwesomeIcon icon={faMartiniGlass} />{' '}
            <span>
              <Link href="/rezepte">
                Alle Rezepte <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </span>
          </h1>
          {data.status !== IResponseStatus.success && <div className="error">{data.message}</div>}
          {data.data && <CardList data={data.data.filter((e: Recipe) => e.type === 'other-recipe')} />}
        </section>
      </FadeInSection>
      <style jsx>{`
        .recipe-list {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
}
