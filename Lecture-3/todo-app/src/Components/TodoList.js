import React from 'react'
import Todo from './Todo'

const TodoList = ({todos , deleteTodo , checkTodo}) => {

    // array.map
    const allTodos = todos.map((item , index)=>{
        return <Todo key={index} id={item.id} deleteTodo={deleteTodo} checkTodo={checkTodo} todoItem={item}/>
    })


  return ( 
    <section>
        <ul className='todo-list'>
            {allTodos}
        </ul>
    </section>
  )
}

export default TodoList