import { useEffect, useRef, useState } from 'react';

export default function FadeInSection(props: any) {
  const [isVisible, setVisible] = useState(true);
  const fadeInSection = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const { current } = fadeInSection;
    observer.observe(current!);
    return () => observer.unobserve(current!);
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={fadeInSection}>
      {props.children}
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(15vh);
          visibility: hidden;
          transition: opacity 500ms ease-out, transform 500ms ease-out, visibility 500ms ease-out;
          will-change: opacity, transform, visibility;
        }

        .fade-in-section.is-visible {
          opacity: 1;
          transform: none;
          visibility: visible;
        }
      `}</style>
    </div>
  );
}
