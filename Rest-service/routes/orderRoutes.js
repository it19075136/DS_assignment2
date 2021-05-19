const router = require('express').Router();
const Order = require('../models/orderModel');

router.post('/add',(req,res)=>{
    const order  = new Order(req.body)
    order.save().then(()=>{res.json('order added')})
})

router.get('/:id',(req,res)=>{
    Order.find({userId:req.params.id}).then((orders)=>res.json(orders)).catch((err)=>res.status(400).json("Error"+ err))
})
module.exports = router; 