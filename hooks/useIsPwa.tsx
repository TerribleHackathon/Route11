import { useState, useEffect } from 'react';

const useIsPWA = () => {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    // const checkIsPWA = () => {
    //   if (
    //     'serviceWorker' in navigator &&
    //     (window.matchMedia('(display-mode: standalone)').matches ||
    //       'standalone' in window.navigator && (window.navigator as any).standalone)
    //   ) {
    //     setIsPWA(true);
    //   } else {
    //     setIsPWA(false);
    //   }
    // };
    const checkServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration();
          setIsPWA(!!registration);
        } catch (error) {
          console.error('Error checking service worker registration:', error);
        }
      }
    };

    checkServiceWorker();
  }, []);

  return isPWA;
};

export default useIsPWA;