const { getAll, createOne, deleteOne, updateOne } = require("../../../cinema-ws/app/data.access.logic/db/factory")
const { MemberModel } = require("../db/models/members")


exports.allMembers = getAll(MemberModel, {
   qurey: MemberModel.aggregate([
      {
         $lookup: {
            from: "subscriptions",
            foreignField: "memberId",
            localField: "_id",
            as: 'subs'
         },
      },
      {
         $lookup: {
            from: "movies",
            foreignField: "_id",
            localField: "subs.movies.movieId",
            as: 'memberMovies'
         }
      },
      // {
      //    $project: {
      //       _id: 1,
      //       memberName: 1,
      //       email: 1,
      //       city: 1,
      //       memberMovies: 1
      //    }
      // }
   ])
})
exports.createMember = createOne(MemberModel)
exports.deleteMember = deleteOne(MemberModel)
exports.updateMember = updateOne(MemberModel)