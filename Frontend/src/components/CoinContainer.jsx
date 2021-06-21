import React from 'react'
import AllCoins from './AllCoins'
import FavCoins from './FavCoins'
import Buttons from './Buttons'


function CoinContainer({coins}){

    return (
        <div>
            <AllCoins/>
            <FavCoins/>
            <Buttons/>
        </div>
    )
}

export default CoinContainer