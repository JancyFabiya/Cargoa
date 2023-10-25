const ErrorHander = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken")
// const asyncHandler =require('express-async-handler');
const User = require('../models/userModel');
const UserApplication = require('../models/userApplicationModel')
const multer  = require('multer');
const PurchaseOrder = require('../models/PurchaseOrder');




  //Get all purchase Orders
  const getPurchaseOrders = catchAsyncError(async (req,res,next) => {
    try {
        const purchaseOrders = await PurchaseOrder.find({status:"false"});
        res.json(purchaseOrders);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
  })


    //Get all purchase Orders status
    const getStatusPurchaseOrders = catchAsyncError(async (req,res,next) => {
        try {
            const purchaseOrders = await PurchaseOrder.find({status:"true"});
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


module.exports ={getPurchaseOrders,updateOrders,getStatusPurchaseOrders};