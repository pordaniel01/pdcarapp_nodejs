const requireOption = require('../requireOption');

module.exports = function(objectrepository) {

    //USER identifikálása
    return function(req, res, next) {
        
        console.log('authMW works!')
        next();
    };
};