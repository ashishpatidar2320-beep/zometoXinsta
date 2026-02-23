const express = require("express")
const route = express.Router()
const authUserMiddleware  = require('../middleware/foodpartner.middleware')
const findFoodpartner = require('../controller/findFoodpartner.controller')

route.get("/:id" ,authUserMiddleware.authUserMiddleware , findFoodpartner.findpartner)

module.exports = route