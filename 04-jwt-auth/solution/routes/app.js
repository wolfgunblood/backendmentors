const express = require('express')
const router = express.Router()

const {
    login
} = require('../controllers/app')

router.route('/').get(login)

module.exports = router