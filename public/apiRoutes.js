var fs = require("fs");
var util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        readFileAsync(__dirname + "/db/db.json", "utf8", function(data){
            notes = [].concat(JSON.parse(data))
            res.json(notes);
        })
    });

    app.post("/api/notes", (req, res) => {
        var newNote = req.body;
        readFileAsync(__dirname + "/db/db.json", "utf8", function (notes) {
            notes = [].concat(JSON.parse(notes));
            newNote.id = notes.length + 1;
            notes.push(newNote);
            console.log(newNote);
            return notes
        }).then(function(notes){
            writeFileAsync(__dirname + "/db/db.json", JSON.stringify(notes))
            res.json(newNote);
        })
    })

    app.delete("/api/notes/:id"), function(req, res){
        var noteToDelete = req.params.id;
        readFileAsync(__dirname + "/db/db.json", "utf8").then(function(note){
            const notes = [].concat(JSON.parse(note));
            const newNotes = [];
            notes.forEach((note) => noteToDelete !== note.id ? newNotes.push(note) : console.log("sorry chump"));
            return newNotes
        }).then(function (notes){
            writeFileAsync(__dirname + "/db/db.json", JSON.stringify(notes))
            res.send("saved");
        })
    };
}