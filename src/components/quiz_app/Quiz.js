import React, { Fragment } from "react";
import Layout from "./Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quizz from "./pages/Quizz";
import Result from "./pages/Result";

import {AuthProvider} from './contexts/Authcontext';


import './styles/Quiz.css';

export default function QuizC() {
  return (
   <Fragment>
    <AuthProvider>
    <Layout />
<br></br>
<br></br>
<br></br>
<br></br>
<p>sign up  Page 2</p>
<hr />
<Signup />


<br></br>
<br></br>
<br></br>
<br></br>
<p>Log in  Page 3</p>
<hr />
<Login />

<br></br>
<br></br>
<br></br>
<br></br>
<p>Quiz Page 4</p>
<hr />
<Quizz />

<br></br>
<br></br>
<br></br>
<br></br>
<p>Result Page 5</p>
<hr />
<Result />
</AuthProvider>
   </Fragment>
  );
}
