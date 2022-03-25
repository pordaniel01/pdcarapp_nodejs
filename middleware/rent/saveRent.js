const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //új bérlés létrehozása
    return function(req, res, next) {
        console.log('saveRentMW works!')
        next();
    };
};