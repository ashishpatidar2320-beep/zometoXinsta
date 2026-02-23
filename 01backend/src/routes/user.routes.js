const express = require('express')
const routes = express.Router()
const {userResister , userlogin , userlogout , foodpartnerResister , foodpartnerLogin , foodpartnerLogout} = require('../controller/user.controller')

routes.post('/user/resister' , userResister )
routes.post('/user/login' , userlogin)
routes.get('/user/logout', userlogout)
routes.post('/foodpartner/resister' ,foodpartnerResister )
routes.post('/foodpartner/login', foodpartnerLogin)
routes.get('/foodpartner/logout' , foodpartnerLogout)


module.exports = routes