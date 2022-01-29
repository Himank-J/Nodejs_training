const mongoose = require('mongoose')

const User=mongoose.model("Customer",{
    name:String,
    email:{
     type:String,
     unique:true,
     required:[true,"please enter the email"],
    },
    password:{
        type:String,
        required:[true,"enter your pasword"],
    }
    ,
    mobile:{
         type:Number,
         required:[true,"enter your mobile number"],
         minlength:10,
         maxlenghth:10,
    },
    country:{
        type:String,
        default:"IND",
        required:true
    },
    area:String,
    pincode:{
         type:Number,
         required:true
    },
    address:String
 })
 var userModel = mongoose.model('user',User);

 module.exports=userModel;