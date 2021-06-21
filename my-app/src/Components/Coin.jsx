import React from 'react'
import Buttons from './Buttons'


function Coin(coin){
    const {id, image, name, symbol, current_price} = coin

    return(
        <tr>
            <img className = 'coinLogo'src ={image} alt={name}/>
            <td>{name}</td>
            <td>{symbol}</td>
            <td>${current_price}</td>
            <Buttons/>
        </tr>
    )
}

export default Coin