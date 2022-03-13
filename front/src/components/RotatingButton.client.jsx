import {useEffect, useRef} from 'react';

export default function RotatingButton() {
  let constrain = 120;
  const buttonRef = useRef();

  useEffect(() => {
    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - box.height / 2) / constrain;
      let calcY = (x - box.x - box.width / 2) / constrain;

      return (
        'perspective(100px) ' +
        '   rotateX(' +
        calcX +
        'deg) ' +
        '   rotateY(' +
        calcY +
        'deg) '
      );
    }

    function transformElement(el, xyEl) {
      el.style.transform = transforms.apply(null, xyEl);
    }

    function handleMouseMove(e) {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([buttonRef.current]);

      window.requestAnimationFrame(function () {
        transformElement(buttonRef.current, position);
      });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  });

  return (
    <span
      ref={buttonRef}
      className="rotating-button p-2 font-sans text-center cursor-pointer rounded-sm"
    >
      Create your army
    </span>
  );
}
