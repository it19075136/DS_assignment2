const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const Db = require('./database/dbConfig').dbKey;

const app = express(); // creating express app

mongoose.connect(Db) //connecting mongoDb using mongoose
.then(
    console.log('Db connected!')
)
.catch((err)=>{
    console.log(err);
});

app.use(bodyParser.json()); // to accept json type requests

app.use('/api/users', userRoutes) //user routes - avantha

// product routes - pasindu

// order/cart routes -thisara

// orderHistory routes 

// delivery routes - dilmika

// payment routes - dilmika

app.use('/',(req,res) => { // setting router
    res.json("Hi people");
});

app.listen(port, () => { // setting the app to listen on the configured port
    console.log(`Listening on port: ${port}`);
});
