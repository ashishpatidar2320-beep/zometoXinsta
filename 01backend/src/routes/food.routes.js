const express = require('express')
const routes = express.Router()
const foodpartnerMiddleware = require('../middleware/foodpartner.middleware')
const foodcontroller = require('../controller/food.controller')
const multer = require('multer')

const uplaod = multer({storage:multer.memoryStorage()})

routes.post('/' ,foodpartnerMiddleware.authfoodpartnerMiddleware , uplaod.single("video") ,foodcontroller.foodCreate )

routes.get('/' , foodpartnerMiddleware.authUserMiddleware ,foodcontroller.getfood )
module.exports = routes