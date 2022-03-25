const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //uj felhasználó beregisztrálása
    
    return function(req, res, next) {
        console.log('newUserMw works!')
        next();
    };
};