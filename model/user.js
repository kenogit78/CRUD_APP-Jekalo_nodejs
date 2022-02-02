const mongoose = require('mongoose');

const Schema =  mongoose.Schema

const user = new Schema({
    name_prefix: { type: String,  uppercase: true},
    first_name: { type: String, required: true},
    last_name: String,
    username: { type: String, unique : true, required: true},
    date_of_birth: { type: String, default: Date } 
})

module.exports = mongoose.model('User', user)
