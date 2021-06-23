import React, {useState} from 'react'
import { Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'


function Buttons({id}){
    const [favorite, setFavorite] = useState(false)
    
    function handleFavorite(){
        setFavorite(favorite => !favorite)
    }


        return(
        <div>
            {favorite ? (
            <button 
                onClick={handleFavorite}
                className="ui blue basic button">
                🤑  
            </button>
        ):(
            <button
                onClick={handleFavorite}
                className="ui blue basic button">
                😀  
            </button>)
            }
                <button className="ui blue basic button">
                        😢
                </button>
        </div>
    )
}
 

export default Buttons