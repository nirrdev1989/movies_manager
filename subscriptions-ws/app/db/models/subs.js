const mongoose = require('mongoose')

const SubscriptionSchema = new mongoose.Schema({
   memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'members',
   },
   movies: [{
      movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'movies' },
      dateWatched: { type: String }
   }],
}, { timestamps: true })

const SubscriptionModel = mongoose.model('subscriptions', SubscriptionSchema)

module.exports = { SubscriptionModel }