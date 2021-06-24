import React, { useEffect, useState } from 'react'

function FavCoins() {
    const [faves, setFaves] = useState([])
    const favUrl = "http://localhost:3000/fav_coins"
    const {image, name, symbol, current_price, price_change_percentage_24h} = faves

    let i = current_price
    let roundedNumber = (parseFloat(i).toFixed(3))
    let n = price_change_percentage_24h
    let roundedPercent = (parseFloat(n).toFixed(2))
    
    
    useEffect(()=> {
        fetch(favUrl)
        .then (res => res.json())
        .then (favesData => setFaves(favesData))
    }, [])
    
    
    console.log('faves', faves);
    
      return(
        <div className="table"> 
            <table className="ui blue table">
                <tr>
                    
                    <td >
                        <img className='ui avatar image' src ={image} alt={name}/> 
                    </td >
                    <td 
                    className="ui small header">{name}</td>
                        <td className="ui small header">{symbol}</td>
                        <td className="ui small header">$ {roundedNumber}</td>
                        <td className="ui small header">{roundedPercent}%</td>
                </tr>
            </table>
        </div>
    )

    // const handleFave=()=> {
        // let addFaveItem={
        //     image: image,
        //     name: name,
        //     symbol: symbol,
        //     current_price: parseInt(current_price),
        //     price_change_percentage_24h: parseInt(price_change_percentage_24h),
        // }

    // fetch(favUrl, {
    //     method: 'POST',
    //     headers: { 
    //         'Content-Type': 'application/json' 
    //         },
    //     body: JSON.stringify(addFaveItem),
    //     })
    //     .then((res) => res.json())
    //     .then(faveData => setFaves(faveData))
    // }

    // return(
    //     <div onClick={handleFave}>

    //     </div>
    // )
}

export default FavCoins

// store array with faveCoins, create foreign(unique) key
// hit remove button, remove it from the state array (filter)
// add button to get all coins, get request that reset original array