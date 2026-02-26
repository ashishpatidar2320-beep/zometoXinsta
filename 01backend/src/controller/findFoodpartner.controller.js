const foodpartnerModel = require('../modules/foodpartner.module')
const foodModule = require('../modules/food.module')

async function findpartner(req , res ) {
    const _id = req.params.id
     
    try{
        const foodpartner = await foodpartnerModel.findById(_id)
        const foodItemsByFoodpartner = await foodModule.find({foodpartner:_id})


        if(!foodpartner){
            return res.status(400).json({
                message:"food partner not found"
            })
        }

        return res.status(200).json({
            message:"data fetched",
            foodpartner,
            fooditems:foodItemsByFoodpartner,
        })

    } catch (err){
        console.log(err,_id)
        return res.status(500).json({
            message: "Server error"
            
        })
    }
}

module.exports = {findpartner}