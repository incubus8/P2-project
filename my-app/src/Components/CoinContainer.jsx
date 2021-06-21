import React, { useState, useEffect } from 'react'
import AllCoins from './AllCoins'
import FavCoins from './FavCoins'
import NavBar from './NavBar'


function CoinContainer(){
    const [coins, setCoins] = useState([])
    const coinUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    const [search, setSearch] = useState("")

    useEffect(()=> {
      fetch(coinUrl)
      .then (res => res.json())
      .then (coinData => setCoins(coinData))
    }, [])

     // console.log(coins); 

    // function removeCoin (id){
    //     const newList = coins.filter(coin => plant.id !== id);
    //     setCoins(newList);
    // }

    const filteredCoin = coins.filter(coin => {
        return (coin.name.toLowerCase().includes(search.toLowerCase()))
      })
    

    return (
        <main>
            <NavBar search={search} setSearch={setSearch} />
            <AllCoins coins = {filteredCoin}/>
             {/* <FavCoins/> */}
        </main>
    )
}

export default CoinContainer