import './RotatingButton.css'

import { useEffect, useRef } from 'react'

const constrain = 80

function RotatingButton({ children }) {
  const buttonRef = useRef()

  useEffect(() => {
    function handleMouseMove(e) {
      const x = e.clientX
      const y = e.clientY

      window.requestAnimationFrame(() => {
        const box = buttonRef.current.getBoundingClientRect()
        const calcX = -(y - box.y - box.height / 2) / constrain
        const calcY = (x - box.x - box.width / 2) / constrain

        buttonRef.current.style.transform =
          'perspective(100px) ' +
          `rotateX(${calcX}deg) ` +
          `rotateY(${calcY}deg) `
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => document.removeEventListener('mousemove', handleMouseMove)
  })

  return (
    <div
      ref={buttonRef}
      className="rotating-button background-secondary text-primary border-radius-4 pt-1 pb-1h px-2"
    >
      {children}
    </div>
  )
}

export default RotatingButton
