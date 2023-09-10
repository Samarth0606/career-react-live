import React, { Fragment } from 'react'
import GithubUser from './Components/GithubUser'

const App = () => {
  return (
    <>
      <h1>Github API Fetching App</h1>
      <GithubUser username="Samarth0606" />
      <GithubUser username="abhiiiijain" />
      <GithubUser username="ChandanSahu98" />
    </>
  )
}

export default App