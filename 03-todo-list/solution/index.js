const express = require('express')
require('dotenv').config()
const router = require('./routes/todos')
const notFound = require('./middleware/not-found')
const errorHandleMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const app = express()


const PORT = process.env.PORT || 3000

//middleware
app.use(express.json())

//routes
app.use("/api/v1",router)
app.use(notFound)
app.use(errorHandleMiddleware)

const main = async () => {
    try {
        // console.log(process.env.MONGO_URI)
        await connectDB(process.env.MONGO_URI)
        console.log("connected to mongodb")
        app.listen(PORT,() => {
            console.log(`Server listening to PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()
