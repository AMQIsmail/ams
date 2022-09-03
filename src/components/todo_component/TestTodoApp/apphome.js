import React, { Fragment } from 'react';
import Appass from './apppass';

const dummyTodos = [
    {
      id: 1,
      title: 'Props',
      desc: 'I am from Props'
    },
    {
        id: 2,
        title: 'Todo',
        desc: 'I am from Todo'
      },
      {
        id: 3,
        title: 'Test',
        desc: 'I am from Test'
      }
];

const AppHome = () => {
       return (
           <Fragment>
              <div>
              <Appass axtraData="Axtra Data Load, I am From Attributes." TodoPass={dummyTodos}/>
              </div>
           </Fragment>
       );
   };
   export default AppHome;