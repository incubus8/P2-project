import React, { useEffect, useState } from 'react'

function FavCoins() {
    const [faves, setFaves] = useState([])
    const favUrl = ""


//     useEffect(()=> {
//         fetch(favUrl)
//         .then (res => res.json())
//         .then (favData => setFaves(favData))
//       }, [])
}

export default FavCoins

// store array with faveCoins, create foreign(unique) key
// hit remove button, remove it from the state array (filter)
// add button to get all coins, get request that reset original array