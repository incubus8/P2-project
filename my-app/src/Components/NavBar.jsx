import React from 'react'
import { Input, Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'


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
    </div>
      );
    }
    

export default NavBar
