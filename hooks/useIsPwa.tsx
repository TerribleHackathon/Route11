import { useState, useEffect } from 'react';

const useIsPWA = () => {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    const checkIsPWA = () => {
      if (
        'serviceWorker' in navigator &&
        (window.matchMedia('(display-mode: standalone)').matches ||
          'standalone' in window.navigator && (window.navigator as any).standalone)
      ) {
        setIsPWA(true);
      } else {
        setIsPWA(false);
      }
    };

    checkIsPWA();
  }, []);

  return isPWA;
};

export default useIsPWA;