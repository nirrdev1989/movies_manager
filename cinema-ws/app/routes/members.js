const router = require('express').Router()
const { allMembers, createMember, deleteMember, updateMember } = require('../controllers/members')
const { authUser } = require('../middelwares/auth')
const { validate } = require('../middelwares/validate')
const validators = require('../utils/validators')



router.get('/all', authUser, allMembers)

router.post('/add_member', [validators.stringProperty('memberName'), validators.email('email'), validators.stringProperty('city')], validate, authUser, createMember)

router.delete('/delete/:id', authUser, deleteMember)

router.put('/update/:id', authUser, updateMember)

module.exports = router