const express = require('express'); //function
const app = express(); //object -> instance application
const mongoose = require('mongoose'); //odm ->obj data mapper
const seedDB = require('./seed');
const quoteRoutes = require('./apis/quoteRoutes')
const cors = require('cors');


app.use(cors({origin:['http://localhost:3000']}))
app.use(express.json());//body parsing middleware

mongoose.connect('mongodb://127.0.0.1:27017/react-quotes-app')
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log(err)})


app.get('/hello' , (req,res)=>{
    res.status(200).json({msg:"hello from quotes app"})
})

// seedDB();

app.use(quoteRoutes);


app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})
