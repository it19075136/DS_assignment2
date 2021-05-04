const router = require('express').Router();
let Delivery = require('../models/deliveryModel');

//add delivery
router.post('/add', (req,res) => {

       const newDelivery = new  Delivery(
            req.body
           );

           newDelivery.save()
                .then(() => res.json('Delivery Added'));
});



// //get delivery
router.get('/', (req,res) => {
    Delivery.find((err,docs) => {
        res.json(docs);
    })
});

// //update delivery
router.post('/update/:id', (req,res) => {
    Delivery.findByIdAndUpdate(req.params.id)
        .then((delivery) => {
            delivery.quantity = Number(req.params.quantity), 
            delivery.amount = Number(req.params.amount) ,
            delivery.deliveryItems = req.params.deliveryItems, 
            delivery.isCancel = req.params.isCancel 

            delivery.save()
                .then(() => res.json("Delivery Updated!"))
                })
})


// //cancel delivery




// //get delivery using an id

router.get('/:id', (req,res) => {
    Delivery.findById(req.params.id)
        .then((delivery) => res.json(delivery))
        .catch(err => res.status(400).json('Error:'+err))
})


// //delete by id



module.exports = router;