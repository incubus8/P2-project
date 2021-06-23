import React, {useState} from 'react'
// import { Input, Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'
import { NavLink, Link, Switch, Route  } from "react-router-dom"
import CoinContainer from './CoinContainer'

function NavBar({search, setSearch, handleToggle}){
    // const [toggle, setToggle] = useState(false)
    
    // function handleToggle(){
    //     setToggle(toggle => !toggle)
    // }

    return (
    <div className = 'NavBar'>
        <div className="ui focus input">
            <button className ='ui basic blue button'>
                Logout
            </button>            
             <button className ='ui basic blue button'
                onClick={handleToggle}
                >             
                Favorites List
            </button>
            <input onChange={(e) => setSearch(e.target.value)} 
                type="text" 
                value={search}
                placeholder="Search name or symbol..."/>
        </div>
        {/* <switch> 
            <Route> 
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/CoinContainer">Coincontainer</NavLink>
            </Route>
         </switch> */}
    </div>
      );
    }
    

export default NavBar
