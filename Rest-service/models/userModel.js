const mongoose = require('mongoose');
const schema = mongoose.Schema;

// create schema
const userSchema = new schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    type: {
        type: String
    }
});

module.exports = user = mongoose.model('user',userSchema);