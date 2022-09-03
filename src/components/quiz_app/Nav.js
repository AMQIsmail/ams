import React from 'react';
import Account from './Account';
import classNames from './styles/Nav.module.css';
import logo from './images/logo-bg.png';


export default function Nav(){
    return (
        <nav className={classNames.nav}>
        <ul>
          <li>
            <a href="index.html" className={classNames.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    );
 }