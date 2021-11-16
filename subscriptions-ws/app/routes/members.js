const router = require('express').Router()
const { allMembers, createMember, deleteMember, updateMember } = require('../controllers/members')
const { authApiKey } = require('../middlewares/auth')



router.get('/all', authApiKey, allMembers)

router.post('/add_member', authApiKey, createMember)

router.delete('/delete/:id', authApiKey, deleteMember)

router.put('/update/:id', authApiKey, updateMember)

module.exports = router