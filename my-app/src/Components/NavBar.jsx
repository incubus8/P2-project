import React from 'react'
import { Input } from 'semantic-ui-react'


function NavBar({search, setSearch}){

    return (
        <div className="ui icon input">
            <input onChange={(e) => setSearch(e.target.value)} 
                type="text" 
                value={search}
                placeholder="Search..."/>
            <i aria-hidden="true" 
                 className="search circular link icon">
            </i>
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