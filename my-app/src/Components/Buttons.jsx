import React, {useState} from 'react'
import { Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'


function Buttons({id}){
    const [favorite, setFavorite] = useState(false)
    
    function handleFavorite(){
        setFavorite(favorite => !favorite)
    }

    // console.log();

    const removeCoin = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
          method: 'DELETE',
        })
         removeCoin(id); 
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
                {/* <button 
                    onClick={removeCoin}
                    className="ui blue basic button">
                        😢
                </button> */}
        </div>
    )
}
 

export default Buttons