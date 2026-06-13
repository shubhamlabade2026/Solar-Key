'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    // Scroll reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-revealed');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    const observeNewElements = () => {
      const elements = document.querySelectorAll('.scroll-reveal:not(.scroll-revealed)');
      elements.forEach((el) => revealObserver.observe(el));
    };

    observeNewElements();

    // Watch for route changes injecting new DOM elements
    const domObserver = new MutationObserver(observeNewElements);
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
      domObserver.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '3px',
        backgroundColor: '#2563EB',
        zIndex: 9999,
        transition: 'width 0.1s ease-out',
        pointerEvents: 'none',
      }}
    />
  );
}
