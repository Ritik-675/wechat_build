import React from "react";
import "./login.css";
import logo from "./logo.png";

function login() {
    console.log("Rendering Loginn Page");
    const signIn = (
      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <img src={logo} alt="" />
          <h2 className="text_sign">Please Sign In</h2>
          <button className="button-28">Sign in with Google</button>
          {/* <input type="email" placeholder="email" />
          <input type="password" placeholder="password" /> */}
          <h2>&nbsp;</h2>
        </div>
      </div>
    );
  }
  

export default login;
