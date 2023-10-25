const ErrorHander = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken")
// const asyncHandler =require('express-async-handler');
const User = require('../models/userModel');
const UserApplication = require('../models/userApplicationModel')
const multer  = require('multer');
const PurchaseOrder = require('../models/PurchaseOrder');

// const generateToken = require('../utils/jwtToken');


//Register a user

const registerUser = catchAsyncError(async (req,res,next) =>{
    const {name,phonenumber,email,password}=req.body;
    
    const userExists=await User.findOne({email})

    if(userExists){
        // res.status(400)
        // throw new Error('User Already Exists')
        return next(new ErrorHander("User already exists", 403));

    }else{
    const user = await User.create({
        name,
        phonenumber,
        email,
        password,
    })
    if(user){
      res.status(200).json({
        success: true,
        message: "Successfully Registered",
      });
    }else{
      res.status(400)
          throw new Error("Error Occured!")
    }
    // sendToken(user, 201, res);

}

    // if(user){
    //     res.status(201).json({
    //         _id:user._id,
    //         name:user.name,
    //         phonenumber:user.phonenumber,
    //         email:user.email,
    //         // password:user.password,
    //         isAdmin:user.isAdmin,
    //     })
    // }else{
    //     res.status(400)
    //     throw new Error("Error Occured!")
    // }
    // res.json({
    //     name,
    //     email,
    // })
})


//Login User


const authUser = catchAsyncError(async (req,res,next) =>{
    const {email,password}=req.body;
      // checking if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email and Password", 400));
  }

    const user=await User.findOne({email}).select("+password")
    if (!user) {
        return next(new ErrorHander("Invalid Email or Password", 401));
      }
      const isPasswordMatch = await user.comparePassword(password);
      if (!isPasswordMatch) {
        return next(new ErrorHander("Invalid Email or Password", 401));
      }
    
      // sendToken(user, 200, res);
      res.status(200).json({
        success: true,
        message: "Successfully Logged",
      });
    // if(user && (await user.matchPassword(password))){
    //     res.json({
    //         _id:user._id,
    //         name:user.name,
    //         phonenumber:user.phonenumber,
    //         email:user.email,
    //         // password:user.password,
    //         isAdmin:user.isAdmin,
    //         token:generateToken(user._id)
    //     })
    // }else{
    //     res.status(400)
    //     throw new Error("Invalid Email or Password!")
    // }

  
})

//Logout User

const logout = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });

// new Purchase Orders
  const purchaseOrders = catchAsyncError(async (req,res,next)=>{
    try{
        const newPurchaseOrder = new PurchaseOrder(req.body);
        console.log('newPurchaseOrder',newPurchaseOrder);
    const savedPurchaseOrder = await newPurchaseOrder.save();
res.status(200).json({
    success:true,
    message: "Successfully Ordered"
})
    }catch(error){
        res.status(500).json({message: "Server Error"})
    }
  })


  //Get all purchase Orders
  const getPurchaseOrders = catchAsyncError(async (req,res,next) => {
    try {
        const purchaseOrders = await PurchaseOrder.find();
        res.json(purchaseOrders);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
  })

  //update Purchase Orders

  const updateOrders = catchAsyncError(async (req,res,next)=> {
    const newOrder = req.body
    // const id = await purchaseOrders.find(req.params.id)
    console.log("newOrder",newOrder);
 
    const update = await PurchaseOrder.findByIdAndUpdate({_id:req.params.id}, { $set: { shippingSchedules: newOrder, status: 'true' } }, {
        new : true,
        runValidators: true,
    useFindAndModify: false,
    })
    console.log("update",update);
    if(update){
    res.status(200).json({
        success: true,
        message: "Order Successfully Updated ",
      });
    }else{
      res.status(400)
          throw new Error("Error Occured!")
    }
  })


  // Get All vendors
  const getVendor = catchAsyncError(async (req,res,next) => {
    try {
        const purchaseOrders = await User.find({role:"vendor"});
        res.json(purchaseOrders);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
  })

// const getUserbyId=async(req,res)=>{
//     const {id}=req.params
//     const UserbyID=await User.findById(id)
//     res.json(UserbyID)

// }


// const editUserbyId=async(req,res)=>{
//     const {id}=req.params
//     const editUser=await User.findByIdAndUpdate(id,req.body)
//     res.json(editUser)
// }


// const deleteUser=async(req,res)=>{
//     const {id}=req.params
//     const deleteuser=await User.findByIdAndDelete(id)
//     res.json(deleteuser)
// }

// /*   User Application */
// const userapplication = asyncHandler(async (req,res) =>{
//     const {email,name,address,city,state,phonenumber,companyname,
//     teamandbackground,companyandproduct,problem,solution,valueproposition,
//     competators,revenue,potentialmarketsize,plan,type,businessproposal,userid,status}=req.body;    
   
//     const applicationExists=await UserApplication.findOne({email})

//     if(applicationExists){
//         res.status(400)
//         throw new Error('Application Already Exists')
//     }
//     const userApplication = await UserApplication.create({
//         email,name,address,city,state,phonenumber,companyname,
//                     teamandbackground,companyandproduct,problem,solution,valueproposition,
//                     competators,revenue,potentialmarketsize,plan,type,businessproposal,userid,
//                     status:"pending",
//                     bookingStatus: false,
//                     slotCode: "null",
//     })

//     if(userApplication){
//         res.status(201).json({
//             userApplication
//          })
//     }else{
//         res.status(400)
//         throw new Error("Error Occured!")
//     }
//     // res.json({
//     //     name,
//     //     email,
//     // })
// })

// /* get application */

// const getApplication=async(req,res)=>{
//     const id=req.params.id
//     const getappli=await UserApplication.find({userid:id})
//     console.log(getappli);
//     res.json(getappli)
// }
// /* get newapplication in admin side */
// const getNewApplication=async(req,res)=>{
//     const getnewAppli=await UserApplication.find({status:'pending'})
//     console.log(getnewAppli)
//     res.json(getnewAppli)

// }


module.exports ={registerUser,authUser,logout,purchaseOrders,getPurchaseOrders,updateOrders,getVendor};