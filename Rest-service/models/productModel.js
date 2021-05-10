const mongoose = require('mongoose');
const schema = mongoose.Schema;

//-----create schema to products----//
const productSchema = new schema({
    itemName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true

    },
    date:{
        type: Date,
        default: Date.now
    },
    imageUrl: {
        type: String,
    }
});


module.exports = Product = mongoose.model('products', productSchema);