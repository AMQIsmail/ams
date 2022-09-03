import React, { Fragment, useState } from 'react';
import Navberr from '../../components/home_component/Nav';
import TodosApp from './todos';
import NewTodo from './NewTodo';   
import {v4 as uuidv4} from 'uuid';                  //npm install uuid 
import style from './home.module.css';

// const dummyTodos = [
//     {
//       id: 1,
//       title: 'Todo Title',
//       desc: 'Todo One Descripyion Is Here...'
//     },
//     {
//         id: 2,
//         title: 'Todo Title',
//         desc: 'Todo Two Descripyion Is Here...'
//       }
// ];

 const TodoIndex = () => {
  const [todos, setTodos] = useState([]);

  const handlAddTodo = (todo) => {
      setTodos((prevTodos) => {
          return [...prevTodos, { id: uuidv4(), todo}];
      });
      //console.log(todos);
  };
  
  const handlRemoveTodo = (id) => {
      //alert (id);
      setTodos((prevTodos) => {
        const filteredTodo = prevTodos.filter((todo) => todo.id !== id);
          return filteredTodo;
      });
  }
     return (
         <Fragment>
           <Navberr />
           <div className={style.container}>
           <h2 className={style.hading}>AMQ App One</h2>
           <NewTodo onAddTodo={handlAddTodo} />             
              <TodosApp TodoPass={todos} onRemoveTodo={handlRemoveTodo} />
           </div>
           
         </Fragment>
     );
 };
 export default TodoIndex;






// import Navberr from "../nav_component/Nav";
// class TodoIndex extends Component{
    
//     render(){


//          return (
//              <Fragment>
//                  <Navberr />
//                  <h1>Todo App</h1>
//              </Fragment>
//  )
//  }
//  }
//  export default TodoIndex;