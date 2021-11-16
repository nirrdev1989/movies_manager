const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   userName: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
   },
}, { timestamps: true })

const UserModel = mongoose.model('users', UserSchema)

module.exports = { UserModel }