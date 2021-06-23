import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, Image, Table, Button, Label, Icon, Menu } from 'semantic-ui-react'



function Login() {
    return (
      <div className="login">
        <form className='ui form'>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input 
                className='ui primary button'
                type="submit" 
                value="Login" 
                />
        </form>
      </div>
    );
  } 

  export default Login
