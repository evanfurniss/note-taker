// Set up initial methods, server call, and PORT number
const express = require("express");
var app = express();
var PORT = process.env.PORT || 4200;
//=====================================================================================================
// Set up recieving and sending note data, switches from json to note data, and notes arr to store notes
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//=====================================================================================================
// When called, retrieves relevant data for the call
require("./public/routes/htmlRoutes"(app));
require("./public/routes/apiRoutes"(app));
//=====================================================================================================
// Listener that takes ajax calls and retrieves and sends back data
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });