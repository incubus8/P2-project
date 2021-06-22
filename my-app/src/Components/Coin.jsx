import React from 'react'
import Buttons from './Buttons'
import { Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'


function Coin(coin, removeCoin){
    const {id, image, name, symbol, current_price, price_change_percentage_24h} = coin
    
    let i = current_price
    let roundedNumber = (parseFloat(i).toFixed(3))
    let n = price_change_percentage_24h
    let roundedPercent = (parseFloat(n).toFixed(2))

    // const removeCoin = () => {
    //     fetch(`https://api.coingecko.com/${id}`, {
    //       method: 'DELETE',
    //     })
    //      removeCoin(id); 
    //     }

    return(
        <tr>
            <td >
                <img className='ui avatar image'src ={image} alt={name}/>
            </td >
                <td className="ui small header">{name}</td>
                <td className="ui small header">{symbol}</td>
                <td className="ui small header">$ {roundedNumber}</td>
                <td className="ui small header">{roundedPercent}%</td>
            <td>
             <Buttons removeCoin={removeCoin} id={id}/>
            </td>
        </tr>
    )
}

// removeCoin={removeCoin}

export default Coin

