const express = require('express')
const router = express.Router()

const {
    getImages
} = require("../controllers/images")

router.route('/').post(getImages)

module.exports = router