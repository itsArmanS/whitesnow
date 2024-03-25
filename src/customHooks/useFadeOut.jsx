import { useState, useEffect } from 'react';

function useFadeOut(element, ms, callback) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let timer;
    if (opacity > 0) {
      timer = setInterval(() => {
        setOpacity(prevOpacity => {
          const newOpacity = prevOpacity - 0.1;
          if (newOpacity <= 0) {
            clearInterval(timer);
            if (callback) callback();
          }
          return Math.max(newOpacity, 0);
        });
      }, ms);
    }
    return () => clearInterval(timer);
  }, [opacity, ms, callback]);

  useEffect(() => {
    element.style.opacity = opacity;
  }, [opacity, element]);

  return opacity;
}

export default useFadeOut