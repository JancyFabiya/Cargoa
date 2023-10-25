// const notFound =(req,res,next)=>{
//     const error = new Error(`Not found - ${req.originalUrl}`);
//     res.status(404);
//     next(error);
// };

// const errorHandler = (err,req,res,next)=>{
//     const statusCode=res.statusCode === 200 ? 500 : res.statusCode;
//     res.status(statusCode);
//     res.json({
//         message: err.message,
//         stack: process.env.NODE_ENV === "production" ? null : err.stack,
//     })
// }

// module.exports ={notFound,errorHandler}

//Catch Async Error
module.exports = theFunc => (req,res,next)=>{

    Promise.resolve(theFunc(req,res,next)).catch(next);
};