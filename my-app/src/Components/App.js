import React from 'react'
import Logo from './Logo'
import 'semantic-ui-css/semantic.min.css'
import CoinContainer from './CoinContainer'
import { useState } from 'react'
import CoinDetail from './CoinDetail'
import Chart from './Chart'
import Login from './Login'
import {Bar} from 'react-chartjs-2'
import NavBar from './NavBar'
import {NavLink, Link, BrowserRouter, Switch, Route } from "react-router-dom";

function App(){
    const [logIn, setLogIn]= useState(true)
    return(
      <div className='App'>
          {/* {logIn ? <CoinContainer /> : <Login /> } */}
          {/* <Login /> */}
          {/* <CoinContainer /> */}
          <Chart />
      </div>
)
}
export default App