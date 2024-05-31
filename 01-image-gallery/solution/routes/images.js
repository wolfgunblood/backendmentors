const express = require('express')
const router = express.Router()

const {
    getImages
} = require("../controllers/images")

// console.log("hi1")
router.route('/').post(getImages)
// console.log("hi2")

module.exports = router