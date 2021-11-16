const router = require('express').Router()
const { login, register, isAuth, logout } = require('../controllers/auth')
const { authUser } = require('../middelwares/auth')
const { UserModel } = require('../db/models/users')

router.post('/login', login)

router.post('/register', register)

router.get('/isauth', authUser, isAuth)

router.get('/logout', logout)

module.exports = router