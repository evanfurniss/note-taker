

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        
    });
    app.post("/api/notes", (req, res) => {
        var newNote = req.body;
        newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();
        notes.push(newNote);
        res.json(true);
    });
}