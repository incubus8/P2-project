import React, {useState} from 'react'
// import { Input, Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'
import { NavLink, Link, Switch, Route  } from "react-router-dom"
import CoinContainer from './CoinContainer'

function NavBar({search, setSearch, setToggle, toggle}){
    const [changeState, setChangeState] = useState(false)
    
    function handleToggle(){
        setChangeState(changeState => !changeState)
    }

    function handleLists(){
        handleToggle()
        setToggle(!toggle)
    }

    return (
    <div className = 'NavBar'>
        <div className="ui focus input">
             <button className ='ui basic blue button'
                onClick={handleLists}
                >             
                {changeState ? "All Coins" : "Favorite Coins"}
            </button>
            <input onChange={(e) => setSearch(e.target.value)} 
                type="text" 
                value={search}
                placeholder="Search name or symbol..."/>
        </div>
    </div>
      );
    }
    

export default NavBar
