const dotenv = require('dotenv')
dotenv.config()
const userRouter = require('./routes/user.routes')
const foodRouter = require('./routes/food.routes')
const express = require('express')
const cookiesParser = require("cookie-parser")
const connectDb = require('./db/db')
const findFoodpartner = require('.//routes/findFoodpartner.route')
connectDb()
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cookiesParser())
app.use(cors({
    origin: "http://localhost:5173",  // your React URL
    credentials: true
}));

app.use( '/auth' , userRouter)
app.use('/add/food' , foodRouter)
app.use('/foodpartner' , findFoodpartner)

module.exports = app