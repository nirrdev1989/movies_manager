const router = require('express').Router()
const { allMembers, createMember, deleteMember, updateMember } = require('../controllers/members')
const { authUser } = require('../middelwares/auth')
// const { MemberModel } = require('../db/models/members')
// const { SubscriptionModel } = require('../db/models/subs')


router.get('/all', authUser, allMembers)

router.post('/add_member', authUser, createMember)

router.delete('/delete/:id', authUser, deleteMember)

router.put('/update/:id', authUser, updateMember)

module.exports = router