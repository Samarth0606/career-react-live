import React, { Fragment } from 'react'
import MainNavigation from './Components/MainNavigation/MainNavigation'
import {Routes , Route} from "react-router-dom"
import AllQuotes from './Components/Pages/AllQuotes'
import NewQuote from './Components/Pages/NewQuote'


const App = () => {
  return (
    <Fragment>
        <MainNavigation />

        <main>
          <Routes>
            <Route path='/' element={ <AllQuotes/> } />
            <Route path='/new' element={ <NewQuote/> } />
          </Routes>
        </main>

    </Fragment>
  )
}

export default App