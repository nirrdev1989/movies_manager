const router = require('express').Router()
const { addSub } = require('../controllers/subs')
const { authApiKey } = require('../middlewares/auth')
// const { SubscriptionModel } = require('../db/models/subs')


router.post('/add_sub', authApiKey, addSub)


module.exports = router