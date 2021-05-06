const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const paymentSchema = new Schema({
    itemName : {type:String, requires:true},
    noOfItems : {type: Number, required:true},
    totalAmount: {type:Number, required:true},
    deliveryCharges : {type:Number, required:true},
    NIC : {type:Number, required : true},
    PhoneNumber : {type:Number, required:true},
    CardNumber : {type:Number, required:true},
    ExpirationMonth : {type:String, required:true},
    ExpirationYear : {type:Number, required:true },
    CVC : {type:Number, required:true}
},{
    timestamps:true
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;