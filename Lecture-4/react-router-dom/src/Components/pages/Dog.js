import React from 'react'
import {useNavigate} from 'react-router-dom'

const Dog = () => {

    let navigate = useNavigate();
    let redirectPageHandler = ()=>{
        navigate('/cat')
    }


  return (
    <div>
        <div>WOOF WOOF</div>
        <button onClick={redirectPageHandler}>cat page</button>
    </div>
  )
}

export default Dog