const userModule = require('../modules/userr.module')
const foodpartnerModel = require('../modules/foodpartner.module')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')



 async function userResister(req ,res){
   const { fullName , email , password } = req.body;

   const userAlreadyPresent = await userModule.findOne({email});
   if(userAlreadyPresent){
    return res.status(401).json({
        message:"email already exit with this email try with another"
    })
   }
   const hashPassword =  await bcrypt.hash(password , 10);

   const user = await userModule.create({
    fullName,
    email,
    password:hashPassword,
   })
const token = jwt.sign({
    id:user._id,
},process.env.JWT_SECRET)

   res.cookie("token" , token)

    return res.status(200).json({
    message:"user is create successfull",
    name:user.fullName,
    emal:user.email,
    token,
   })

}

async function userlogin(req , res){
    const { email , password} = req.body

    const user = await userModule.findOne({email})

    if(!user){
        return res.status(400).json({
            message:"invalid email or password"
        })
    }

    const passwordValied = await bcrypt.compare(password , user.password)

    if(!passwordValied){
        return res.status(400).json({
            message:"invalid email or password"
        })
    }

    const token = jwt.sign({id:user._id} , process.env.JWT_SECRET)

    res.cookie("token" , token)

    res.status(200).json({
        message:"user logined successfull",
        name:user.fullName,
    })
}

async function userlogout(req , res){
        res.clearCookie("token")
        res.status(200).json({
            message:"user logout successfull"
        })
}

async function foodpartnerResister(req , res){
    const {fullName , email , password , phone , address , contactName} = req.body

    const foodpartnerExit = await  foodpartnerModel.findOne({email})

    if(foodpartnerExit){
        return res.status(401).json({
            message:"food partner already exit with this email"
        })
    }

    const hashedpassword = await  bcrypt.hash(password , 10)

    const foodpartner = foodpartnerModel.create({
        fullName,
        email,
        password:hashedpassword,
        phone,
        address,
        contactName
    })

    const token  = jwt.sign({id:foodpartner._id} , process.env.JWT_SECRET)

    res.cookie("token",token)


    res.status(200).json({
        message:"food partner account created successfull",
        name:foodpartner.fullName,
        email:foodpartner.email,
        token,
    })
}

async function foodpartnerLogin(req ,res) {
    const {email , password} = req.body

    const foodpartner = await foodpartnerModel.findOne({email})

    if(!foodpartner){
        return res.status(400).json({
            message:"invalid email or password"
        })
    }

    const passwordvalid =  await bcrypt.compare(password , foodpartner.password)

    if(!passwordvalid){
        return res.status(401).json({
            message:"invalid password and email"
        })
    }

    const token  = jwt.sign({id:foodpartner._id} , process.env.JWT_SECRET)

    res.cookie("token" , token)

    res.status(201).json({
        message:"food partner login success",
        name:foodpartner.fullName,
        token,
    })
}

async function foodpartnerLogout(req, res){
    res.clearCookie("token")
    res.status(200).json({
        message:"food partner logout successfull"
    })
}

module.exports = {userResister , userlogin , userlogout, foodpartnerResister , foodpartnerLogin , foodpartnerLogout}