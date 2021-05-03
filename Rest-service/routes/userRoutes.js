const router = require('express').Router();
const uuid = require('uuid');
const User = require('../models/userModel');

// get users
router.get('/',(req,res)=>{
    User.find((err,docs)=>{
        res.json(docs);
    })
});

// post user
router.post('/',(req,res)=>{
    req.body.id = uuid.v4();
    const user = new User(req.body);
    user.save().then((u) => {
        res.json(u);
    })
    .catch((err)=>{
        res.json(err);
    })
})

// modify user

// delete user

// get user by Id
router.get('/:id',(req,res)=>{
    res.json("Hello ",req.params.id);
});

module.exports = router;
