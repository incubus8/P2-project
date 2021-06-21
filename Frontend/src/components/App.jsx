import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import CoinContainer from './CoinContainer'

 

function App(){
    const [coins, setCoins] = useState([])
    const coinUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"

    useEffect(()=> {
      fetch(coinUrl)
      .then (res => res.json())
      .then (coinData => setCoins(coinData))
    }, [])

    console.log(coins); 
    
    return(
        <div>
            <CoinContainer coins={coins}/>
        </div>
)
}


export default App