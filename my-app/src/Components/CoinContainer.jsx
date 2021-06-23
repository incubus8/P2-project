import React, { useState, useEffect } from 'react'
import AllCoins from './AllCoins'
import FavCoins from './FavCoins'
import NavBar from './NavBar'
import Buttons from './Buttons'
import Coin from './Coin'

function CoinContainer(){
    const [coins, setCoins] = useState([])
    const coinUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=17&page=1&sparkline=false"
    const [search, setSearch] = useState("")
    const [toggle, setToggle] = useState(false)
    const [sort, setSort] = useState('')

    
    const handleToggle = () =>{
       setToggle(toggle => !toggle)
   }

    useEffect(()=> {
      fetch(coinUrl)
      .then (res => res.json())
      .then (coinData => setCoins(coinData))
    }, [])


    function removeCoin (id){
        const newList = coins.filter(coin => coin.id !== id);
        setCoins(newList);
    }

    const filteredCoin = coins.filter(coin => {
        return (coin.name.toLowerCase().includes(search.toLowerCase()))
        ||
        (coin.symbol.toLowerCase().includes(search.toLowerCase()))
      })
      
      const handleSort = () => {

        if (sort === "Name"){
             return filteredCoin.sort((a, b) =>a.name.localeCompare(b.name))  
        }else if (sort === "Symbol"){
            return filteredCoin.sort((a, b) =>a.symbol.localeCompare(b.symbol))  
        }else if (sort === "Current Price"){
            return filteredCoin.sort((a, b) =>(a.current_price < b.current_price) ? 1 : -1)  
        }else if (sort === "Change in 24h"){
            return filteredCoin.sort((a, b) => 
            parseInt(b.price_change_percentage_24h*100)
             - 
            parseInt(a.price_change_percentage_24h*100)
            )   
        }else {
            return filteredCoin
    } 
}
    return (
        <main>
            <NavBar 
                search={search} 
                setSearch={setSearch}
                handleToggle={handleToggle}
                toggle={toggle}
            />
            <AllCoins 
                coins={handleSort()} 
                setSort={setSort}
                removeCoin={removeCoin}
             />
             {/* <FavCoins/> */}
        </main>
    )
}

export default CoinContainer