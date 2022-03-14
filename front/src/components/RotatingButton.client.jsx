import {useEffect, useRef} from 'react';

export default function RotatingButton({children}) {
  let constrain = 80;
  const buttonRef = useRef();

  useEffect(() => {
    function handleMouseMove(e) {
      const x = e.clientX;
      const y = e.clientY;

      window.requestAnimationFrame(() => {
        let box = buttonRef.current.getBoundingClientRect();
        let calcX = -(y - box.y - box.height / 2) / constrain;
        let calcY = (x - box.x - box.width / 2) / constrain;

        buttonRef.current.style.transform =
          'perspective(100px) ' +
          '   rotateX(' +
          calcX +
          'deg) ' +
          '   rotateY(' +
          calcY +
          'deg) ';
      });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  });

  return (
    <span
      ref={buttonRef}
      className="rotating-button py-2 px-4 text-center cursor-pointer rounded-sm bg-secondary text-primary"
    >
      {children}
    </span>
  );
}
