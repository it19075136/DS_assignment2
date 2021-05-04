const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema ({

    quantity : {type:Number, required: true},
    amount : {type:Number, required:true},
    deliveryItems : {type:Array, "default" : [] },
    isCancel : {type : Boolean, required:true}

},{
    timestamps:true,
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;