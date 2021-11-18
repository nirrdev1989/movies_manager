const { getUser } = require("../data.access.logic/json-files/json.users");
const { UserModel } = require("../db/models/users");
const { catchAsync } = require("../utils/asyncWrapper");
const { responseWithToken } = require("../utils/response.with.token");
const bcrypt = require('bcrypt')

exports.login = catchAsync(async function (request, response, next) {

   const { userName, password } = request.body
   console.log(userName, password)

   const foundUser = await UserModel.findOne({ userName: userName })

   if (!foundUser) {
      return next(new Error('Auth fail'))
   }

   if (!foundUser['password']) {
      return next(new Error('Please create your password'))
   }

   const isMatch = await bcrypt.compare(password, foundUser.password)

   if (!isMatch) {
      return next(new Error('Auth fail'))
   }

   const user = await getUser(foundUser._id)

   return responseWithToken(user, response)
})

exports.register = catchAsync(async function (request, response, next) {

   const { userName, password } = request.body


   const foundUser = await UserModel.findOne({ userName: userName })

   if (!foundUser) {
      return next(new Error('User not exsit'))
   }

   const hashPassword = await bcrypt.hash(password, 10)

   foundUser.password = hashPassword

   const userSaved = await foundUser.save()

   console.log(userSaved)
   response.status(200).send({
      success: true,
      message: 'Register Success',
      data: userSaved
   })
})

exports.logout = async function (request, response, next) {
   response.cookie('jwt', 'logout', {
      expires: new Date(Date.now() + 1000 * 5),
      httpOnly: true
   })

   response.clearCookie('connect.sid')

   console.log('LOGOUT')

   response.status(200).send({
      success: true,
      data: null,
      message: 'LOGOUT SUCCESS'
   })
}

exports.isAuth = function (request, response, next) {
   responseWithToken(request.userData, response)
}