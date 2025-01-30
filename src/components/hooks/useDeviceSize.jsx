import { useState, useEffect } from 'react';

const useDeviceSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLargScreen, setIsLargScreen] = useState(false);
  const [isMegaDesktop, setIsMegaDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1200);
      setIsDesktop(width >= 1201);
      setIsLargScreen(width >= 1440);
      setIsMegaDesktop(width >= 1921);
    };

    // Initial check on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isTablet, isDesktop, isMegaDesktop, isLargScreen };
};

export default useDeviceSize;
