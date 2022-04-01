import { useEffect, useState } from "react";

export default function useWindowSize() {

  // Bootstrap Brekponts 
  const PHONE = 576;
  // const TABLET = 768;
  // const DESKTOP = 992;
  // const LARGE = 1200;

    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
      isPhone: undefined,
      isPhoneOrTablet: undefined,
      isTablet: undefined,
      isDesktop: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          isPhone: window.innerWidth < PHONE,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 

    return windowSize;
  }