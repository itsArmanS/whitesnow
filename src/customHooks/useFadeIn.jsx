import { useState, useEffect } from 'react';

function useFadeIn(element, ms) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let timer;
    if (opacity < 1) {
      timer = setInterval(() => {
        setOpacity(prevOpacity => {
          const newOpacity = prevOpacity + 0.1;
          if (newOpacity >= 1) clearInterval(timer);
          return Math.min(newOpacity, 1);
        });
      }, ms);
    }
    return () => clearInterval(timer);
  }, [opacity, ms]);

  useEffect(() => {
    element.style.opacity = opacity;
  }, [opacity, element]);

  return opacity;
}

export default useFadeIn;