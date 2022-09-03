import React, {Fragment} from 'react';   
import style from './todo.module.css';       

 const TodoApp = (props) => {
    const {title, desc} = props.todoapp;
    const  { id } = props;

    const handlClick = (id) => {
        props.onRemoveItem(id);
    };
    return (
        <Fragment>
                 <article className={style.todo}>
                    <div>
                    <h2>{title}</h2>
                     <p>{desc}</p>
                    </div>
                    <div>
                        <button className={style.btn} onClick={() => { 
                            handlClick(id);}}>
                            <i className='fa fa-trash fa-2x'></i>  
                        </button>
                    </div>
                 </article>
             </Fragment>
    );
};
export default TodoApp;