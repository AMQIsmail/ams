import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from '../contexts/Authcontext';
import { async } from "@firebase/util";

import'../style/style.css';
import'../style/quiz.css';
import signupL from '../images/signup.svg';


export default function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loding, setLoding] = useState();

  const  {signup} = useAuth();
  const history = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    // do validation
    if(password !== confirmPassword){
      return setError('password dont match!');
    }
  try{
      setError("");
      setLoding(true);
      await signup(email, password, username);
      history.push("/home");
  }catch(err){
   console.log(err);
   setLoding(false);
   setError('Fail to creat an account!');
  }

  }

  return (
   <Fragment>
    <main className="main">
      <div className="container">
        <h1>Create an account</h1>
        <div className="column">
          <div className="illustration">
            <img src={signupL} alt="Signup" />
            {/* <img src="./images/signup.svg" alt="Signup" /> */}
          </div>
          <form className="signup form" onSubmit={handleSubmit}>
            <div className="textInput">
              <input type="text" placeholder="Enter name" 
              required
              value={username} onChange={(e) => setUsername(e.target.value)}/>
              <span className="material-icons-outlined"> person </span>
            </div>

            <div className="textInput">
              <input type="text" placeholder="Enter email" required
              value={email} onChange={(e) => setEmail(e.target.value)} />
              <span className="material-icons-outlined"> alternate_email </span>
            </div>

            <div className="textInput">
              <input type="password" placeholder="Enter password" required
              value={password} onChange={(e) => setPassword(e.target.value)} />
              <span className="material-icons-outlined"> lock </span>
            </div>

            <div className="textInput">
              <input type="password" placeholder="Confirm password" required
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              <span className="material-icons-outlined"> lock_clock </span>
            </div>

            <label>
              <input type="checkbox" required
              value={agree} onChange={(e) => setAgree(e.target.value)}/>
              <span>I agree to the Terms & Conditions</span>
            </label>

            <button className="button" disabled={loding} type="submit">
              <span>Submit now</span>
            </button>
     
              {error && <p className="error">{error}</p>}

            <div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
          </form>
        </div>
      </div>
    </main>

    {/* <script src="./scripts/script.js"></script> */}
   </Fragment>
  );
}