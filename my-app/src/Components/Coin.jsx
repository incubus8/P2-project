import React from 'react'
import Buttons from './Buttons'
import { Image } from 'semantic-ui-react'




function Coin(coin){
    const {id, image, name, symbol, current_price} = coin

    return(
        <tr className= "">
            <td>
                <img className = 'ui avatar image'src ={image} alt={name}/>
            </td>
                <td>{name}</td>
                <td>{symbol}</td>
                <td>${current_price}</td>
            <td>
             <Buttons/>
            </td>
        </tr>
    )
}

export default Coin

// class="ui avatar image"