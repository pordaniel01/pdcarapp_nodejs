const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Car = db.model('Car', {
    name: String,
    image: String,
    color: String,
    details: String,
    _renter: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Car;