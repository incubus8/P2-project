import React from 'react'
import Logo from './Logo'
import 'semantic-ui-css/semantic.min.css'
import CoinContainer from './CoinContainer'
import Chart from './Chart'
import Login from './Login'
import NavBar from './NavBar'
import {NavLink, Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from 'react'
import CoinDetail from './CoinDetail'
import  Home from './Home'

function App(){
    return(
      <div>
          {/* <Login /> */}
          <CoinContainer />
      </div>
)
}

export default App
