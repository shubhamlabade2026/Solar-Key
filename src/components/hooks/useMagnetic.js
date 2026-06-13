import { useEffect, useRef } from 'react';

/**
 * Reusable React hook for a magnetic button effect.
 * Attaches mouse move listeners to pull the element slightly towards the cursor.
 */
export default function useMagnetic() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      // Magnetic intensity (0.3 translates to 30% pull)
      const strength = 0.3;
      
      // Remove transitions during mousemove for high-performance responsive tracking
      el.style.transition = 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)';
      el.style.transform = `translate(${distanceX * strength}px, ${distanceY * strength}px)`;
    };

    const handleMouseLeave = () => {
      // Smooth return transition
      el.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      el.style.transform = 'translate(0px, 0px)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
