import React, { Children, Fragment } from "react";

import Nav from "./Nav";
import Home from "./pages/Home";

import classNames from './styles/Quiz.module.css';
import './styles/Quiz.css';

export default function Layout({Children}) {
  return (
   <Fragment>
     <Nav />
    <main className={classNames.main}>
        <div className={classNames.container}>
            {Children}
            <Home />
        </div>
    </main>
  
   </Fragment>
  );
}