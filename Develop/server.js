// Set up initial methods, server call, and PORT number
const express = require("express");
const path = require("path");

var app = express();
var PORT = 4200;

//=====================================================================================================
// Set up recieving and sending note data, switches from json to note data, and notes arr to store notes

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var notes = [];

//=====================================================================================================
// When called, retrieves relevant data for the call

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.post("/api/notes", (req, res) => {
    var newNote = req.body.textarea;

    newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();

    notes.push(newNote);

    res.json(newNote);
});

//=====================================================================================================
// Listener that takes ajax calls and retrieves and sends back data

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });