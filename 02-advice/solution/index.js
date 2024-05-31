const express = require("express");
const app = express();
require("dotenv").config();
const advice = require("./routes/advice");
const notFound = require("./middleware/not-found");
const errorHandleMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes
app.use("/api/v1/getadvice", advice);
app.use(notFound);
app.use(errorHandleMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});
