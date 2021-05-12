const router = require('express').Router();
const uuid = require('uuid');
const User = require('../models/userModel');

// get users -- done
router.get('/',(req,res)=>{
    User.find((err,docs)=>{
        res.json(docs);
    })
});

// post user -- done
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

// login user by email -- done
router.post('/:email',(req,res)=>{
    User.findOne({
        email: req.params.email
    }).then(user=>{
        if(user.password === req.body.password)
            res.json(user);
        else
            res.json("AUTHERROR");
    })
    console.log(req.params.email);
});

module.exports = router;
