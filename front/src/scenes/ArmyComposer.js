import './ArmyComposer.css'

import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import factionToInfo from '../data/factionToInfo'

import QuantitySelector from '../components/QuantitySelector'

function ArmyComposer() {
  const { faction } = useParams()
  const { pluralName, units } = factionToInfo[faction]
  const [quantities, setQuantities] = useState(units.map(() => 0))

  function handleQuantityChange(unitIndex, quantity) {
    const newQuantities = quantities.slice()

    newQuantities[unitIndex] = quantity

    setQuantities(newQuantities)
  }

  return (
    <div className="w100 flex-grow x1 pl-6">
      <div className="mt-12">
        <p className="armyComposer-h1-before">
          The
        </p>
        <h1 className="armyComposer-h1">
          {pluralName}
        </h1>
        <p className="mt-4">
          Select the units composing your army:
        </p>
        <div className="mt-4">
          {units.map((unit, i) => (
            <div
              key={unit.name}
              className="mb-2 x1"
            >
              <div style={{ minWidth: 128 + 16 }}>
                <img
                  src={unit.imageSrc}
                  alt={unit.name}
                  height={96}
                />
              </div>
              <div>
                <h2 className="armyComposer-h2 mb-2">
                  {unit.name}
                </h2>
                <QuantitySelector
                  value={quantities[i]}
                  onChange={value => handleQuantityChange(i, value)}
                  min={0}
                  max={5}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArmyComposer
