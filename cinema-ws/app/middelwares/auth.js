const config = require('../config')
const jsonWebToken = require('jsonwebtoken')
const { UserModel } = require('../db/models/users')

exports.authUser = async function (request, response, next) {

   const token = request.cookies.jwt

   // console.log('TOKEN: ')

   if (!token) {
      return response.status(401).send({
         success: false,
         data: null,
         message: 'Unhotorized'
      })
   }

   const decodedToken = await jsonWebToken.verify(token, config.TOKENS.ACCESS_TOKEN.secretTokenKey)

   // console.log('DECODED TOKEN: ', request.serverData, decodedToken, decodedToken.userData._id)

   if (!decodedToken || Object.keys(decodedToken).length === 0) {
      // destroySession(request)
      return response.status(401).send({
         success: false,
         data: null,
         message: 'Unhotorized'
      })
   }

   const foundUser = await UserModel.findOne({ _id: decodedToken.userData._id })
   // console.log('FOUND USERRRRR AUTH:', request.serverData, foundUser)
   if (!foundUser) {
      return response.status(401).send({
         success: false,
         data: null,
         message: 'Unhotorized'
      })
   }

   request.userData = decodedToken.userData

   Object.freeze(request.userData)


   next()
}