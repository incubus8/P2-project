import React from 'react'
import Buttons from './Buttons'
import { Image, Reveal } from 'semantic-ui-react'



function Coin(coin){
    const {id, image, name, symbol, current_price, price_change_percentage_24h} = coin
    let i = current_price
    let roundedNumber = (parseFloat(i).toFixed(3))
    let n = price_change_percentage_24h
    let roundedPercent = (parseFloat(n).toFixed(2))


    return(
        <tr>
            <td>
                <img className = 'ui avatar image'src ={image} alt={name}/>
            </td >
                <td className="ui header">{name}</td>
                <td className="ui header">{symbol}</td>
                <td className="ui header">$ {roundedNumber}</td>
                <td className="ui header">{roundedPercent}%</td>
            <td>
             <Buttons/>
            </td>
        </tr>
    )
}

export default Coin

// class="ui avatar image"