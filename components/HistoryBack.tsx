import Router from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function HistoryBack() {
  return (
    <button onClick={() => Router.back()}>
      <FontAwesomeIcon icon={faArrowLeft} /> Seite zurück
    </button>
  );
}
