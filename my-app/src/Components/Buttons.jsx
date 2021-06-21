import React, {useState} from 'react'
import { Button } from 'semantic-ui-react'


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
                className="favorite-active">
                {/* className="ui red basic button"> */}
                😀  
            </button>
        )}
        </div>
     )

    
}

export default Buttons