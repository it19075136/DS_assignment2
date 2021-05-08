const mongoose = require('mongoose');
const schema = mongoose.Schema;

//-----create schema to order----//
const orderSchema = new schema({
    itemName:{
        type: String,
        required: true
    },
    qty:{
        type: Number,
        required: true
    },
    amount:{
        type: Number,
        required: true

    },
    date:{
        type: Date,
        default: Date.now,
    }
});


module.exports = Order = mongoose.model('order', orderSchema);