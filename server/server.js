const express = require("express");

const app = express();

app.get("/api", (req, res) => {
    res.json({ 'ex': ["ex1", "ex2", "ex3"] })
})

app.listen(5000, () => {
    console.log("Started application on port %d", 5000);
})