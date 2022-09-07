import { useState, useRef, useEffect } from 'react';

export const useInView = () => {
  const [inView, setInView] = useState();
  const ref = useRef();

  useEffect(() => {
    if (ref.current == null) return;
    const intersectino_observer_callback = ([entry], observer) => {
      setInView(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(intersectino_observer_callback, {
      threshold: [0, 1],
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, inView };
};
