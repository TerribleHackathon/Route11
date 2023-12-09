import { useState, useEffect } from 'react';

const useIsPWA = () => {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    const checkServiceWorker = async () => {
      const isStandaloneIOS = () => {
        return ('standalone' in window.navigator) && (window.navigator as any).standalone;
      };

      const isStandaloneAndroid = () => {
        return localStorage.getItem('appInstalled') === 'yes';
      };


      window.addEventListener('appinstalled', () => {
        localStorage.setItem('appInstalled', 'yes');
      });

      if (isStandaloneIOS() || isStandaloneAndroid()) {
        setIsPWA(true)
        return;
      } else {
        console.log('Not running in standalone mode');
      }
    }

    checkServiceWorker();
  }, []);

  return isPWA;
};

export default useIsPWA;