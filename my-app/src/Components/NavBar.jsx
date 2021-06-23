import React from 'react'
import { Input, Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'
import { NavLink, Link, Switch, Route  } from "react-router-dom"

function NavBar({search, setSearch}){

    return (
    <div className = 'NavBar'>
        <div className="ui focus input">
            <button className ='ui basic blue button'>
                Login
            </button>            
             <button className ='ui basic blue button'>
                Favorites List
            </button>
            <input onChange={(e) => setSearch(e.target.value)} 
                type="text" 
                value={search}
                placeholder="Search name or symbol..."/>
        </div>
        {/* <switch> 
            <Route> 
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/CoinContainer">Coincontainer</NavLink>
                    <NavLink to="/CoinDetail">Coindetail</NavLink>
                </nav>
            </Route>
         </switch> */}
    </div>
      );
    }
    

export default NavBar
