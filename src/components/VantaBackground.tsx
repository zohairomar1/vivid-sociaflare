
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import DOTS from 'vanta/dist/vanta.dots.min';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          spacing: 35,
          backgroundColor: 0x0a0a0a,
          color: 0x888888,
          color2: 0x888888,
          showLines: false,
        })
      );
    }

    const handleScroll = () => {
      if (vantaEffect) {
        const scrollY = window.scrollY;
        const newSpacing = Math.max(10, 100 - scrollY / 5);
        const newScale = 1 + scrollY / 1000;

        vantaEffect.setOptions({
          spacing: newSpacing,
          scale: newScale,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
};

export default VantaBackground;
