import {useEffect, useState} from 'react';

export default function ScrollMouse() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="mousey transition-all duration-500"
      style={{opacity: scroll > 0 ? 0 : 1}}
    >
      <div className="scroller"></div>
    </div>
  );
}
