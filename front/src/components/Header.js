import './Header.css'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="w100 position-relative header-top z-index-1000">
      <div className="position-absolute top-0 left-0 right-0 mt-6">
        <div className="header-lore pt-1">
          The way of war! In a parallel universe, the 12 gods decided to select
          samples of their greatest civilizations so they can survive the
          passing of time, learn how to use technology and magic, and advance in
          warfare. They are out for war! Who will triumph and become the alpha
          god? To the victor the spoils! They collide in epic battles against
          each other, using the deadliest technologies, the most monstrous
          mythological creatures, the most relentless magic, and of course,
          their wits and will.
        </div>
        <div className="header-lore-fader">
          <div />
          <div />
        </div>
      </div>
      <div className="header-top w100 background-secondary text-primary x5 p-1 position-absolute top-0 left-0 right-0">
        <div className="flex-grow flex-basis-1 x6">
          <Link
            to="/army-creator"
            className="header-link"
          >
            Army Creator
          </Link>
          <Link
            to="/store"
            className="header-link ml-4"
          >
            Store
          </Link>
        </div>
        <div className="header-center" />
        <div className="flex-grow flex-basis-1 x4">
          <Link
            to="/store"
            className="header-link"
          >
            University
          </Link>
          <Link
            to="/store"
            className="header-link ml-4"
          >
            Blog
          </Link>
        </div>
      </div>
      <div className="header-center-triangle" />
      <Link
        to="/"
        className="header-logo"
      >
        <img
          src="/images/logo-transparent-bg-square.png"
          alt="Logo"
          width={64 + 16}
          className="header-logo-image"
        />
      </Link>
      <div className="header-logotype">
        <div>Via</div>
        <div>Bellum</div>
      </div>
    </nav>
  )
}

export default Header
