const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //id alapján autó lekérdezése
    return function(req, res, next) {
        console.log('getCarMw works!')
        next();
    };
};