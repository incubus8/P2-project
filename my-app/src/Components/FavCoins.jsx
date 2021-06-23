import React, { useEffect, useState } from 'react'

function FavCoins() {
    const [faves, setFaves] = useState([])
    const favUrl = ""


    useEffect(()=> {
        fetch(favUrl)
        .then (res => res.json())
        .then (favData => setFaves(favData))
      }, [])

}

export default FavCoins