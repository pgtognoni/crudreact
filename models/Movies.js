const { Schema, model } = require("mongoose");

const movieSchema = new Schema (
    {
      name: {
        type: String,
        required: true,
      },
      year: {
        type: String,
      },
      director: {
        type: String,
        required: true,
      },
      budget: {
        type: String,
      },
    }
)




const Movie = model("Movie", movieSchema);

module.exports = Movie;