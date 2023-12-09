import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        const mobileThreshold = 768;
        const currentWidth = window.innerWidth;
        setIsMobile(currentWidth < mobileThreshold);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return isMobile;
  
}

export default useIsMobile