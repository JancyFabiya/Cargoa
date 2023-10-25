const express = require("express");
const { registerUser, authUser,logout,purchaseOrders,getPurchaseOrders,updateOrders,getVendor } = require("../controllers/userController");
// const {} = require('../controllers/userControllers')
// const {protect} = require("../middlewares/authMiddlewares")
const { isAuthenticatedUser, authorizesdRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/logout").get(logout);
router.route("/order").post(purchaseOrders)
router.route("/getOrders").get(getPurchaseOrders)
router.route("/updateOrder/:id").patch(updateOrders)
router.route("/getVendor").get(getVendor)


// router.route('/getuser/:id').get(getUserbyId)
// router.route('/getuser/edit/:id').post(editUserbyId)
// router.route('/deleteUser/:id').post(deleteUser)
// // router.route('/getApplication').get(protect,getApplication)
// router.route('/userapplication').post(userapplication)
// router.route('/getapplication/:id').get(getApplication);





module.exports = router;