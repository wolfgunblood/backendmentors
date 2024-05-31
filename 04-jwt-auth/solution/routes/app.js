const express = require('express')
const router = express.Router()

const {
    login,dashboard
} = require('../controllers/app')

const authenticationMiddleware = require('../middleware/auth')

router.route('/login').post(login)
router.route('/dashboard').get(authenticationMiddleware,dashboard)

module.exports = router