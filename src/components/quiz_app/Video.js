import React, { Fragment } from "react";
import './style/grid-list.css';
import thum from './images/3.jpg';

export default function Video() {
  return (
   <Fragment>
     <a href="quiz.html"
            ><div className="video">
              <img src={thum} alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className="video">
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
          </a>
   </Fragment>
  );
}