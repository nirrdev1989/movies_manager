const { check } = require('express-validator')

const errorMessage = 'INVALID VALUES'

module.exports = {
   email: function (property) {
      return check(property, errorMessage)
         .exists()
         .isEmail()
   },
   numberPropery: function (property) {
      return check(property, errorMessage)
         .exists()
         .isNumeric()
   },
   stringProperty: function (property) {
      return check(property, errorMessage)
         .exists()
         .isString()
   },
   arrayProperty: function (propery) {
      return check(propery, errorMessage)
         .exists()
         .isArray()
   }
}
