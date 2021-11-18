const router = require('express').Router()
const { login, register, isAuth, logout } = require('../controllers/auth')
const { authUser } = require('../middelwares/auth')
const { validate } = require('../middelwares/validate')
const validators = require('../utils/validators')


router.post(
   '/login',
   [
      validators.stringProperty('userName'),
      validators.stringProperty('password')
   ],
   validate,
   login
)

router.post('/register', [validators.stringProperty('userName'), validators.stringProperty('password')], validate, register)

router.get('/isauth', authUser, isAuth)

router.get('/logout', logout)

module.exports = router