import React from 'react'

function NavBar({search, setSearch}){

    return (
        <div className="searchbar">
          <input
            type="text"
            id="search"
            value={search}
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      );
    }
    

export default NavBar