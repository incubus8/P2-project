import React from 'react'
import Buttons from './Buttons'
import { Image, Reveal } from 'semantic-ui-react'



function Coin(coin){
    const {id, image, name, symbol, current_price} = coin

    return(
        <tr>
            <td>
                <img className = 'ui avatar image'src ={image} alt={name}/>
            </td >
                <td className="ui header">{name}</td>
                <td className="ui header">{symbol}</td>
                <td className="ui header">${current_price}</td>
            <td>
             <Buttons/>
            </td>
        </tr>
    )
}

export default Coin

// class="ui avatar image"