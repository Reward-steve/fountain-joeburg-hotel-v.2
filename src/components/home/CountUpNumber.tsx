import { useEffect, useState, useRef } from "react";

interface CountUpNumberProps {
  target: number;
}

// Fixed syntax layout to standard named export structure
export function CountUpNumber({ target }: CountUpNumberProps) {
  const [count, setCount] = useState(0);

  // Typed specifically for HTMLSpanElement so your compiler knows what it's tracking
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1500; // Time in ms for full count execution

    // Capturing reference value to clear reliably in cleanup
    const currentRef = countRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1,
            );

            // Curved smoothing for premium easing feel
            const easeOutQuad = (t: number) => t * (2 - t);
            setCount(Math.floor(easeOutQuad(progress) * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect(); // Fire it exactly once per page load
        }
      },
      { threshold: 0.1 },
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return <span ref={countRef}>{count}</span>;
}

// Fallback shared variant declaration if not already inherited from file scope
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
