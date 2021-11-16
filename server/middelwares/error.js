exports.handelError = function (error, request, response, next) {
   error.statusCode = error.statusCode || 500
   error.status = error.status || 'error'
   console.log(error)
   // if(error.code === 11000) 'Dup'
   if (error.code === 11000) {
      error.message = `${Object.keys(error.keyPattern)[0]}  all ready exsist `
   }
   if (process.env.NODE_ENV === 'production') {
      if (error.name === 'CastError' || error.name === 'ValidationError') {
         error.message = 'Invalid Prop'
      }

      if (error.name === 'JsonWebTokenError') {
         error.message = 'Auth Fail'
      }
   }
   response.status(error.statusCode).send({
      status: error.status,
      message: error.message,
      error: process.env.NODE_ENV === 'development' ? error : null
   })
}