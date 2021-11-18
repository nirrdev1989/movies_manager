const router = require('express').Router()
const { addSub } = require('../controllers/subs')
const { authUser } = require('../middelwares/auth')
// const { SubscriptionModel } = require('../db/models/subs')
const { validate } = require('../middelwares/validate')
const validators = require('../utils/validators')

router.post('/add_sub', [
   validators.stringProperty('memberId'),
   validators.stringProperty('movieId')
], validate, authUser, addSub)


module.exports = router