var notes = require("../data/notes");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });
    app.post("/api/notes", (req, res) => {
        var newNote = req.body;
        notes.push(newNote);
        console.log(newNote);
        res.json(newNote);
    });
    app.delete("/api/notes"), function(req, res){
        req.params.routeName
    };
};