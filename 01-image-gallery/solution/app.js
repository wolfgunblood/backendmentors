const express = require("express")
const app = express()
require('dotenv').config()
const images = require('./controllers/images')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//routes

app.use('/api/v1/getimages',images)
app.use(notFound)
app.use(errorHandlerMiddleware);


const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log(`Server listening at PORT ${PORT}`)
})
