const router = require('express').Router()
const { authUser } = require('../middelwares/auth')
const { allUsers, createUser, deleteUser, updateUser } = require('../controllers/users')
// const { UserModel } = require('../db/models/users')
const { validate } = require('../middelwares/validate')
const validators = require('../utils/validators')

router.get('/all', authUser, allUsers)

router.post('/add_user', [
   validators.stringProperty('firstName'),
   validators.stringProperty('lastName'),
   validators.stringProperty('userName'),
   validators.arrayProperty('premissions'),
   validators.stringProperty('createdDate'),
   validators.stringProperty('sessionTimeOut'),

], validate, authUser, createUser)

router.delete('/delete/:id', authUser, deleteUser)

router.put('/update/:id', updateUser)


module.exports = router