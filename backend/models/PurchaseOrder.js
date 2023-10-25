const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
  productName: String,
  quantity: Number,
  dateOfShipping: String,
  shippingSchedules: {
    schedule1: String,
    schedule2: String,
    schedule3: String,
  },
  pdf:{
    name: String,
    description: String,
    fileUrl: String,
    createdAt:{type:Date, default:Date.now},
  },
  status:{
    type:String,
    default:"false",
},
});

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);
