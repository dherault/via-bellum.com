import './ArmySelection.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import factionToInfo from '../data/factionToInfo'

const dividerWidth = 64

function ArmySelection() {
  const [selectedFaction, setSelectedFaction] = useState('')

  function toggleFaction(faction) {
    setSelectedFaction(selectedFaction === faction ? '' : faction)
  }

  return (
    <>
      <div className="w100 y2 mt-12">
        <h1 className="armySelection-h1">Choose your faction</h1>
      </div>
      <div className="flex-grow w100 x2 mt-6">
        <Fader
          isIn={selectedFaction === 'aztecs'}
          duration={333}
          className="x2"
        >
          <div
            className="mr-12"
            style={{ width: 400 + 2 * 96 - 32 }}
          >
            <FactionInfo faction="aztecs" />
          </div>
        </Fader>
        <Fader
          isIn={!selectedFaction || selectedFaction === 'japanese'}
          duration={333}
          style={{ width: 400 }}
        >
          <Faction
            faction="japanese"
            onClick={() => toggleFaction('japanese')}
            selected={selectedFaction === 'japanese'}
          />
        </Fader>
        <Fader
          isIn={!selectedFaction}
          duration={333}
        >
          <img
            src="/images/divider.png"
            alt="divider"
            width={dividerWidth}
            className="mx-12 all-333-ease"
          />
        </Fader>
        <Fader
          isIn={!selectedFaction || selectedFaction === 'aztecs'}
          duration={333}
          style={{ width: 400 }}
        >
          <Faction
            faction="aztecs"
            onClick={() => toggleFaction('aztecs')}
            selected={selectedFaction === 'aztecs'}
          />
        </Fader>
        <Fader
          isIn={selectedFaction === 'japanese'}
          duration={333}
          className="x2"
        >
          <div
            className="ml-12"
            style={{ width: 400 + 2 * 96 - 32 }}
          >
            <FactionInfo faction="japanese" />
          </div>
        </Fader>
      </div>
    </>
  )
}

function Faction({ faction, onClick = () => {}, selected }) {
  const { pluralName, backgroundSrc, foregroundSrc, flipImage } = factionToInfo[faction]

  return (
    <div
      onClick={onClick}
      className="w100 text-align-center armySelection-item y8"
    >
      <p className="armySelection-h2-before">
        The
      </p>
      <h2 className="armySelection-h2">
        {pluralName}
      </h2>
      <div className="position-relative mt-4">
        <img
          src={backgroundSrc}
          alt="japanese"
          width={256 + 128}
          className={`armySelection-logo no-select ${selected ? 'armySelection-logo-selected' : ''}`}
        />
        <img
          src={foregroundSrc}
          width={256 - 64}
          alt="Japanese trooper"
          className="position-absolute top-0 no-select"
          style={{ transform: flipImage ? 'scale(-1, 1)' : null, left: 'calc(50% - (256px - 64px) / 2 + 8px)' }}
        />
      </div>
    </div>
  )
}

function FactionInfo({ faction }) {
  const { pluralName, infoText } = factionToInfo[faction]

  return (
    <div
      className="w100"
    >
      <p className="mt-5">
        {infoText}
      </p>
      <Link
        to={`/army-creator/${faction}`}
        className="mt-6"
      >
        <button
          type="button"
          className="py-1 px-2"
        >
          Choose the {pluralName}
        </button>
      </Link>
    </div>
  )
}

function Fader({ children, isIn, duration = 0, style = {}, className = '' }) {
  const [isVisible, setIsVisible] = useState(isIn)
  const [isDisplayed, setIsDisplayed] = useState(isIn)

  useEffect(() => {
    if (!isDisplayed && isIn) {
      setTimeout(() => {
        setIsDisplayed(true)
        setTimeout(() => setIsVisible(true), 1000 / 60)
      }, duration)
    }
    else if (isDisplayed && !isIn) {
      setIsVisible(false)
      setTimeout(() => setIsDisplayed(false), duration)
    }
  }, [isDisplayed, isIn, duration])

  return (
    <div
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        display: isDisplayed ? 'inherit' : 'none',
        transition: `opacity ${duration}ms linear`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default ArmySelection
