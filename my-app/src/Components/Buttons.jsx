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
                type="hollow-primary"
                onClick={handleFavorite}
                className="ui blue basic button">
                🤑  
            </button>
        ):(
            <button
                onClick={handleFavorite}
                className="ui blue basic button">
                {/* className="ui red basic button"> */}
                😀  
            </button>
        )}
        </div>
     )

    
}

export default Buttons