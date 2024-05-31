const express = require('express')
const router = express.Router()

const {
    getAdvice
} = require('../controllers/advice')

router.route('/').get(getAdvice)

module.exports = router