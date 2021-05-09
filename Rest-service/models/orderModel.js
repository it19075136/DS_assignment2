const mongoose = require('mongoose');
const schema = mongoose.Schema;

//-----create schema to order----//
const orderSchema = new schema({
    OrderId:{
        type:String,
        required:true
    },
    itemId:{
        type:String,
        required:true
    },
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
        default: Date.now(),
    }
});


module.exports = Order = mongoose.model('order', orderSchema);