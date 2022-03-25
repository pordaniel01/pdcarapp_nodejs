const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //id alapján rent lekérdezése
    console.log('getRentMW works!')
    return function(req, res, next) {
        console.log('getRentMW works!')
        next();
    };
};