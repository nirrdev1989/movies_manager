const router = require('express').Router()
const { SubscriptionModel } = require('../db/models/subs')


router.post('/add_sub', async (request, response, next) => {

   const { memberId, movieId, subDate } = request.body
   console.log(request.body)
   try {
      const foundSub = await SubscriptionModel.findOne({ memberId: memberId })
      console.log(foundSub)
      if (foundSub) {
         foundSub.movies.push({ movieId: movieId, subDate: subDate })
         await foundSub.save()
      } else {
         const newSub = new SubscriptionModel({
            memberId: memberId,
            movies: [{ movieId: movieId, subDate: subDate }]
         })

         await newSub.save()
      }
      response.status(200).send({
         message: `Create sub success`,
         success: true,
         data: { memberId: memberId, movieId: movieId }
      })

   } catch (error) {
      response.status(500).send({
         message: `Create sub fail`,
         success: false,
         data: null
      })
   }


})


module.exports = router