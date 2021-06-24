import React, { useEffect, useState } from 'react'
import Coin from './Coin'

function FavCoins({setSort, sort}) {
    const [faves, setFaves] = useState([])
    const favUrl = "http://localhost:3000/fav_coins"

    let favCards = faves.map(fave => <Coin key={fave.id} all={false} coin={fave} removeFave={removeFave} />)

    function removeFave(){
        const favArr = favCards.filter(fave => fave.id !== fave.id);
        setFaves(favArr)    
      }


    useEffect(()=> {
        fetch(favUrl)
        .then (res => res.json())
        .then (favesData => setFaves(favesData))
    }, [])

    console.log('faves', favCards);
    
      return(
        <div className="table"> 
            <table className="ui blue table">
                <tbody>
                    <tr>
                        <th> 
                            <h3 className="ui blue header">Logo</h3>
                        </th>
                        <th>
                            <h3 className="ui blue header"
                            onClick={(e) => setSort(e.target.textContent)}>Name</h3>
                        </th>
                        <th>
                            <h3 className="ui blue header"
                            onClick={(e) => setSort(e.target.textContent)}>Symbol</h3>
                        </th>
                        <th>
                            <h3 className="ui blue header"
                            onClick={(e) => setSort(e.target.textContent)}>Current Price</h3>
                        </th>
                        <th>
                            <h3 
                            className="ui blue header"
                            onClick={(e) => setSort(e.target.textContent)}>Change in 24h</h3>
                        </th>
                        <th>
                            <h3 
                            className="ui blue header"
                            onClick={(e) => setSort(e.target.textContent)}>Market Cap Rank</h3>
                        </th>
                        <th>
                            <h3 className="ui blue header"> Remove</h3>
                        </th>
                    </tr> 
                    {favCards}
                </tbody>
            </table>
        </div>
    )
}

export default FavCoins

