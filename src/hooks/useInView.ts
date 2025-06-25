import { useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        setHasBeenInView(true);
      } else {
        setInView(false);
      }
    }, options);
    observer.observe(node);
    return () => observer.unobserve(node);
  }, [options]);

  // Trả về true nếu section đã từng hiện ra
  return [ref, inView || hasBeenInView] as const;
}
