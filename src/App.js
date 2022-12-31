import React, {useState, useEffect} from 'react';
import './App.css';

function MyApp() {

  const [currency, setCurrency] = useState('BRL')
  const [rate, setRate] = useState('')
  const [eur, seteur] = useState('')
  const [gbp, setgbp] = useState('')
  const [jpy, setjpy] = useState('')
  const [cad, setcad] = useState('')
  const [ngn, setngn] = useState('')
  const [aud, setaud] = useState('')
  const [nzd, setnzd] = useState('')

  const [newrate, setnewRate] = useState('')
  const [neweur, setneweur] = useState('')
  const [newgbp, setnewgbp] = useState('')
  const [newjpy, setnewjpy] = useState('')
  const [newcad, setnewcad] = useState('')
  const [newngn, setnewngn] = useState('')
  const [newaud, setnewaud] = useState('')
  const [newnzd, setnewnzd] = useState('')

  const [yesterday, setYesterday] =useState('')

  const rateChange = parseFloat((rate - newrate)).toFixed(2)
  const eurChange = parseFloat((neweur - eur)).toFixed(2)
  const gbpChange = parseFloat((newgbp - gbp)).toFixed(2)
  const jpyChange = parseFloat((newjpy - jpy)).toFixed(2)
  const cadChange = parseFloat((newcad - cad)).toFixed(2)
  const ngnChange = parseFloat((newngn - ngn)).toFixed(2)
  const audChange = parseFloat((newaud - aud)).toFixed(2)
  const nzdChange = parseFloat((newnzd - nzd)).toFixed(2)
  const percent = "%"


//   const [today, setToday] = useState('')
//  const [changes, setChanges] = useState('')

  const handleChange = (e) => {
    setCurrency(e.target.value)
  }

 useEffect(() => {
  let date = new Date()
     date.setDate(date.getDate() -1)
    let newdate = date.toISOString().split('T')[0]
    setYesterday(newdate)
    console.log(newdate);
  return () => console.log('i unmount');
 }, [])
  


  useEffect(() => {
    const url = `https://api.getgeoapi.com/v2/currency/convert?api_key=8d1d6d598c52a4201f2f7ede34fa5869e5463c69&from=USD&to=${currency}&amount=1&format=json`
    // const curl = `https://api.apilayer.com/fixer/fluctuation?apikey=CWTC7We6DAzTLKQTf3wS8A5FE5MNHTwW&start_date=${yesterday}&end_date=${today}&base=USD&symbols=${currency}`
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
       const result = data.rates[currency].rate
         
        
        setRate(result)

       
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData()
  }, [currency])


  useEffect(() => {
    const url = `https://api.getgeoapi.com/v2/currency/convert?api_key=8d1d6d598c52a4201f2f7ede34fa5869e5463c69&from=USD&to=EUR,GBP,CAD,AUD,JPY,NGN,NZD&amount=1&format=json`

    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        const eur =  data.rates.EUR.rate
        seteur(eur)

        const gbp = data.rates.GBP.rate
        setgbp(gbp)

        const jpy = data.rates.JPY.rate
        setjpy(jpy)

        const cad = data.rates.CAD.rate
        setcad(cad)

        const ngn = data.rates.NGN.rate
        setngn(ngn)

        const aud = data.rates.AUD.rate
        setaud(aud)

        const nzd = data.rates.NZD.rate
        setnzd(nzd)

      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData()
  }, [])

useEffect(() => {
  const url = `https://api.getgeoapi.com/v2/currency/convert?api_key=8d1d6d598c52a4201f2f7ede34fa5869e5463c69&updated_date=${yesterday}from=USD&to=EUR,GBP,CAD,AUD,JPY,NGN,NZD,${currency}&amount=1&format=json`

  const fetchData = async () => {

    try {
      
      const res = await fetch(url)
      const data = await res.json()
      const eur =  data.rates.EUR.rate
        setneweur(eur)

        const gbp = data.rates.GBP.rate
        setnewgbp(gbp)

        const jpy = data.rates.JPY.rate
        setnewjpy(jpy)

        const cad = data.rates.CAD.rate
        setnewcad(cad)

        const ngn = data.rates.NGN.rate
        setnewngn(ngn)

        const aud = data.rates.AUD.rate
        setnewaud(aud)

        const nzd = data.rates.NZD.rate
        setnewnzd(nzd)

        const result = data.rates[currency].rate 
        setnewRate(result)


    } catch (error) {
      console.log("error", error);
    }
  }
  fetchData()
}, [yesterday, currency])

  return (
    <div>
      
      <section>
        <h2>Tife-Code Exchange Rates</h2> <br />
        <table>
          <tr >
            <th>Currency</th>
            <th>Amount</th>
            <th>Change in 24hours</th>
          </tr>
          <tr className="header">
            <th>US Dollar</th>
            <th>1</th>
            <th></th>
          </tr>
          <tr>
            <td>Euro</td>
            <td>{eur}</td>
            <td style={{
            color: eurChange > 0 ? 'green' : 'red'
          }}>{eurChange}{percent}</td>
          </tr>
          <tr>
            <td>British Pound</td>
            <td>{gbp}</td>
            <td style={{
            color: gbpChange > 0 ? 'green' : 'red'
          }}>{gbpChange}{percent}</td>
          </tr>
          <tr>
            <td>Japanese Yen</td>
            <td>{jpy}</td>
            <td style={{
            color: jpyChange > 0 ? 'green' : 'red'
          }}>{jpyChange}{percent}</td>
          </tr>
          <tr>
            <td>Canadian Dollar</td>
            <td>{cad}</td>
            <td style={{
            color: cadChange > 0 ? 'green' : 'red'
          }}>{cadChange}{percent}</td>
          </tr>
          <tr>
            <td>Nigerian naira</td>
            
            <td>{ngn}</td>
            <td style={{
            color: ngnChange > 0 ? 'green' : 'red'
          }}>{ngnChange}{percent}</td>
          </tr>
          <tr>
            <td>Australian Dollar</td>
            <td>{aud}</td>
            <td style={{
            color: audChange > 0 ? 'green' : 'red'
          }}>{audChange}{percent}</td>
          </tr>
          <tr>
            <td>New Zealand Dollar</td>
            <td>{nzd}</td>
            <td style={{
            color: nzdChange > 0 ? 'green' : 'red'
          }}> {nzdChange}{percent}</td>
          
          </tr>
          <tr>
            <td>{currency}</td>
            <td>{rate}</td>
            <td style={{
            color: rateChange > 0 ? 'green' : 'red'
          }}>{rateChange}{percent}</td>
          </tr>
        </table>

     
      </section>
     
      <select onChange = { (e) => handleChange(e)}>
                <option disabled ="disabled" style={{color: 'blue'}}> Add Cureency</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="CHN">CNH - Chinese Yuan Offshore</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="EGP">EGP - Egyptian Pound</option>
                <option value="ETB">ETB - Ethiopian Birr</option>
                <option value="GHS">GHS - Ghanaian Cedi</option>
                <option value="IDR">IDR -Indonesian Rupiah </option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="JMD">JMD - Jamaican Dollar</option>
                <option value="KWD">KWD - Kuwaiti Dinar</option>
                <option value="KPW">KPW - North Korean Won</option>
                <option value="KRW">KRW - South Korean Won</option>
                <option value="LRD">LRD - Liberian Dollar</option>
                <option value="LBP">LBP - Lebanese Pound</option>
                <option value="MXN">MXN - Mexican Peso</option>
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
      
     
    </div>
  )
}

  
function App() {
  return (
    <div className="App">
      <MyApp />
    </div>
  );
}

export default App;
