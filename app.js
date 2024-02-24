const express = require('express')
require('dotenv').config()
const connectDB = require("./db/db");
const colors = require("colors");

const port = process.env.PORT 
const userRouter = require('./routers/user')
connectDB();

 
const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`.magenta)
}) 