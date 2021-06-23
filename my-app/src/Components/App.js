import React from 'react'
import Logo from './Logo'
import 'semantic-ui-css/semantic.min.css'
import CoinContainer from './CoinContainer'
import Chart from './Chart'
import Login from './Login'
import NavBar from './NavBar'
import { Switch, Route } from "react-router-dom";
import { useState } from 'react'
import CoinDetail from './CoinDetail'
import  Home from './Home'

function App(){
  const [page, setPage] = useState("/")

    return(
      <div>
          {/* <Login /> */}
           <Logo />
          <CoinContainer />
      </div>

      //  <div>
      //     <NavBar onChangePage={setPage} />
      //     <Switch>
      //           <Route path="/coindetail">
      //               <CoinDetail />
      //           </Route>
      //           <Route path="/coincontainer">
      //               <CoinContainer />
      //           </Route>
      //           <Route exact path="/">
      //               <Home />
      //           </Route>
      //           <Route path="/money">
      //               <h1>404 not found</h1>
      //           </Route>
      //     </Switch>
      // </div>
)
}

export default App
