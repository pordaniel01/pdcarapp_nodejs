const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //létező user adatainak a frissítése
    
    return function(req, res, next) {
        console.log('updateUserMwWorks works!')
        next();
    };
};