const express = require("express");
const path = require("path");

var app = express();
var PORT = 4200;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var notes = [];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.post("/api/notes", function (req, res){
    var newNote = req.body.textarea;

    newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();

    notes.push(newNote);

    res.json(newNote);
})