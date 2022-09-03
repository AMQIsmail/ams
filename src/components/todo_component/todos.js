import React, {Fragment} from 'react';
import TodoApp from './todo';
import style from './todos.module.css';

 const TodosApp = (props) => {
    //  console.log(props.TodoPass);
    return (
        <Fragment>
                 <section className={style.todos}>
                    {
                         props.TodoPass.map((todo) => (
                             <TodoApp 
                             key={todo.id} 
                             todoapp={todo.todo} 
                             id={todo.id} 
                             onRemoveItem={props.onRemoveTodo}
                             />
                         ))}
                 </section>
             </Fragment>
    );
};
export default TodosApp;