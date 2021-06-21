import React from 'react'
import Coin from './Coin'


function AllCoins({coins}){
    const coinsList = coins.map(coin => <Coin key={coin.id} {...coin} />
    )
    
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <h3>Coin</h3>
                        </th>
                        <th>
                            <h3>Name</h3>
                        </th>
                        <th>
                            <h3>Symbol</h3>
                        </th>
                        <th>
                            <h3>Current Price</h3>
                        </th>
                        <th>
                            <h3>Favorite</h3>
                        </th>
                    </tr> 
                    {coinsList}
                </tbody>
            </table>
        </div>
    )
}

export default AllCoins