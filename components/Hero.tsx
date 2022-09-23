import Carousel from './Carousel';

export default function Hero({ slides }: any) {
  return (
    <section className="hero">
      <h1>Unsere Videos</h1>
      <div className="hero--carousel">{slides?.length > 0 && <Carousel slides={slides} />}</div>
      <style jsx>{`
        .hero {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
        }

        .hero--carousel {
          width: 15.15rem;
          height: 29.8rem;
          margin: 0 auto;
        }

        .hero--carousel::before {
          content: url(./images/frame.png);
          position: absolute;
          bottom: -1rem;
          z-index: 1;
          pointer-events: none;
          width: 17rem;
          left: calc(50% - 8.5rem);
        }
      `}</style>
    </section>
  );
}
