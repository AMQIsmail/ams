import React from 'react';
import classNames from './styles/Quiz.module.css';
//import './styles/account.css';

export default function Account(){
   return (
      <div className={classNames.account}>
      <span className='material-icons-outlined' title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
       <span className="material-icons-outlined" title="Logout"> logout </span>
    </div>
   );
}