import React, { useState } from 'react'
import Coin from './Coin'
import { Segment } from 'semantic-ui-react'
import { Header, Image, Table } from 'semantic-ui-react'


function AllCoins({coins, setSort}){
    const coinsList = coins.map(coin => <Coin key={coin.id} {...coin} />
    )


        
    console.log(coins);
    return(
        <div className="table"> 
            <table className= "ui blue table">
                <tbody>
                    <tr>
                        <th > 
                            <h3>Logo</h3>
                        </th>
                        <th>
                            <h3 onClick={(e) => setSort(e.target.textContent)}>Name</h3>
                        </th>
                        <th>
                            <h3 onClick={(e) => setSort(e.target.textContent)}>Symbol</h3>
                        </th>
                        <th>
                            <h3 onClick={(e) => setSort(e.target.textContent)}>Current Price</h3>
                        </th>
                        <th>
                            <h3 onClick={(e) => setSort(e.target.textContent)}>Change in 24h</h3>
                        </th>
                        <th>
                            <h3 onClick={(e) => setSort(e.target.textContent)}>Favorite</h3>
                        </th>
                    </tr> 
                    {coinsList}
                </tbody>
            </table>
        </div>
    )
}

export default AllCoins