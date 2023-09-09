import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid';

const TodoApp = () => {

    const arrayDummy = [
        {
            id:uuid(),
            todo:"go to gym",
            checked: false
        },
        {
            id:uuid(),
            todo:"go to cb",
            checked: false
        },
        {
            id:uuid(),
            todo:"go to samarth",
            checked: true
        },
        {
            id:uuid(),
            todo:"go to college",
            checked: false
        }
    ]

    let [todos , setTodos] = useState(arrayDummy);

    const addTodo = (todo)=>{
        setTodos([...todos , todo])
    }

    // const deleteTodo = (id)=>{
    //     const newTodos = todos.filter((todo)=> todo.id !== id )
    //     setTodos(newTodos);
    // }
    const deleteTodo = (id)=>{
        setTodos((prevState)=>{
            return prevState.filter((todo)=> todo.id !== id)
        });
    }

    const checkTodo = (id)=>{
        setTodos((prevState)=>{
            return prevState.map((item)=> item.id === id ? {...item , checked : !item.checked} : item)
        });
    }



  return (
    <div>
        <Form addTodo={addTodo} todos={todos} />
        <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    </div>
  )
}

export default TodoApp