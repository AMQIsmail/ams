import React, { Fragment } from "react";
import signup from './images/signup.svg';
import classes from './styles/Quiz.module.css';

export default function Illustration() {
  return (
   <Fragment>
        <div className={classes.illustration}>
            <img src={signup} alt="Signup" />
          </div>
   </Fragment>
  );
}