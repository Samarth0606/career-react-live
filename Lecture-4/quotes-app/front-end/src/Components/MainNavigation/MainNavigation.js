import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
        <h2>Great Quotes</h2>
        <ul>
            <li> <Link to='/'> All quotes </Link> </li>
            <li> <Link to='/new'> New quote </Link> </li>
        </ul>
    </nav>
  )
}

export default MainNavigation