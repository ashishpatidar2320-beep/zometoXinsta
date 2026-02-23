const mongoose = require('mongoose')

const foodschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    video:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
    },
    foodpartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodpartner",
        required:true,
    }
})

const foodModule = mongoose.model("food",foodschema)
module.exports = foodModule