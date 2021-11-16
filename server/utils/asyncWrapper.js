function catchAsync(fnHandler) {
   return function (request, response, next) {
      fnHandler(request, response, next)
         .catch((error) => {
            next(error)
         })
   }
}

module.exports = {
   catchAsync
}