// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptoList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoValues: [], isLoading: true}
  componentDidMount() {
    this.getCryptoDetails()
  }
  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updateData = data.map(each => {
      return {
        currencyLogo: each.currency_logo,
        currencyName: each.currency_name,
        euroValue: each.euro_value,
        id: each.id,
        usdValue: each.usd_value,
      }
    })
    return this.setState({cryptoValues: updateData, isLoading: false})
  }
  render() {
    const {cryptoValues, isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptoList item={cryptoValues} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
