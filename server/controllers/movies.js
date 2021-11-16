const { getAll, createOne, deleteOne, updateOne } = require("../data.access.logic/db/factory")
const { MovieModel } = require("../db/models/movies")


exports.allMovies = getAll(MovieModel)
exports.createMovie = createOne(MovieModel)
exports.deleteMovie = deleteOne(MovieModel)
exports.updateMovie = updateOne(MovieModel)