import React from "react";
import "./login.css";
import logo from "./logo.png";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function login() {
    console.log("Rendering Loginn Page");
    const [state, dispatch] = useStateValue()
    const signIn = () => {
      auth 
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
            
          })
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    return (
    // const signIn = (
      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <img src={logo} alt="" />
          <h2 className="text_sign">Please Sign In</h2>
          <button className="button-28" onClick={signIn}>Sign in with Google</button>
          <h2>&nbsp;</h2>
        </div>
      </div>
    // );
    )
  }
  

export default login;