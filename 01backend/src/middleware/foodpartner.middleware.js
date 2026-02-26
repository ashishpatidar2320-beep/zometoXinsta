const jwt = require('jsonwebtoken')
const foodpartnerModel  = require('../modules/foodpartner.module')
const userModel = require("../modules/userr.module")

async function authfoodpartnerMiddleware(req ,res , next){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"absence of token"
        })
    }

    try{
       const decode = jwt.verify(token , process.env.JWT_SECRET)

       const foodpartner = await foodpartnerModel.findById(decode.id)
        if(!foodpartner){
            return res.status(401).json({
                message:"foodpartner not found",
            })
        }
       req.foodpartner = foodpartner
       next()
       
    } catch(err){
        return res.status(401).json({
            message:"invalid token"
        })
    }
}

async function authUserMiddleware(req ,res ,next){
    const token  = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"login first"
        })
    }
    try{
        const decode = jwt.verify(token , process.env.JWT_SECRET)

        const user = await userModel.findById(decode.id)
        
        req.user = user
        next()

    } catch (err){
        return res.status(401).json({
            message:"invaid token"
        })
    }
}

module.exports = {authfoodpartnerMiddleware , authUserMiddleware}