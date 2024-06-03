const express = require("express");
const router = require("./routes/app");
const notFound = require("./middleware/not-found");
const app = express();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json())

//routes
app.use('/api/v1',router)
app.use(notFound)


app.listen(PORT, () => {
    console.log(`Server listening to PORT ${PORT}`)
})