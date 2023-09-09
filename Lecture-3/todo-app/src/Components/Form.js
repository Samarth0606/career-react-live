import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

const Form = (props) => {

    let [input , setInput] = useState('');

    function inputChangeHandler(e){
        setInput(e.target.value);
    }

    function formSubmitHandler(e){
        e.preventDefault();
        // console.log(input);
        const newTodo = {
            id: uuid(), 
            todo: input,
            checked: false
        }
        props.addTodo(newTodo);
        setInput('');
    }


  return (
    <form onSubmit={formSubmitHandler}>
        <input onChange={inputChangeHandler} type="text" name="" id="" placeholder='add your todo' value={input} />
    </form>
  )
}

export default Form