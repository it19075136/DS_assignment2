const router = require('express').Router();
const Order = require('../models/orderModel');

router.post('/add', (req, res) => {
    const order = new Order(req.body)
    console.log(order);
    order.save().then((order) => { res.json(order) }).catch((err) => res.json(err));
})

router.get('/:id', (req, res) => {
    Order.find({ userId: req.params.id }).then((orders) => res.json(orders)).catch((err) => res.status(400).json("Error" + err))
})

router.post("/orderStatus/:id", (req, res) => {
    Order.findByIdAndUpdate(req.params.id).then((order) => {
      order.status = "paymont done";
  
      order.save().then(() => res.json("order status updated"));
    });
  });

module.exports = router;