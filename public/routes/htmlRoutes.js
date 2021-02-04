var path = require("path");

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../html/index.html"));
    });
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../html/notes.html"));
    });
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../html/index.html"));
    });
};