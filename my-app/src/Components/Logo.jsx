import React from 'react'
import Image from './Images/Diamond_Hands.jpeg'


function Logo(){
    return  (
       <div className='logo'> 
             <img src={Image} width='200px' height='200px'/>
      </div>
    )
}


export default Logo