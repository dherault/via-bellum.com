import './Army.css'

import { Link } from 'react-router-dom'

import ArmyCreator from '../components/ArmyCreator'

function Army() {
  return (
    <>
      <div className="w100 y2 mt-12">
        <h1 className="army-h1">Choose your faction</h1>
      </div>
      <div className="flex-grow w100 x2 mt-6">
        <Link
          to="/army-creator/japanese"
          className="flex-basis-1 text-align-center army-item"
        >
          <p className="army-h2-before">
            The
          </p>
          <h2 className="army-h2">
            Japanese
          </h2>
          <div className="position-relative mt-4">
            <img
              src="/images/japanese-logo.png"
              alt="japanese"
              width={256 + 128}
              className="army-logo"
            />
            <img
              src="/images/japanese-trooper-cropped.png"
              width={256 - 64}
              alt="Japanese trooper"
              className="position-absolute top-0"
              style={{ transform: 'scale(-1, 1)', left: 'calc(50% - (256px - 64px) / 2 + 8px)' }}
            />
          </div>
        </Link>
        <img
          src="/images/divider.png"
          alt="divider"
          width={64}
          className="mx-12"
        />
        <Link
          to="/army-creator/aztecs"
          className="flex-basis-1 text-align-center army-item"
        >
          <p className="army-h2-before">
            The
          </p>
          <h2 className="army-h2">
            Aztecs
          </h2>
          <div className="position-relative mt-4">
            <img
              src="/images/aztec-logo.png"
              alt="aztec"
              width={256 + 128}
              className="army-logo"
            />
            <img
              src="/images/japanese-trooper-cropped.png"
              width={256 - 64}
              alt="Japanese trooper"
              className="position-absolute top-0"
              style={{ left: 'calc(50% - (256px - 64px) / 2 - 8px)' }}
            />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Army
