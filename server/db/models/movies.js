const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
   movieName: {
      type: String,
      require: true
   },
   genres: {
      type: Array,
      require: true
   },
   imageUrl: {
      type: String,
      require: true
   },
   premiered: {
      type: String,
      require: true
   }
}, { timestamps: true })

const MovieModel = mongoose.model('movies', MovieSchema)

module.exports = { MovieModel }