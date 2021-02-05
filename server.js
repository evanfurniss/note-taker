// Set up initial methods, server call, and PORT number

const express = require("express");

var app = express();
var PORT = process.env.PORT || 4200;

//=====================================================================================================
// Set up recieving and sending note data, switches from json to note data, and notes arr to store notes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For static middleware (css file etc)

app.use(express.static('public'))

//=====================================================================================================
// When called, retrieves relevant data for the call

require("./backend/apiRoutes")(app);
require("./backend/htmlRoutes")(app);

//=====================================================================================================
// Listener that takes ajax calls and retrieves and sends back data

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });