const router = require('express').Router();
const order = require('../models/orderModel');


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
    order.OrderId
})
router.get('/',(req,res)=>{
    order.find({userId:req.params.id}).then((orders)=>res.json(orders)).catch((err)=>res.status(400).json("Error"+ err))
})
router.get('/:id',(req,res)=>{
    order.findById(this.params.id).then((order)=>res.json(order)).catch(res.status(400).json("Error"+ err))
})
// router.get('/OrderHistory', (req, res) => {
//     Product.findById(req.params.id)
//     .then((product) => res.json(product))
//     .catch((err) => res.status(400).json("Error:" + err))
// });
module.exports = router; 