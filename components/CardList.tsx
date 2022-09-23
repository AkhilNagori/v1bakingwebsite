import Card from './Card';
import { useRef, useState } from 'react';

export default function CardList({ data }: any) {
  const cardListRef = useRef<any>(null);
  const [scrollX, setScrollX] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const onMouseDown = (e: any) => {
    setIsScrolling(true);
    setClientX(e.clientX);
  };

  const onMouseMove = (e: any) => {
    if (isScrolling && cardListRef.current) {
      const { scrollWidth, clientWidth } = cardListRef.current;
      const maxScrollX = scrollWidth - clientWidth;

      let scrollXTemp = scrollX - (e.clientX - clientX);
      if (scrollXTemp > maxScrollX) {
        scrollXTemp = maxScrollX;
      } else if (scrollXTemp < 0) {
        scrollXTemp = 0;
      }
      cardListRef.current.scrollLeft = scrollXTemp;
      setScrollX(scrollXTemp);
      setClientX(e.clientX);
    }
  };

  const onScroll = (e: any) => {
    setScrollX(e.target.scrollLeft);
  };

  const date = new Date();
  date.setDate(date.getDate() - 7);

  const cards = data.map((i: any) => (
    <Card
      key={i.id}
      id={i.id}
      idTiktok={i.idTiktok}
      idInstagram={i.idInstagram}
      idYoutube={i.idYoutube}
      title={i.title}
      thumbnail={`/images/thumbnails/thumbnail-${i.id}-preview-min.jpg`}
      isNew={new Date(i.date) > date}
      duration={i.durationWork + i.durationCook}
      difficulty={i.difficulty}
      description={i.description}
    />
  ));
  return (
    <div
      ref={cardListRef}
      className="card-list"
      //className={`card-list ${scrollX != 0 ? 'left' : ''} ${!cardListRef.current || scrollX < (cardListRef.current.scrollWidth - cardListRef.current.clientWidth) ? 'right' : ''}`}
      onMouseDown={onMouseDown}
      onMouseLeave={() => {
        setIsScrolling(false);
      }}
      onMouseUp={() => {
        setIsScrolling(false);
      }}
      onMouseMove={onMouseMove}
      onScroll={onScroll}
    >
      {cards}
      <style jsx>{`
        .card-list {
          display: flex;
          flex-wrap: nowrap;
          gap: 1rem;
          overflow-x: auto;
          cursor: grab;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          padding: 0 0.5rem;
          margin: 0.5rem 0 2rem 0;
        }

        .card-list.left {
          box-shadow: inset 1.5rem 0 1.5rem -1.5rem var(--shadow-45);
        }

        .card-list.right {
          box-shadow: inset -1.5rem 0 1.5rem -1.5rem var(--shadow-45);
        }

        .card-list.left.right {
          box-shadow: inset 1.5rem 0 1.5rem -1.5rem var(--shadow-45), inset -1.5rem 0 1.5rem -1.5rem var(--shadow-45);
        }

        .card-list:active {
          cursor: grabbing;
        }
      `}</style>
    </div>
  );
}
