const mongoose = require('mongoose');
const schema = mongoose.Schema;

//-----create schema to order----//
const orderSchema = new schema({
    userId:{
        type:String,
        require:true
    },
    item:{
        type:Array,
        require:true,
        itemId:{
            type:String,
            required:true
        },
        itemName:{
            type: String,
            required: true
        },
        itemcolor:{
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
        imgUrl:{
            type:String,
            required:true
        }
    },
    TotalAmount:{
        type:Number,
        require:true
    },
    date:{
        type: Date,
    },
    status:{
        type:String,
        require:true
    }
});


module.exports = Order = mongoose.model('order', orderSchema);