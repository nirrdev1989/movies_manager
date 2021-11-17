const axios = require('axios')
const { catchAsync } = require("../../utils/asyncWrapper")
const config = require('../../config')

const options = {
   withCredentials: true,
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      apikey: config.SUBSCRIPTIONS_API_KEY
   }
}


exports.update = function (url) {
   return catchAsync(async function (request, response, next) {
      const { data } = await axios({
         url: url + request.params.id,
         method: 'PUT',
         data: request.body,
         ...options
      })

      response.status(200).send({
         message: data.message,
         success: true,
         data: data.data
      })
   })
}

exports.get = function (url) {
   return catchAsync(async function (request, response, next) {
      console.log(url)
      const { data } = await axios({
         url: url,
         params: request.params.id ? request.params.id : '',
         method: 'GET',
         ...options
      })

      response.status(200).send({
         message: data.message,
         success: true,
         data: data.data
      })
   })
}

exports.post = function (url) {
   return catchAsync(async function (request, response, next) {
      const { data } = await axios({
         url: url,
         method: 'POST',
         data: request.body,
         ...options
      })

      response.status(200).send({
         message: data.message,
         success: true,
         data: data.data
      })
   })
}

exports.delete = function (url) {
   return catchAsync(async function (request, response, next) {
      const { data } = await axios({
         url: url + request.params.id,
         method: 'DELETE',
         ...options
      })

      response.status(200).send({
         message: data.message,
         success: true,
         data: data.data
      })
   })
}