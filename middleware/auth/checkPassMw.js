const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        
        console.log('checkpassMW works!')
        return next();
    };
};