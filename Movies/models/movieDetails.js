const mongoose = require("mongoose");
const { Schema } = mongoose;

const MoviesSchema = new Schema({
  movie_name: {
    type: String,
    required: true,
  }, // String is shorthand for {type: String}
  movie_genre: {
    type: String,
    required: true,
  }, // String is shorthand for {type: String}
  production_year: {
    type: Number,
    required: true,
  }, // String is shorthand for {type: String}
  budget: {
    type: Number,
    required: true,
  } // String is shorthand for {type: String}
},{
  version_key:false
});

const Movies = mongoose.model("movies", MoviesSchema);
module.exports = Movies;
