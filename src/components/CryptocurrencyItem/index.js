// Write your JS code here
import './index.css'

const CryptoItem = props => {
  const {currencyName, usdValue, euroValue, currencyLogo, id} = props.valueEach
  return (
    <li className="list-item-container">
      <div className="currency-logo-name-container">
        <div className="curr-logo-cont">
          <img src={currencyLogo} alt={currencyName} className="list-image" />
          <p className="currency-name">{currencyName}</p>
        </div>
      </div>
      <div className="currency-container-list">
        <p className="usd">{usdValue}</p>
        <p className="europe">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoItem
