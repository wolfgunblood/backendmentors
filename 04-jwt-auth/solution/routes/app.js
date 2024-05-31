const express = require('express')
const router = express.Router()

const {
    login
} = require('../controllers/app')

router.route('/').post(login)

module.exports = router