import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));



class GetFetch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currency: 'AUD',
      baseCurrency: 'AUD',
      input: '',
      amount: '',
      output1: ``,
      output2:``,
      output3: ``,
      output4: ``,
      output5: ``,
      rate: ''
        }
    this.handleChanged = this.handleChanged.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChanges = this.handleChanges.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleChange(e) {
    this.setState({
      currency: e.target.value
    })
  }

  handleChanged(e) {
    this.setState({
      baseCurrency: e.target.value
    })
  }
  handleChanges(e) {
    this.setState({
      input: e.target.value
    })
  }
  handleClick() {
    
      fetch(`https://api.getgeoapi.com/v2/currency/convert?api_key=8d1d6d598c52a4201f2f7ede34fa5869e5463c69&from=${this.state.baseCurrency}&to=${this.state.currency}&amount=${this.state.input}&format=json`)
        .then(res => res.json())
        .then (data => {
            const client = data.rates[this.state.currency].rate
    
            const result =  this.state.input * client

            this.setState({
              amount: result,
              output1: `${this.state.input} ${this.state.baseCurrency} =  `,
              output2: `${this.state.currency}`,
              output3: `1 ${this.state.baseCurrency} =`,
              output4: `${this.state.currency}`,
              output5: `You converted ${this.state.input} ${this.state.baseCurrency} to ${this.state.currency}`,
              rate: client
            })
            
            
        })
    
        .catch(err => {
            console.log(`error ${err}`);
        })
  }

  render() {

  

    return (
      <div >
         <h1>Tife-Code Currency Converter</h1>
        <section className='pageBody'>
            <header>
             
              <h2>{this.state.output5}</h2>
            </header>
            <section className='getFetchBody'>

              
              <label>
                Amount: <br />
                  <input className='currency'  type = "text" onChange = {this.handleChanges}></input>
              </label>
            
              <label>
                From:
                <select className='currency' name="" value = {this.state.baseCurrency} onChange = {this.handleChanged}>
              
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNH">CNH - Chinese Yuan Offshore</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="EGP">EGP - Egyptian Pound</option>
                <option value="ETB">ETB - Ethiopian Birr</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="GHS">GHS - Ghanaian Cedi</option>
                <option value="IDR">IDR -Indonesian Rupiah </option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="JMD">JMD - Jamaican Dollar</option>
                <option value="KWD">KWD - Kuwaiti Dinar</option>
                <option value="KPW">KPW - North Korean Won</option>
                <option value="KRW">KRW - South Korean Won</option>
                <option value="LRD">LRD - Liberian Dollar</option>
                <option value="LBP">LBP - Lebanese Pound</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="NGN">NGN - Nigerian Naira</option>
                <option value="NZD">NZD - New Zealand Dollar</option>
                <option value="PHP">PHP - Philippine Peso</option>
                <option value="PKR">PKR - Pakistani Rupee</option>
                <option value="QAR">QAR - Qatari Rial</option>
                <option value="RSD">RSD - Serbian Dinar</option>
                <option value="RUB">RUB - Russian Ruble</option>
                <option value="SYP">SYP - Syrian Pound</option>
                <option value="TWD">TWD - Taiwan New Dollar</option>
                <option value="UAH">UAH - Ukrainian Hryvnia</option>
                <option value="USD">USD - United States Dollar</option>
                <option value="XCD">XCD - East Caribbean Dollar</option>
                <option value="YER">YER - Yemeni Rial</option>
                <option value="ZAR">ZAR - South African Rand</option>
                <option value="ZMW">ZMW - Zambian Kwacha</option>
              </select>
              </label>
              
            <label>
              To:
            <select className='currency' name="" value = {this.state.currency} onChange={this.handleChange}>
              <option value="AUD">AUD - Australian Dollar</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNH">CNH - Chinese Yuan Offshore</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="EGP">EGP - Egyptian Pound</option>
                <option value="ETB">ETB - Ethiopian Birr</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="GHS">GHS - Ghanaian Cedi</option>
                <option value="IDR">IDR -Indonesian Rupiah </option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="JMD">JMD - Jamaican Dollar</option>
                <option value="KWD">KWD - Kuwaiti Dinar</option>
                <option value="KPW">KPW - North Korean Won</option>
                <option value="KRW">KRW - South Korean Won</option>
                <option value="LRD">LRD - Liberian Dollar</option>
                <option value="LBP">LBP - Lebanese Pound</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="NGN">NGN - Nigerian Naira</option>
                <option value="NZD">NZD - New Zealand Dollar</option>
                <option value="PHP">PHP - Philippine Peso</option>
                <option value="PKR">PKR - Pakistani Rupee</option>
                <option value="QAR">QAR - Qatari Rial</option>
                <option value="RSD">RSD - Serbian Dinar</option>
                <option value="RUB">RUB - Russian Ruble</option>
                <option value="SYP">SYP - Syrian Pound</option>
                <option value="TWD">TWD - Taiwan New Dollar</option>
                <option value="UAH">UAH - Ukrainian Hryvnia</option>
                <option value="USD">USD - United States Dollar</option>
                <option value="XCD">XCD - East Caribbean Dollar</option>
                <option value="YER">YER - Yemeni Rial</option>
                <option value="ZAR">ZAR - South African Rand</option>
                <option value="ZMW">ZMW - Zambian Kwacha</option>
              </select>
            </label>
              <br />
              
              <section className='result'>
                <p className='resultReal'><span  className='paraOne'>{this.state.output1}</span> <br /><span className='paraTwo'> {this.state.amount} <span className='paraColor'>{this.state.output2}</span></span> </p>
                <p className='paraThree'> {this.state.output3}  {this.state.rate} {this.state.output4}</p>
              </section>
              <section className='button'>
                <p className='info'>We use the mid-market rate for our Converter. This is for informational purposes only</p>
                <button className='btn' onClick = {this.handleClick}>Convert</button>
              </section>
              
              
            </section>
            < App />
            
            
        </section>
        
        <section className='footer'>
              <h2>Supported Currencies</h2>
            <section className='footerSec'>
              <section>
                 <p>AUD - Australian Dollar</p>
                <p>BRL - Brazilian Real</p>
                <p>CAD - Canadian Dollar</p>
                <p>CNH - Chinese Yuan Offshore</p>
                <p>CNY - Chinese Yuan</p>
                <p>EGP - Egyptian Pound</p>
                <p>ETB - Ethiopian Birr</p>
                <p>EUR - Euro</p>
                <p>GBP - British Pound Sterling</p>
              </section>
              <section>
              <p>GHS - Ghanaian Cedi</p>
                <p>IDR -Indonesian Rupiah </p>
                <p>INR - Indian Rupee</p>
                <p>JPY - Japanese Yen</p>
                <p>JMD - Jamaican Dollar</p>
                <p>KWD - Kuwaiti Dinar</p>
                <p>KPW - North Korean Won</p>
                <p>KRW - South Korean Won</p>
                <p>LRD - Liberian Dollar</p>
              </section>
              <section>
              <p>LBP - Lebanese Pound</p>
                <p>MXN - Mexican Peso</p>
                <p>NGN - Nigerian Naira</p>
                <p>NZD - New Zealand Dollar</p>
                <p>PHP - Philippine Peso</p>
                <p>PKR - Pakistani Rupee</p>
                <p>QAR - Qatari Rial</p>
                <p>RSD - Serbian Dinar</p>
                <p>RUB - Russian Ruble</p>
              </section>
              <section>
              <p>SYP - Syrian Pound</p>
                <p>TWD - Taiwan New Dollar</p>
                <p>UAH - Ukrainian Hryvnia</p>
                <p>USD - United States Dollar</p>
                <p>XCD - East Caribbean Dollar</p>
                <p>YER - Yemeni Rial</p>
                <p>ZAR - South African Rand</p>
                <p>ZMW - Zambian Kwacha</p>
              </section>
            </section>
            </section>
      </div>
    )
  }
}
root.render(
  <React.StrictMode>
    <GetFetch />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
