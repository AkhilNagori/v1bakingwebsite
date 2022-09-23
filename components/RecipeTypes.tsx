import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSeedling, faCow, faGlassWater, faFish, faUtensils, faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const types = [
  {
    path: '/rezepte',
    icon: faUtensils,
    name: 'Alle Rezepte',
  },
  {
    path: '/rezepte/schwäbisch',
    icon: faFaceGrinHearts,
    name: 'Schwäbische Küche',
  },
  {
    path: '/rezepte/vegetarisch',
    icon: faSeedling,
    name: 'Vegetarisch',
  },
  {
    path: '/rezepte/vegan',
    icon: faLeaf,
    name: 'Vegan',
  },
  {
    path: '/rezepte/laktosefrei',
    icon: faGlassWater,
    name: 'Laktosefrei',
  },
  {
    path: '/rezepte/fleisch',
    icon: faCow,
    name: 'Fleisch',
  },
  {
    path: '/rezepte/fisch',
    icon: faFish,
    name: 'Fisch',
  },
];

export default function RecipeTypes() {
  const router = useRouter();
  return (
    <ul className="recipe-types">
      {types.map((i: any) => (
        <li key={i.name}>
          <Link href={i.path} className={router.pathname === i.path ? 'primary' : undefined}>
            <FontAwesomeIcon icon={i.icon} /> {i.name}
          </Link>
        </li>
      ))}
      <style jsx>{`
        .recipe-types {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .recipe-types li {
          display: inline-block;
          margin-right: 0.25rem;
          margin-top: 0.25rem;
          background-color: var(--grey-300);
          color: var(--grey-900);
          padding: 0.1rem 0.5rem;
          border-radius: 1rem;
          font-size: 0.8rem;
        }
      `}</style>
    </ul>
  );
}
