const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')


const userApplicationSchema = mongoose.Schema(
    {
        userid:{
            type:String,
        },
        name:{
            type:String,
            required:true,
        },
        phonenumber:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        address:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        state:{
            type:String,
            required:true,
        },
        companyname:{
            type:String,
            required:true,
        },
        problem:{
            type:String,
            required:true,
        },
        solution:{
            type:String,
            required:true,
        },
        valueproposition:{
            type:String,
            required:true,
        },
        competators:{
            type:String,
            required:true,
        },
        revenue:{
            type:String,
            required:true,
        },
        potentialmarketsize:{
            type:String,
            required:true,
        },
        plan:{
            type:String,
            required:true,
        },
        businessproposal:{
            type:String,
            required:true,
        },
        type:{
            type:String,
            required:true,
        },
        status:{
            type:String,
            required:true,
        },
        bookingStatus: {
            type: Boolean,
        },
        slotCode: {
            type: String,
        }
    },
    {
        timestamps:true,
    }
)


// userSchema.pre('save',async function (next){
//     if(!this.isModified('password')){
//         next();
//     }
//     const salt = await bcrypt.genSalt(10)
//     this.password=await bcrypt.hash(this.password,salt)
// })

// userSchema.methods.matchPassword = async function (enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password)
// }

const UserApplication = mongoose.model('UserApplication',userApplicationSchema)

module.exports=UserApplication