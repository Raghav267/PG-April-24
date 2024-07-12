const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));

// const todos = [
//     go
// ]


app.get("/hello", (req, res) => {
    console.log("We never reached here");
    res.render("index");
    console.log("We never reached here");
})

app.get("/number", (req, res) => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    res.render("dice", { randomNumber })
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render("reddit", { subreddit })
})


app.listen(3000, () => {
    console.log("Server start running at 3000 port.")
})