import React, {useState} from 'react'

function Buttons(){
    const [favorite, setFavorite] = useState(false)
    
    function handleFavorite(){
        setFavorite(favorite => !favorite)
    }

    return(
        <div>
            {favorite ? (
            <button 
                onClick={handleFavorite}
                className="favorite-active">
                🤑  
            </button>
        ):(
            <button
                onClick={handleFavorite}
                className="favorite-inactive">
                😀  
            </button>
        )}
        </div>
     )

    
}

export default Buttons