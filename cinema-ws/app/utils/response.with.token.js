const config = require('../config')
const jsonWebToken = require('jsonwebtoken')


exports.responseWithToken = function (data, response) {
   console.log('TOKEN DATA: ', data)
   const expiresIn = 1000 * 60 * Number(data.sessionTimeOut)
   data.expiresIn = expiresIn

   console.log('EXPIRED IN: ', expiresIn)
   const token = jsonWebToken.sign({ userData: data }, config.TOKENS.ACCESS_TOKEN.secretTokenKey, {
      expiresIn: expiresIn
   })

   let cookieOptions = {
      expires: new Date(Date.now() + expiresIn),
      httpOnly: true,
      sameSite: 'strict'
   }

   if (process.env.NODE_ENV === 'production') {
      cookieOptions.secure = true
   }

   response.cookie('jwt', token, cookieOptions)


   response.status(201).send({
      data: data,
      message: 'Auth success',
      success: true,
   })
}