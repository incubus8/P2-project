import React, {useState} from 'react'


function Remove({id, removeFave}){
    
    function removeFromFave(){
        fetch(`http://localhost:3000/fav_coins/${id}`, {
            method: 'DELETE',
        })
    // removeFave(id)    
    }

      return(
        <div>
            <button className="ui blue basic button"
            onClick={removeFromFave}>
                       😢
            </button>
        </div>
    )
}
 

export default Remove