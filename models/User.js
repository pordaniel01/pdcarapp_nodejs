const Schema = require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('User', {
    username: String,
    password: String,
    userGroup: String,
    _rentedCar: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }
});

module.exports = User;