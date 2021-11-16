const config = require('../../../cinema-ws/app/config')

exports.authApiKey = async function (request, response, next) {

   const apiKey = request.headers['apikey']

   console.log('TOKEN: ', request.headers)

   if (!apiKey) {
      return response.status(401).send({
         success: false,
         data: null,
         message: 'Unhotorized'
      })
   }


   if (apiKey === config.SUBSCRIPTIONS_API_KEY) {
      return next()
   }

   return response.status(401).send({
      success: false,
      data: null,
      message: 'Unhotorized'
   })
}