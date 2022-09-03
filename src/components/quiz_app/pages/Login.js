import React, { Fragment } from "react";
import'../style/style.css';
import'../style/quiz.css';
import login from '../images/login.svg';

export default function Login() {
  return (
   <Fragment>
    <main class="main">
      <div class="container">
        <h1>Login to your account</h1>
        <div class="column">
          <div class="illustration">
            <img src={login} alt="Login" />
            {/* <img src="./images/login.svg" alt="Login" /> */}
          </div>
          <form class="login form" action="#">
            <div class="textInput">
              <input type="text" placeholder="Enter email" />
              <span class="material-icons-outlined"> alternate_email </span>
            </div>

            <div class="textInput">
              <input type="password" placeholder="Enter password" />
              <span class="material-icons-outlined"> lock </span>
            </div>

            <button class="button">
              <span>Submit now</span>
            </button>

            <div class="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
          </form>
        </div>
      </div>
    </main>


    {/* <script src="./scripts/script.js"></script> */}
   </Fragment>
  );
}