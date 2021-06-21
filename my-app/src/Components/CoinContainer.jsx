import React, { useState, useEffect } from 'react'
import AllCoins from './AllCoins'
import FavCoins from './FavCoins'


function CoinContainer(){
    const [coins, setCoins] = useState([])
    const coinUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"


    useEffect(()=> {
      fetch(coinUrl)
      .then (res => res.json())
      .then (coinData => setCoins(coinData))
    }, [])

    console.log(coins); 
    return (
        <div>
            <AllCoins coins = {coins}/>
             {/* <FavCoins/> */}
        </div>
    )
}

export default CoinContainer