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
    <tr> 
       {/* <td>
            <img className='ui avatar image'src ={image} alt={name}/>
        </td>
      */}
            <td className="ui inverted segment">Market Rank 
             | {market_cap_rank} </td>
            <td className="ui inverted segment">High 24h ${high_24h}</td>
            {/* <td className="ui inverted segment"> High 24h {high_24h}</td>
            <td className="ui inverted segment"> High 24h {low_24h}</td> */}
            <td className="ui inverted segment">All time High ${roundedNumber}</td>
            <td className="ui inverted segment">All time Low  ${roundedPercent}</td>
    </tr>
    )
}


export default CoinDetail