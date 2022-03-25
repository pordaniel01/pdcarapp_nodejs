const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        //autó kitörlése id alapján
        console.log('deleteCarMw works!')
        return next();
    };
};