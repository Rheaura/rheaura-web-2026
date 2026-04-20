import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const el = ref.current;
    if (el) {
      // observe all .reveal elements inside the ref, or the ref itself
      const targets = el.querySelectorAll('.reveal');
      if (targets.length > 0) {
        targets.forEach((t) => observer.observe(t));
      } else {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

// Standalone hook for a single element
export function useRevealElement() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
