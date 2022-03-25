const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //új autó felvétele
    return function(req, res, next) {
        console.log('saveCarsMw works!')
        next();
    };
};