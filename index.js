const express = require('express')
const dotenv = require('dotenv')
require("./DB/db")
const app = express()
const PORT = process.env.PORT
const morgan = require("morgan");
app.use(morgan("tiny"));
dotenv.config()
app.use(express.json())
const userRouter = require("./routers/routes/index");
app.use(userRouter);
app.listen(PORT ,()=>{
    console.log('SERVER Runing');
})