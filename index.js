const express = require('express')
const dotenv = require('dotenv')
const app = express()
const PORT = process.env.PORT
dotenv.config()
app.use(express.json())

app.listen(PORT ,()=>{
    console.log('SERVER Runing');
})