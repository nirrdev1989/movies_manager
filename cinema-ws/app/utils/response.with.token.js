const config = require('../config')
const jsonWebToken = require('jsonwebtoken')


exports.responseWithToken = function (data, response) {
   console.log('TOKEN DATA: ', data)
   const token = jsonWebToken.sign({ userData: data }, config.TOKENS.ACCESS_TOKEN.secretTokenKey, {
      expiresIn: '1h'
   })

   let cookieOptions = {
      expires: new Date(Date.now() + (1 * 1000 * 60 * 60)),
      httpOnly: true,
      sameSite: 'strict'
   }

   if (process.env.NODE_ENV === 'production') {
      cookieOptions.secure = true
   }

   response.cookie('jwt', token, cookieOptions)

   response.status(201).send({
      data: data,
      message: 'OK',
      success: true,
   })
}