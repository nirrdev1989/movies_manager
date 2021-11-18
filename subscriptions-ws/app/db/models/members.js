const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
   memberName: {
      type: String,
      require: true
   },
   email: {
      type: String,
      require: true,
      unique: true
   },
   city: {
      type: String,
      require: true
   }
}, { timestamps: true })

const MemberModel = mongoose.model('members', MemberSchema)


module.exports = { MemberModel }