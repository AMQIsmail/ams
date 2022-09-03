import React, { Children, Fragment } from "react";
import Texinput from "./TexInput";

import './style/style.css';

export default function Form({Children}) {
  return (
   <Fragment>
      <form className="signup form" action="#">
      <Texinput type="text" placeholder="Enter Name" icon="person"/>
      <Texinput type="email" placeholder="Email address" icon="alternate_email"/>
        {Children}
      </form>
   </Fragment>
  );
}