/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config() // Load ENV Variables
const express = require("express") // import express
const app = express();// Declares app as a instance of express;
const morgan = require("morgan") //import morgan
const picturesController=require(`./controllers/pictures`)
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const { application } = require("express")
const PORT = process.env.PORT || 4000;

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.set('view engine','ejs'); // setting view engine to ejs
app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically
app.use('',picturesController);

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.get('/dburl', (req, res) => {
    response.send(`My connection string is: ${process.env.DATABASE_URL}`)
})

app.get('/*', (req, res) => {
    res.render('404.ejs');
});








//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

app.listen(PORT, () => {
console.log(`Now Listening on port ${PORT}`)})