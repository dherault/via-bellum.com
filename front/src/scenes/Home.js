import './Home.css'

import { Link } from 'react-router-dom'

import RotatingButton from '../components/RotatingButton'

function Home() {
  return (
    <div className="position-relative flex-grow w100 pt-6 y2 overflow-hidden">
      <img
        className="position-absolute z-index-1"
        src="/images/japanese-trooper-cropped.png"
        height={800}
        style={{
          top: '4rem',
          right: -64,
        }}
      />
      <img
        className="position-absolute z-index-1"
        src="/images/japanese-trooper-cropped.png"
        height={800}
        style={{
          top: '4rem',
          left: -64,
          transform: 'scale(-1, 1)',
        }}
      />
      <div className="position-relative y2 z-index-2">
        <h1 className="home-h1 mt-10 pt-6">
          Collect, Paint, Command.
        </h1>
        <p className="home-lead mt-6">
          Live your hobby to the fullest with high-standard models.
          <br />
          Meet like-minded people to compete against.
        </p>
        <Link
          to="/army-creator"
          className="mt-6"
        >
          <RotatingButton>
            Create your army
          </RotatingButton>
        </Link>
      </div>
      <div
        className="position-relative w100 z-index-0 mb-12"
        style={{
          top: '6rem',
          left: -512,
          right: -512,
        }}
      >
        <svg
          style={{
            width: 'calc(100% + 2 * 512px)',
            height: 96 * 16 / 2 / 2,
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,50 50,0 100,50 50,100"
            className="home-polygon"
            strokeWidth="0"
          />
        </svg>
      </div>
      <div className="z-index-2 py-12">
        More to come
      </div>
    </div>
  )
}

export default Home
