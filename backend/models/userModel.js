const mongoose = require('mongoose')
const validator = require("validator");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const crypto = require("crypto");


const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, "Please Enter your Name"],
            maxLength: [30, "Name cannot exceed 30 charectors"],
            minLength: [3, "Name should have more than 3 charectors"],
                  },
        phonenumber:{
            type:Number,
            required: [true, "Please Enter your Mobile Number"],
   
            minLength: [10, "Mobile Number should have 10 charectors"],        },
        email:{
            type:String,
            required: [true, "Please Enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
        },
        password:{
            type:String,
            required: [true, "Please Enter your Password"],
            // minLength: [8, "Password should have more than 8 charectors"],
            select: false,        },
        role:{
            type:String,
            default:"user",
        },
    },
    // {
    //     timestamps:true,
    // }
)


userSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        next();
    }
    // const salt = await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,10)
})

//JWT TOKEN
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
      expiresIn: process.env.JWT_EXPIRE,
    })
  }

  //Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
  
  };
// userSchema.methods.matchPassword = async function (enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password)
// }

module.exports = mongoose.model('User',userSchema)

