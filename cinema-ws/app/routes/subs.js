const router = require('express').Router()
const { addSub } = require('../controllers/subs')
const { authUser } = require('../middelwares/auth')
// const { SubscriptionModel } = require('../db/models/subs')


router.post('/add_sub', authUser, addSub)


module.exports = router