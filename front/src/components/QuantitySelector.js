import './QuantitySelector.css'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function QuantitySelector({ label = 'Quantity', value, onChange, min = 0, max = Infinity }) {

  function handleClick(delta) {
    if (typeof onChange !== 'function') return

    onChange(Math.max(min, Math.min(max, value + delta)))
  }

  return (
    <div className="quantitySelector x4s no-select">
      <span className="px-1h py-1 font-weight-300">
        {label}
      </span>
      <span
        className="quantitySelector-button x5"
        style={{ width: 32 }}
        onClick={() => handleClick(-1)}
      >
        <AiOutlineMinus />
      </span>
      <span
        className="quantitySelector-value x5"
        style={{ width: 32 }}
      >
        {value}
      </span>
      <span
        className="quantitySelector-button x5"
        style={{ width: 32 }}
        onClick={() => handleClick(1)}
      >
        <AiOutlinePlus />
      </span>
    </div>
  )
}

export default QuantitySelector
