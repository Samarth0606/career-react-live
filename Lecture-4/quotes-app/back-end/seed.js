const mongoose = require('mongoose');
const Quotes = require('./models/Quote');


let dummyQuotes = [
    {
        author: "Samarth Vohra",
        text: "billo bagey billey da ki kregi"
    },{
        author: "Abhishek Suryavanshi",
        text: "bagey bagey billey da ki kregi"
    },{
        author: "Shahid Raza",
        text: "Mai to toot gya bhaisahab"
    },{
        author: "Chandan Sahu",
        text: "hum pe to hai hi 9 😛"
    }
]

async function seedDB(){
    await Quotes.insertMany(dummyQuotes);
    console.log("db seeded successfully");
}

module.exports = seedDB;





