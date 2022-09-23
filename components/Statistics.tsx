import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Statistics() {
  const followersTiktok = 1850;
  const followersInstagram = 140;
  const followersYoutube = 125;

  return (
    <section className="statistics">
      <div>
        <a href="https://tiktok.com/@nils_kathi" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTiktok} size="2xl" /> {followersTiktok}+ Follower
        </a>
      </div>
      <div>
        <a href="https://instagram.com/nils_kathi" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2xl" /> {followersInstagram}+ Follower
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/@nils_kathi" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2xl" /> {followersYoutube}+ Abonnenten
        </a>
      </div>
      <style jsx>{`
        .statistics {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          text-align: center;
          margin: 2rem 0;
        }
      `}</style>
    </section>
  );
}
