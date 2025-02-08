import { useState, useEffect } from 'react';

const useDeviceSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLargScreen, setIsLargScreen] = useState(false);
  const [isMegaScreen, setIsMegaScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMegaScreen(width >= 1921);
      setIsLargScreen(width >= 1440);
      setIsDesktop(width >= 1201);
      setIsTablet(width >= 768 && width <= 1200);
      setIsMobile(width < 768);
    };

    // Initial check on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isTablet, isDesktop, isMegaScreen, isLargScreen };
};

export default useDeviceSize;
