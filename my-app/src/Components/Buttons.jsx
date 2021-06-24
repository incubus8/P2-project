import React, {useState} from 'react'
import { Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'


function Buttons({coin, handleFave}){
    const [favorite, setFavorite] = useState(false)
    
    function handleFavorite(){
        setFavorite(favorite => !favorite)
    }

    // function handleClicks(){
    //     this.handleFavorite()
    //     this.handleFave()
    // }

     console.log('coins', coin);


        return(
        <div>
            {favorite ? (
            <button 
                onClick={() =>{handleFave(); handleFavorite()}}
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