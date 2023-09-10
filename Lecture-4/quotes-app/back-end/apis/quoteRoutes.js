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
router.post('/addQuotes' , async(req,res)=>{
    let {author , text} = req.body;
    await Quotes.create({author , text});
    res.status(200).json({msg:"new quote added"})
})

// to show entire quote
router.get('/quotes/:id' , async(req,res)=>{
   const quote =  await Quotes.findById(req.params.id)
    res.status(200).json(quote);
} )

module.exports = router;

