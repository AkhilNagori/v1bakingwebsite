import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Carousel({ slides }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    setActive(false);
  };
  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    setActive(false);
  };
  const goToSlide = (slideIndex: number) => {
    if (slideIndex !== currentIndex) {
      setCurrentIndex(slideIndex);
      setActive(false);
    }
  };

  let content;
  switch (slides[currentIndex].type) {
    case 'img':
      content = <Image className="carousel--slide" alt="Ausschnitt von Nils & Kathi" src={slides[currentIndex].content} />;
      break;
    default:
      content = (
        <div
          className="carousel--slide"
          onClick={() => {
            if (!active) setActive(true);
          }}
          style={{ backgroundImage: `url('/images/thumbnails/thumbnail-${slides[currentIndex].id}-preview-min.jpg')` }}
        >
          {active ? (
            <iframe
              className="carousel--slide"
              title="Video von Nils & Kathi"
              scrolling="no"
              src={`https://www.youtube-nocookie.com/embed/${slides[currentIndex].idYoutube}?controls=0&autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div>
              <p>
                <FontAwesomeIcon icon={faPlay} size="xl" />
              </p>
              <h2>{slides[currentIndex].title}</h2>
            </div>
          )}
          <style jsx>{`
            .carousel--slide {
              width: 100%;
              height: 100%;
              background-size: cover;
              background-position: center;
              border-radius: 1.5rem;
              overflow: hidden;
              border: none;
              justify-content: center;
              align-items: center;
              display: flex;
              background-color: var(--primary);
            }

            .carousel--slide:hover {
              cursor: pointer;
            }
          `}</style>
        </div>
      );
      break;
  }

  return (
    <div className="carousel">
      <div className="carousel--buttons">
        <button onClick={goToPrevious}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={goToNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      {slides.length > 0 && content}
      <div className="carousel--dots">
        {slides.map((slide: any, slideIndex: number) => (
          <button className={currentIndex === slideIndex ? 'carousel--dots-active' : ''} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <FontAwesomeIcon icon={faCircle} />
          </button>
        ))}
      </div>
      <style jsx>{`
        .carousel {
          position: relative;
          height: 100%;
          padding: 0 0.5rem;
        }

        .carousel--buttons button {
          position: absolute;
          z-index: 10;
          top: 50%;
          transform: translate(0, -50%);
          height: 3rem;
          width: 3rem;
          font-size: 1.5rem;
          cursor: pointer;
          border-radius: 100%;
          border-style: none;
          background-color: var(--grey-300);
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .carousel--buttons button:hover {
          color: var(--primary);
        }

        .carousel--buttons button:first-child {
          left: -4.5rem;
        }

        .carousel--buttons button:last-child {
          right: -4.5rem;
        }

        .carousel--dots {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
        }

        .carousel--dots button {
          font-size: 0.5rem;
          margin: 0 0.1rem;
          cursor: pointer;
          border-style: none;
          background-color: var(--white);
        }

        .carousel--dots-active {
          color: var(--primary);
        }

        @media screen and (max-width: 50rem) {
          .carousel--buttons button:first-child {
            left: -3.5rem;
          }

          .carousel--buttons button:last-child {
            right: -3.5rem;
          }
        }
      `}</style>
    </div>
  );
}
