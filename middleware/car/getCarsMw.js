const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //összes autó lekérdezése
    return function(req, res, next) {
        console.log('getCarsMw works!')
        next();
    };
};