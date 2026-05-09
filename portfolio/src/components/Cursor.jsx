import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMove);

    let raf;
    const loop = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + 'px';
        ringRef.current.style.top  = p.ry + 'px';
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      document.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const dotStyle = {
    position: 'fixed', width: 8, height: 8,
    background: 'var(--gold)', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'width .2s, height .2s',
  };

  const ringStyle = {
    position: 'fixed', width: 32, height: 32,
    border: '0.5px solid var(--gold-dim)', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9998,
    transform: 'translate(-50%, -50%)',
    transition: 'width .2s, height .2s',
  };

  return (
    <>
      <div ref={dotRef} style={dotStyle} />
      <div ref={ringRef} style={ringStyle} />
    </>
  );
};

export default Cursor;
