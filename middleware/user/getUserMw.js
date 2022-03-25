const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    // addott user adatainak lekérdezése
    return function(req, res, next) {
        console.log('getUserMw works!')
        next();
    };
};