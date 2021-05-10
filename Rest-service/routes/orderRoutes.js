const router = require('express').Router();
const Order = require('../models/orderModel');


// router.get("/:id",(req,res)=>{
//     order.find({userId:req.params.id},(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(data);
//         }
//     });
//     User.find({age: {$gte: 21, $lte: 65}}, callback);
// })
router.post('/',(req,res)=>{
    const order  = new Order(req.body)
    order.save().then(()=>{res.json('order added')})

})
router.get('/',(req,res)=>{
    Order.find({userId:req.params.id}).then((orders)=>res.json(orders)).catch((err)=>res.status(400).json("Error"+ err))
})
router.get('/:id',(req,res)=>{
    Order.findById(this.params.id).then((order)=>res.json(order)).catch(res.status(400).json("Error"+ err))
})
// router.get('/OrderHistory', (req, res) => {
//     Product.findById(req.params.id)
//     .then((product) => res.json(product))
//     .catch((err) => res.status(400).json("Error:" + err))
// });
module.exports = router; 