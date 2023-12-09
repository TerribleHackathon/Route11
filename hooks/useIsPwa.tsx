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
      const isStandaloneAndroid = () => {
        return /android/i.test(navigator.userAgent) && window.matchMedia('(display-mode: standalone)').matches;
      };

      const isStandaloneDisplayMode = () => {
        return window.matchMedia('(display-mode: standalone)').matches;
      };

      if (isStandaloneAndroid() || isStandaloneDisplayMode()) {
        setIsPWA(true)
        return;
      } else {
        console.log('Not running in standalone mode on Android');
      }
    };

    checkServiceWorker();
  }, []);

  return isPWA;
};

export default useIsPWA;