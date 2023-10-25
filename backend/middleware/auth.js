// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");
// const asyncHandler = require("express-async-handler")


// const protect = asyncHandler(async (req,res,next)=>{
//     let token;

//     if(
//         req.headers.authorization &&
//         req.headers.authorization.startsWith("Bearer")
//     ){
//         try{
//             token = req.headers.authorization.split(" ")[1];

//             //decodes token id
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);

//             req.user =await User.findById(decoded.id).select(" password");

//             next();
//         }catch(error){
//             res.status(401);
//             throw new Error("Not authorized, token failed");
//         }

//     }

//     if(!token) {
//         res.status(401);
//         throw new Error("Not authorized, no token");
//     }
// })

// module.exports = { protect};



const ErrorHander = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncErrors");
const  jwt = require("jsonwebtoken");
const  User = require("../models/userModel")

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;


  if(!token){
    return next(new ErrorHander("Please Login to Access this Resource",401));
  }

  const decodedData = jwt.verify(token,process.env.JWT_SECRET);
  //console.log(decodedData,"===decodedData");
  
  req.user = await User.findById(decodedData.id);
// console.log('authenticated');
  next()




});

exports.authorizesdRoles = (...roles) =>{
    return (req,res,next)=> {

        if(!roles.includes(req.user.role)) {
          return next(new ErrorHander(`Role : ${req.user.role} is not allowed to access this resouce`,403))
        }
        //  console.log(req.user.role,'role');
        next();
    }
}

