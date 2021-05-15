const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const Db = require('./database/dbConfig').dbKey;
const userRoutes = require('./routes/userRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoutes');


const app = express(); // creating express app

mongoose.connect(Db) //connecting mongoDb using mongoose
.then(
    console.log('Db connected!')
)
.catch((err)=>{
    console.log(err);
});

app.use(cors()); //using cors middleware as a connect

app.use(bodyParser.json()); // to accept json type requests

app.use('/api/users', userRoutes); //user routes - avantha

app.use('/api/products', productRoutes); // product routes - pasindu

app.use('/api/order', orderRoutes); // order/cart routes -thisara

// orderHistory routes +

// delivery routes - dilmika
app.use('/api/delivery', deliveryRoutes);

// payment routes - dilmika
app.use('/api/payment', paymentRoutes);


// app.use('/',(req,res) => { // setting router
//     res.json("Hi people");
// });

app.listen(port, () => { // setting the app to listen on the configured port
    console.log(`Listening on port: ${port}`);
});
