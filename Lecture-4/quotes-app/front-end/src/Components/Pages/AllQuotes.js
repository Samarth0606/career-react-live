import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from '../Quotes/Quote'


const AllQuotes = () => {

  let [quotes , setQuotes] = useState([])

  async function getQuotes(){
    const res = await axios.get('http://localhost:8080/allquotes')
    // console.log(res.data);
    setQuotes(res.data);
  }

  useEffect( ()=>{
    getQuotes();
  } , [])


  return (
    <div>
      <h1>AllQuotes</h1> 
      <ul>
        {
          quotes.map((quote , index)=>{
            return <Quote 
              key={index}
              author={quote.author}
              text={quote.text}
              id={quote._id}
            />
          })
        }
      </ul>
    </div>
  )
}

export default AllQuotes