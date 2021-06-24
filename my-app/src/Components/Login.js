import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'
import { useState } from 'react'
import CoinContainer from "./CoinContainer";



function Login(login) {
  const [submit, setSubmit] = useState('')
  
  function handleSubmit(e){
    e.preventDefault();
    setSubmit(submit => !submit)
    console.log(submit);
  }

    return (
      <div className="login">
        {/* {submit ? */}
        <form 
        onSubmit={handleSubmit} 
        className='ui form'> 
        {/* <CoinContainer/> */}
          <div>
            <input type="text" name="username" placeholder="Username" 
            //onChange={(e) => setdetails(e.target.value)} value={details}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input className='ui primary button' type="submit" value="Login"/>
        </form>
      </div>
    );
  } 

  export default Login
