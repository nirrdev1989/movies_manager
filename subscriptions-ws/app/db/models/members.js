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

MemberSchema.virtual('subscriptions', {
   ref: 'subscriptions',
   localField: '_id',
   foreignField: 'members'
});

module.exports = { MemberModel }