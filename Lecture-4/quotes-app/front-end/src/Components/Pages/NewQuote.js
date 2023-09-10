import React, { useRef } from 'react'
import styles from './NewQuote.module.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const NewQuote = () => {

  let navigate = useNavigate();

  const usernameInputRef = useRef()
  const quoteInputRef = useRef()

  const addQuoteHandler = async(e)=>{
      e.preventDefault();
      // console.log(usernameInputRef.current.value)
      // console.log(quoteInputRef.current.value)
      const author = usernameInputRef.current.value;
      const text = quoteInputRef.current.value;
      try{
        const res = await axios.post('http://localhost:8080/addQuotes' , {author , text} )
        console.log(res);
        navigate('/')
      }
      catch(e){
        console.log("cant create a new quote")
      }
  }


  return (
    <form onSubmit={addQuoteHandler} className={styles.newquote}>

      <div>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" ref={usernameInputRef} placeholder="Author's Name" />
      </div>
      <div>
        <label htmlFor="quote">Quote:</label>
        <textarea id="quote" cols={10} rows={4} ref={quoteInputRef} placeholder="Author's Quote"></textarea>
      </div>

      <button>Add Quote</button>

    </form>
  )
}

export default NewQuote