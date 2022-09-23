import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import aboutUsPic from '../public/images/about-us.jpg';

const ageKathi = Math.abs(new Date(new Date().getTime() - new Date('04/25/1999').getTime()).getUTCFullYear() - 1970);
const ageNils = Math.abs(new Date(new Date().getTime() - new Date('12/28/1998').getTime()).getUTCFullYear() - 1970);

export default function AboutUs() {
  return (
    <section className="about-us">
      <h2 className="about-us--title">About Us</h2>
      <Image className="about-us--image" src={aboutUsPic} alt="Nils & Kathi auf dem Frühlingsfest" layout="responsive" />
      <p className="about-us--text">
        Wir sind Nils ({ageNils}) & Kathi ({ageKathi}), zwei Hobbyköche aus Baden-Württemberg. Gemeinsam teilen wir die Leidenschaft am Kochen und
        Backen. Auf dieser Webseite findest Du unsere leckere Koch- und Backideen.{' '}
        <span className="primary">
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </p>
      <style jsx>{`
        .about-us {
          text-align: center;
          max-width: 30rem;
          width: 100%;
          margin: 0 auto;
        }

        .about-us--image {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
