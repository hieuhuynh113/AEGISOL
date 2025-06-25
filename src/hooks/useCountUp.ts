import { useEffect, useState } from "react";

export function useCountUp(target: number, inView: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [inView, target, duration]);
  return count;
}
