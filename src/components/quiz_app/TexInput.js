import React, { Fragment } from "react";
import './style/style.css';

export default function Texinput({icon, ...rest}) {
  return (
   <Fragment>
       <div class="textInput">
              <input {...rest} />
              <span className="material-icons-outlined"> {icon} </span>
            </div>
   </Fragment>
  );
}