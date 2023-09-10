const mongoose = require('mongoose');

let quotesSchema = new mongoose.Schema({
    author:{
        type: String,
        required:true
    },
    text:{
        type: String,
        required:true
    }
})


const Quotes = mongoose.model('Quotes' , quotesSchema);


module.exports = Quotes;