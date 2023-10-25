// const jwt = require('jsonwebtoken')

// const generateToken=(id)=>{
//     return jwt.sign({id},process.env.JWT_SECRET,{
//         expiresIn:"30d",
//     })
// }


// module.exports = generateToken;

// const jwt=require('jsonwebtoken')

// const generateToken= id=>{
//     return jwt.sign({id},"MYSECRET",{expiresIn:"20d"})
// }

// module.exports=generateToken



// const jwt=require('jsonwebtoken')

// const generateToken= id=>{
//     return jwt.sign({id},"MYSECRET",{expiresIn:"20d"})
// }

// module.exports=generateToken



//Creating Token and Saving in Cookie
const sendToken = (user,statusCode,res) => {
    console.log('uuu');
        const token = user.getJWTToken();
    console.log('lll',token);
        //options for cookie 
        const options = {
            expires: new Date(
                Date.now() + process.env.COOKIE_EXPIRE * 24 *60*60*1000),
            httpOnly:true
        };
    
        res.status(statusCode).cookie("token",token,options).json({
            success: true,
            user,
            token,
        });
    };
    
    
    module.exports = sendToken