
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import DOTS from 'vanta/dist/vanta.dots.min';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      try {
        const effect = DOTS({
          el: vantaRef.current,
          THREE,
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
          points: 20,
          maxDistance: 25.00,
          backgroundAlpha: 1,
        });

        setVantaEffect(effect);
      } catch (error) {
        console.error('Failed to initialize Vanta effect:', error);
        return;
      }
    }

    const handleScroll = () => {
      if (vantaEffect) {
        try {
          const scrollY = window.scrollY;
          const newSpacing = Math.max(10, 100 - scrollY / 5);
          const newScale = 1 + scrollY / 1000;

          vantaEffect.setOptions({
            spacing: newSpacing,
            scale: newScale,
          });
        } catch (error) {
          console.error('Error updating Vanta effect:', error);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (error) {
          console.error('Error destroying Vanta effect:', error);
        }
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      style={{ 
        position: 'fixed',
        zIndex: -1,
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default VantaBackground;
