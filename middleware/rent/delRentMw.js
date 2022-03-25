const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //id alapján middleware kitörlése
    return function(req, res, next) {
        console.log('delRentMw works!')
        next();
    };
};