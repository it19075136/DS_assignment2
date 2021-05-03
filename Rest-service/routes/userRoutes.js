const router = require('express').Router();

const user = {
    id: '',
    name: 'Test',
    age: '21',
    type: '',
}

// get user
router.get('/',(req,res)=>{
    res.json(user);
});

// post user

// modify user

// delete user

// get user by Id


module.exports = router;
