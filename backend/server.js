const express = require('express');
// const mongoose = require('mongoose');
const connectDatabase = require("./config/connection")
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

// const purchaseOrderRouter = require('./routes/purchaseOrders');

const app = express();
const PORT = process.env.PORT || 5000;

//cors

app.use(cors({
    origin: ["http://localhost:3000"],
    method : ["GET","POST","PUT","DELETE"],
    credentials: true,
}));

//Middleware

app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({limit: '1000mb',extended:true}))
app.use(express.json())
// app.use(express.json());

// Connect to MongoDB

connectDatabase()
// mongoose.connect('mongodb://localhost/your-database', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// Use the purchaseOrderRouter for your routes
// app.use('/api/purchaseOrders', purchaseOrderRouter);


//Route Import 

const user = require('./routes/userRoute')
const vendor = require('./routes/vendorRoute')

//User Route
app.use('/api/v1',user)
app.use('/api/v1/vendor',vendor)


//MiddlewRware for Errors
// app.use(erroeMiddleware);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
