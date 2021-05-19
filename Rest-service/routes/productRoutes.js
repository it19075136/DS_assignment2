const router = require('express').Router();
const Product = require('../models/productModel');

//@desc   GET all products from db
//@route  GET /api/products
//@access Public
router.get('/', (req, res) => {
   
        Product.find((err, docs) => {
                
            res.json(docs);
        });
});

//@desc   GET a product by id from db
//@route  GET /api/products/:id
//@access Public
router.get('/:id', (req, res) => {
        Product.findById(req.params.id)
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json("Error:" + err))
});

//@desc   Add product to db
//@route  POST /api/products
//@access Public
router.post("/add", (req, res) => {
        const newProduct = new Product(req.body);
        newProduct.save().then(() => res.json("Product Added"));
});

//@desc   Update product from db
//@route  POST /api/products/update/:id
//@access Public
router.patch("/update/:id", (req, res) => {
        // Product.findOneAndUpdate({_id:req.params.id},{_id:req.params.id,itemName:req.body.itemName,description:req.body.description,countInStock:Number(req.body.countInStock),price:Number(req.body.price),date:req.body.date,imageUrl:req.body.imageUrl,sellerId:req.body.sellerId}).then((product) => {
        //         // Product.findById(req.params.id).then((product) => res.json(product),console.log(product)).catch((err) => res.status(400).json("Error:" + err))
        //         // console.log(product)
        //         res.json(product)
        //         // (product.itemName = req.params.itemName),
        //         // (product.description = req.params.description),
        //         // (product.countInStock = Number(req.params.countInStock)),
        //         // (product.price = Number(req.params.price)),
        //         // (product.date = Date(req.params.date)),
        //         // (product.imageUrl = req.params.date),
        //         // (product.sellerId = req.params.sellerId);
        //         // product.save().then(() => res.json("Product Updated!"));
        //         // console.log(res.data);
        // }).catch(err=>{
        //         console.log(err);
        // })
        Product.findByIdAndUpdate(req.params.id).then((product) => {
                (product.itemName = req.body.itemName),
                // (product.price = Number(req.body.price)),
                //   (product.countInStock = Number(req.body.countInStock)),
                //   (product.description = req.body.description),
                //   (product.sellerId = req.body.sellerId);
                //   (product.imageUrl = req.body.imageUrl);
                //   (product.date = req.body.date);
                  product.save().then(() => res.json(product));
              });
});

//@desc   Delete product
//@route  DELETE /api/products
//@access Public
router.delete("/:id", (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then((product) => 
        res.json(
                product.id
        )).catch((err) => res.status(400).json("Error: " + err));
        console.log(res.data);
})

module.exports = router;