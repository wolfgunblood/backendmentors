const express = require('express')
const app = express()
const router = require('./routes/app')
const notFound = require('./middleware/not-found')
const errorHandleMiddleware = require('./middleware/error-handler')
const PORT = 3000


//middleware
app.use(express.json())

//routes
app.use("/api/v1/login",router)

app.use(notFound)
app.use(errorHandleMiddleware)
app.listen(PORT , () => {
    console.log(`Server running at PORT ${PORT}`)
})