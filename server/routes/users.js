const router = require('express').Router()
const { authUser } = require('../middelwares/auth')
const { allUsers, createUser, deleteUser, updateUser } = require('../controllers/users')
// const { UserModel } = require('../db/models/users')


router.get('/all', authUser, allUsers)

router.post('/add_user', authUser, createUser)

router.delete('/delete/:id', authUser, deleteUser)

router.put('/update/:id', updateUser)


module.exports = router