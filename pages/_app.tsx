import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import type { AppProps } from 'next/app';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="App">
        <div className="advertisement"></div>
        <div className="content">
          <Navbar />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <div className="advertisement"></div>
      </div>
      <CookieConsent />
    </>
  );
}
