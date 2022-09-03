import React, {Fragment, useState} from 'react';   
import { propTypes } from 'react-bootstrap/esm/Image';
import style from './newtodo.module.css';       

 const NewTodo = (props) => {

     const [todo, setTodo] = useState({title : '', desc : ''});
     const {title, desc} = todo;

      const handlChang = (event) => {
          const name = event.target.name;
          setTodo((oldTodo) => {
              return {...oldTodo, [name]: event.target.value}
          });
      };

      const handlSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title: '', desc:''});
   }
    return (
        <Fragment>
                 <form className={style.form} onSubmit={handlSubmit}>
                     <div className={style['form-field']}>
                            <label htmlFor='title'>Title:</label>
                            <input type='text' id='title' name='title' value={title} 
                            onChange={handlChang} />
                     </div>
                     <div className={style['form-field']}>
                            <label htmlFor='desc'>Desc:</label>
                            <textarea type='text' id='desc' name='desc' value={desc}
                            onChange={handlChang} />
                     </div>
                     <button type='submit'>Add AMQ</button>
                 </form>
        </Fragment>
    );
};
export default NewTodo;