import React from 'react'


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
            <td className="ui small header">Market Rank 
             | {market_cap_rank} </td>
            <td className="ui small header">All time High ${atl}</td>
            {/* <td className="ui small header"> High 24h {high_24h}</td>
            <td className="ui small header"> High 24h {low_24h}</td> */}
            <td className="ui small header">All time High ${roundedNumber}</td>
            <td className="ui small header">All time Low  ${roundedPercent}</td>
            <td className="ui small header">$ {ath}</td>
    
    </tr>
    )
}


export default CoinDetail