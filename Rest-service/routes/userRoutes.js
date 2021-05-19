const router = require('express').Router();
const uuid = require('uuid');
const User = require('../models/userModel');
const jsonwebtoken = require('jsonwebtoken');

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
    const token = jsonwebtoken.sign({
        id: user.id,
        email: user.email
    }, "jwtSecret")
    user.save().then((u) => {
        res.json({token, u});
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
        email: req.body.email
    }).then(user=>{
        if(user.password === req.body.password){
            const token = jsonwebtoken.sign({
                id: user.id,
                email: user.email,
                type: user.type
            }, "jwtSecret")
            res.json({token});
        }
        else{
            res.status(404).send("AUTHERROR");
        }
    })
});

module.exports = router;
