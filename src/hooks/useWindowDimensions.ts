import { useEffect, useState } from 'react';

const useWindowDimensions = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { innerWidth, innerHeight };
};

export default useWindowDimensions;
