const express = require('express')
const dotenv = require('dotenv')
require("./DB/db")
const app = express()
const PORT = process.env.PORT
const morgan = require("morgan");
app.use(morgan("tiny"));
dotenv.config()
app.use(express.json())
const userRouter = require("./routers/routes/users");
const productsRouter = require("./routers/routes/products");
app.use('/products',productsRouter);
app.use('/users',userRouter);
app.listen(PORT ,()=>{
    console.log('SERVER Runing');
})