const express = require("express");
const { getPurchaseOrders,updateOrders,getStatusPurchaseOrders } = require("../controllers/vendorController");
// const {} = require('../controllers/userControllers')
// const {protect} = require("../middlewares/authMiddlewares")
const { isAuthenticatedUser, authorizesdRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/getOrders").get(getPurchaseOrders)
router.route("/getStatusOrders").get(getStatusPurchaseOrders)


router.route("/updateOrder/:id").patch(updateOrders)

// router.route('/getuser/:id').get(getUserbyId)
// router.route('/getuser/edit/:id').post(editUserbyId)
// router.route('/deleteUser/:id').post(deleteUser)
// // router.route('/getApplication').get(protect,getApplication)
// router.route('/userapplication').post(userapplication)
// router.route('/getapplication/:id').get(getApplication);





module.exports = router;