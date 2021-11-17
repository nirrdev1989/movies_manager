const { getAll, createOne, deleteOne, updateOne } = require("../../../cinema-ws/app/data.access.logic/db/factory")
const { MovieModel } = require("../db/models/movies")


exports.allMovies = getAll(MovieModel, {
   qurey: MovieModel.aggregate([
      {
         $lookup: {
            from: "subscriptions",
            foreignField: "movies.movieId",
            localField: "_id",
            as: 'subs'
         },
      },
      {
         $lookup: {
            from: "members",
            foreignField: "_id",
            localField: "subs.memberId",
            as: 'movieSubs'
         }
      },
   ])
})
exports.createMovie = createOne(MovieModel)
exports.deleteMovie = deleteOne(MovieModel)
exports.updateMovie = updateOne(MovieModel)