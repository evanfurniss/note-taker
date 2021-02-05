var fs = require("fs");
var util = require("util");
var path = require("path");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        readFileAsync(path.join(__dirname + "/db/db.json"), "utf8") 
        .then(function(data){
            notes=[].concat(JSON.parse(data))
            return res.json(notes);
        })
    });

    app.post("/api/notes", (req, res) => {
        var newNote = req.body;
        readFileAsync(path.join(__dirname + "/db/db.json"), "utf8") 
        .then(function (data) {
            notes = [].concat(JSON.parse(data));
            newNote.id = notes.length + 1;
            notes.push(newNote);
            return notes
        }).then(function(data){
        writeFileAsync(path.join(__dirname + "/db/db.json"), JSON.stringify(data))
            res.json(newNote);
        })
    })

    app.delete("/api/notes/:id", function(req, res){
        var noteToDelete = parseInt(req.params.id);
        readFileAsync(path.join(__dirname + "/db/db.json"), "utf8")
        .then(function(data){
            notes = [].concat(JSON.parse(data));
            const newNotes = [];
            notes.forEach((note) => noteToDelete !== note.id ? newNotes.push(note) : console.log("sorry chump"));
            return newNotes
        }).then(function(notes){
            writeFileAsync(path.join(__dirname + "/db/db.json"), JSON.stringify(notes))
            res.send(notes);
        })
    });
}