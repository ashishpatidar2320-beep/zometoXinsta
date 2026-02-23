const mongoose = require('mongoose')

 async function connectDb(){
    await mongoose.connect(process.env.MONGOOSE_ID)
    .then(()=>{
        console.log("database connect success");
        
    }).catch((err)=>{
        console.log(err);
        
    })
 }

 module.exports = connectDb