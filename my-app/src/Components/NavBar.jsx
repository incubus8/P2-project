import React from 'react'
import { Input } from 'semantic-ui-react'


function NavBar({search, setSearch}){

    return (
    <div className = 'NavBar'>
        <div className="ui icon input">
            <button className ='Login'>
                Login
            </button>            
             <button className ='Favorite'>
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


{/* <div className="ui icon input">
<input
  type="text"
  value={search}
  placeholder="Search..."
  onChange={(e) => setSearch(e.target.value)}
/> */}