const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
require("dotenv").config();
const MovieDetails = require("./models/movieDetails");

let app = express();
app.use(express.json())
app.use(cors())

const connect = () => {
    return mongoose.connect(process.env.MONGOOSE_DB_URL);
};


app.get("/movies", async (req, res) => {
    try {
        const movies = await MovieDetails.find();
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);
    }
})

app.get("/movies/:id", async (req, res) => {
    try {
        const movie = await MovieDetails.findById(req.params.id);
        res.status(200).json(movie);
    } catch (error) {
        console.log(error);
    }
})

app.patch("/movies/:id", async (req, res) => {
    try {
        const movie = await MovieDetails.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json(movie);
    } catch (error) {
        console.log(error);
    }
})

app.delete("/movies/:id", async (req, res) => {
    try {
        const movie = await MovieDetails.findByIdAndDelete(req.params.id);
        res.status(200).json(movie);
    } catch (error) {
        console.log(error);
    }
})

app.post("/movies", async (req, res) => {
    try {
        const { movie_name, movie_genre, production_year, budget } = req.body;

        const movies = new MovieDetails({
            movie_name, movie_genre, production_year, budget
        });
        const savedMovie = await movies.save();
        res.json(savedMovie);
    } catch (error) {
        console.log(error);
    }
})

app.listen(process.env.PORT, async (req, res) => {
    await connect();
    console.log(`Listening on port ${process.env.PORT}`);
});
