const express = require('express');
const mongoose = require("mongoose");
const app = express();

// mongoose.connect('mongodb://localhost:27017/movies-april-batch')
mongoose.connect('mongodb://127.0.0.1:27017/movies-april-batch')
    .then(() => {
        console.log("Db connected Succefully!!");
    })
    .catch((err) => {
        console.log("Error: " + err);
    })

// creating a model
const movieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    isWatched: Boolean,
    year: Number,
    desc: String
})

const New = mongoose.model("New", movieSchema)

const movieArray = [
    {
        name: "Interstallar",
        rating: 10,
        isWatched: true,
        year: 2015,
        desc: "This is best movie about space time"

    },
    {
        name: "Interstallar 2.0 ",
        rating: 10,
        isWatched: false,
        year: 2050,
        desc: "This is best movie future about space time"

    },
    {
        name: "Interstallar 3.0 ",
        rating: 10,
        isWatched: true,
        year: 2030,
        desc: "This is best movie about space time"

    }
]

// const Interstellar = new New(movieArray)
for (let moviedata of movieArray) {
    const movie = new New(moviedata);

    movie.save()
        .then(() => {
            console.log("movies added succefully..");
        })
        .catch((err) => {
            console.log(err);
        })
}



app.listen(3000, (req, res) => {
    console.log("Server start running at 3000 port.");

})