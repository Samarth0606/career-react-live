import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ShowQuote = () => {

    const params = useParams();
    let [quote , setQuote] = useState({
                            author:'' ,
                            text:''
                        })

async function fetchQuote(){
    const res = await axios.get(`http://localhost:8080/quotes/${params.id}`)
    const {author , text} = res.data;
    setQuote({author , text});
}

useEffect( ()=>{
    fetchQuote();
} , [])

  return (
    <div>
        <h2>{quote.author}</h2>
        <p>{quote.text}</p>
    </div>
  )
}

export default ShowQuote