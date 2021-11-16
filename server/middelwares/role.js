exports.role = function (...roles) {
   return function (request, response, next) {
      const currentUser = request.user

      if (!roles.includes(currentUser.role)) {
         // next(newError.createError('Not Prommitions', 403))
         return
      }

      next()
   }
}