import Image from 'next/image';
import mailPic from '../public/images/mail.png';
import HeadSEO from '../components/HeadSEO';

export default function Impressum() {
  return (
    <article>
      <HeadSEO siteDescription="Impressum von nilskathi.de" siteTitle="Impressum | Nils & Kathi" />
      <h1>Impressum</h1>
      <p>
        nilskathi.de
        <br />
        Elementies UG (haftungsbeschränkt)
        <br />
        Jägerstraße 16
        <br />
        71573 Allmersbach
        <br />
        Deutschland
        <br />
      </p>
      <p>
        <Image src={mailPic} alt="Kontakt E-Mail-Adresse von Nils & Kathi" />
        <br />
        Telefon: + 49 (0)170 6077708
      </p>
      <p>
        Geschäftsführer: Nils-Christopher Wiesenauer
        <br />
        USt-IdNr.: DE321128851
        <br />
        Zuständiges Gericht: Amtsgericht Stuttgart
        <br />
        HRB Nummer: 767176
      </p>
      <p>
        Hinweis nach Art. 14 der Verordnung (EU) Nr. 524/2013 des Europäischen Parlamentes und des Rates vom 21.05.2013 über die Online-Beilegung
        verbraucherrechtlicher Streitigkeiten: Die Plattform der EU zur Beilegung verbraucherrechtlicher Streitigkeiten („OS-Plattform“) ist unter dem
        folgendem Link erreichbar:
        <br />
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        .
      </p>
      <p>
        Hinweis gem. Verbraucherstreitbeilegungsgesetz: Wir sind zur Teilnahme an einem außergerichtlichen Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle weder verpflichtet noch freiwillig dazu bereit.
      </p>
    </article>
  );
}
