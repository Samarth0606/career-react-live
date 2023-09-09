import React from 'react'
import {BsTrashFill} from "react-icons/bs"

const Todo = ({todoItem , deleteTodo ,checkTodo}) => {

    function deleteTodoHandler(id){
        deleteTodo(id);
    }
    const inputChangeHandler = (id)=>{
        checkTodo(id);
    }


  return (
    <div>
        <li style={ {textDecoration: `${todoItem.checked ? 'line-through' : '' }` } } >
            <input onChange={()=>inputChangeHandler(todoItem.id)} type="checkbox" defaultChecked={todoItem.checked} />
            <span>ID: {todoItem.id} --&gt; task: {todoItem.todo} </span>
            <span onClick={()=>deleteTodoHandler(todoItem.id)} > <BsTrashFill/> </span> 
        </li>
    </div>
  )
}

export default Todo