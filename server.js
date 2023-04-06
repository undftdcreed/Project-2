/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config() // Load ENV Variables
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const { application } = require("express")
const PORT = 4000;

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically


////////////////////////////////////////////
// Routes
////////////////////////////////////////////
//initial route
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.")
})











//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

app.listen(PORT, () => {
console.log(`Now Listening on port ${PORT}`)})