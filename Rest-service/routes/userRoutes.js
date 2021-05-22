const router = require('express').Router();
const uuid = require('uuid');
const User = require('../models/userModel');
const jsonwebtoken = require('jsonwebtoken');
const passwordHash = require('password-hash');
const { reset } = require('nodemon');

// get users -- done
router.get('/',(req,res)=>{
    User.find((err,docs)=>{
        res.json(docs);
    })
});

// get user by id
router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    User.findOne({
        id: req.params.id      
    }).then((u) => {
    console.log(u);
    res.json(u);
    }).catch((err) => res.json("Error:" + err));
});

// post user -- done
router.post('/',(req,res)=>{
    req.body.id = uuid.v4();
    const user = new User(req.body);
    const token = jsonwebtoken.sign({
        id: user.id,
        email: user.email,
        type: user.type,
        phone: user.phoneNumber,
        address: user.address
    }, "jwtSecret")

    User.findOne({
        email: user.email
    }).then((u)=>{
        if(u){
            res.json("ALREADY_EXISTS");
        }
        else{
            user.save().then((u) => {
                res.json({token, u});
            })
            .catch((err)=>{
                res.json(err);
            })}
        }
    ).catch((err)=>{
        res.json(err);
    });
})

// modify user

// delete user

// login user by email -- done
router.post('/:email',(req,res)=>{
    User.findOne({
        email: req.body.email
    }).then(user=>{
        if(passwordHash.verify(req.body.password,user.password)){
            const token = jsonwebtoken.sign({
                id: user.id,
                email: user.email,
                type: user.type,
                phone: user.phoneNumber,
                address: user.address
            }, "jwtSecret")
            res.json({token});
        }
        else{
            res.send("AUTHERROR");
        }
    })
});

module.exports = router;
