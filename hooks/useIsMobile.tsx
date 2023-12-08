import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        // Check if the window width is below a certain threshold (e.g., 768 pixels)
        const mobileThreshold = 768;
        const currentWidth = window.innerWidth;
        setIsMobile(currentWidth < mobileThreshold);
      };
  
      // Initial check on component mount
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return isMobile;
  
}

export default useIsMobile