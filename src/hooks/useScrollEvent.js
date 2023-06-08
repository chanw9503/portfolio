import React, { useEffect, useRef } from 'react';

const useScrollEvent = () => {
  const targetRef = useRef(null);
  const scrollRef = useRef(0);
  const scrollHandler = () => {
    scrollRef.current = targetRef.event.scrollY;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', scrollHandler);
    }, 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return [targetRef, scrollRef.current];
};

export default useScrollEvent;
