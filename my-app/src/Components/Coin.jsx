import React, {useState} from 'react'
import Buttons from './Buttons'
import Remove from './Remove'
// import { Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'

function Coin({coin, all, removeFave}){
    const [postFaves, setPostFaves] = useState([])
    const {id, image, name, symbol, current_price, price_change_percentage_24h, market_cap_rank} = coin
    const favUrl = ('http://localhost:3000/fav_coins')
    
    let i = current_price
    let roundedNumber = (parseFloat(i).toFixed(3))
    let n = price_change_percentage_24h
    let roundedPercent = (parseFloat(n).toFixed(2))

    const handleFave=()=> {
        let addFaveItem={
            image: image,
            name: name,
            symbol: symbol,
            current_price: parseInt(current_price),
            price_change_percentage_24h: parseInt(price_change_percentage_24h)
        }
    
        fetch(favUrl, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(addFaveItem),
        })
        .then((res) => res.json())
        .then(faveData => setPostFaves(faveData))
     }
    

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
            {all ? <Buttons name={name} coin={coin} handleFave={handleFave}/> : <Remove id={id} removeFave={removeFave} coin={coin}/>}
             
            </td>
        </tr>
    )
}

export default Coin

