import React from 'react'
import Buttons from './Buttons'


function Coin(coin){
    const {id, image, name, symbol, current_price} = coin

    return(
        <tr>
            <td>
                <img className = 'coinLogo'src ={image} alt={name}/>
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