const router = require('express').Router(); //mini server
const Quotes = require('../models/Quote');

// to get all the quotes
router.get('/allquotes' , async(req,res)=>{
   try{
    let allQuotes = await Quotes.find({});
    res.status(200).json(allQuotes);
   }
   catch(e){
    res.status(400).json({msg:"something went wrong"});
   }
})

// to add a new quote


module.exports = router;

