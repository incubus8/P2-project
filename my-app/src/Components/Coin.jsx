import React from 'react'


function Coin(coin){
    const {id, image, name, symbol, current_price} = coin

    return(
        <tr>
            <img className = 'coinLogo'src ={image} alt={name}/>
            <td>{name}</td>
            <td>{symbol}</td>
            <td>${current_price}</td>
        </tr>
    )
}

export default Coin