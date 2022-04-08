const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Rent = db.model('Rent', {
    _renter: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _car: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }
});

module.exports = Rent;