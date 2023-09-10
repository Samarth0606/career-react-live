import React from 'react'
import {Link, Route , Routes} from "react-router-dom"
import Cat from './Components/pages/Cat'
import Dog from './Components/pages/Dog'
import Main from './Components/pages/Main'

const App = () => {
  return (
    <div>
      <nav>
        {/* <ul>
          <li> <a href="/">MAIN</a>  </li>
          <li> <a href="/dog">DOG</a> </li>
          <li> <a href="/cat">CAT</a>  </li>
        </ul> */}
        <ul>
          <li> <Link to="/">MAIN</Link>  </li>
          <li> <Link to="/dog">DOG</Link> </li>
          <li> <Link to="/cat">CAT</Link>  </li>
        </ul>

      </nav>

    <Routes>
      <Route path='/' element={ <Main /> } />
      <Route path='/cat' element={ <Cat /> } />
      <Route path='/dog' element={ <Dog /> } />
    </Routes>


    </div>
  )
}

export default App