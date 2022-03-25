const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //id alapján user törlése
    
    return function(req, res, next) {
        console.log('delUserMw works!')
        next();
    };
};