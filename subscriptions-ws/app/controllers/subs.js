const { MemberModel } = require("../db/models/members")
const { MovieModel } = require("../db/models/movies")
const { SubscriptionModel } = require("../db/models/subs")


exports.addSub = async function (request, response, next) {

   const { memberId, movieId, dateWatched } = request.body
   console.log(request.body)
   try {
      const foundSub = await SubscriptionModel.findOne({ memberId: memberId })
      console.log(foundSub)
      if (foundSub) {
         foundSub.movies.push({ movieId: movieId, dateWatched: dateWatched })
         await foundSub.save()
      } else {
         const newSub = new SubscriptionModel({
            memberId: memberId,
            movies: [{ movieId: movieId, dateWatched: dateWatched }]
         })

         await newSub.save()
      }

      const [movie, member] = await Promise.all([MovieModel.findOne({ _id: movieId }), MemberModel.findOne({ _id: memberId })])
      response.status(200).send({
         message: `Create sub success`,
         success: true,
         data: { member: member, movie: movie }
      })

   } catch (error) {
      next(new Error('Create sub fail'))
   }

}