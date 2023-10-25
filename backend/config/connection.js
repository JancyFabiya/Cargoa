const mongoose = require('mongoose')

const connectDatabase = () => {
    // mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/cargoa",{
    useNewUrlParser:true
}).then(()=>{
    console.log("DB connected successfully");
}).catch((e)=>{
    console.log("DB not connected");
})
}

module.exports = connectDatabase;