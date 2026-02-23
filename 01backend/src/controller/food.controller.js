const foodModel = require('../modules/food.module')
const {v4:uuid} = require('uuid')
const storageService = require('../services/storage.service')

async function foodCreate(req, res){

    const videoUrl = await storageService.uploadFile(req.file.buffer , uuid())

    console.log(videoUrl)
    
    const fooditem = await foodModel.create({
        name:req.body.name,
        video:videoUrl.url,
        discription:req.body.discription,
        foodpartner:req.foodpartner._id,
    })

    res.status(201).json({
        message:"food create successfull my ashish patidar",
        name:req.body.name,
        url:videoUrl.url,
        discription:req.body.discription,
    })
    
}

async function getfood(req ,res){
    const fooditems  = await foodModel.find({})

    return res.status(200).json({
        message:"food-items is fethed successfull",
        fooditems,
    })
}

module.exports = {foodCreate , getfood}