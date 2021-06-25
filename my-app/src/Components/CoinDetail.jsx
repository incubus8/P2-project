import React from 'react'
import { Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'


function CoinDetail({coin}){
    console.log(coin);

    const {id, image, name, symbol, current_price, price_change_percentage_24h, ath, atl, market_cap_rank, high_24h, low_24h, max_supply} = coin

    let z = ath
    let roundedNumber = (parseFloat(z).toFixed(3))
    let t = atl
    let roundedPercent = (parseFloat(t).toFixed(2))


 return(
    <tr className="ui blue card"> 
       {/* <td>
            <img className='ui avatar image'src ={image} alt={name}/>
        </td>
      */}
            <td className="ui raised card">Market Rank 
             | {market_cap_rank} 
             </td>
            <td className="ui raised card">High 24h
             ${high_24h}
            </td>
            {/* <td className="ui raised card"> High 24h {high_24h}</td>
            <td className="ui raised card"> High 24h {low_24h}</td> */}
            <td className="ui raised card">All time High 
            ${roundedNumber}
            </td>
            <td className="ui raised card">All time Low 
             ${roundedPercent}
            </td>
    </tr>
    )
}


export default CoinDetail