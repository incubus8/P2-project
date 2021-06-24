import React, {useState} from 'react'
import { Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'


function Buttons({coin, handlePost}){
    const [favorite, setFavorite] = useState(false)
    
    function handleFavorite(){
        setFavorite(favorite => !favorite)
    }

    function handleClicks(){
        handleFavorite()
        handlePost()
    }

     console.log('coins', coin);


        return(
        <div>
            {favorite ? (
            <button 
                onClick={handleClicks}
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