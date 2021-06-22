import React from 'react'
import Coin from './Coin'
import { Segment } from 'semantic-ui-react'
import { Header, Image, Table } from 'semantic-ui-react'


function AllCoins({coins}){
    const coinsList = coins.map(coin => <Coin key={coin.id} {...coin} />
    )
    
    return(
        <div className="table"> 
            <table className= "ui blue table">
                <tbody>
                    <tr>
                        <th> 
                            <h3>Logo</h3>
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