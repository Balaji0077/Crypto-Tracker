// Write your JS code here
import {Component} from 'react'
import CryptoItem from '../CryptocurrencyItem'
import './index.css'

class CryptoList extends Component {
  render() {
    const {item} = this.props
    return (
      <>
        <h1 className="home-heading">Cryptocurrency Tracker</h1>
        <div className="home-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="home-image"
          />
        </div>
        <div className="home-table">
          <div className="table-bar">
            <h1 className="table-1-data">Coin Type</h1>
            <div className="money-container">
              <h1 className="table-2-data">USD</h1>
              <h1 className="table-2-data">EURO</h1>
            </div>
          </div>
          <ul className="list-elements">
            {item.map(each => {
              return <CryptoItem valueEach={each} key={each.id} />
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default CryptoList
