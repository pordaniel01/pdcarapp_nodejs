const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        //kijelentkezés
        console.log('logoutMW works!')
        return next();
    };
};