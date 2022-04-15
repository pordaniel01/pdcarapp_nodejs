const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    // addott user adatainak lekérdezése
    return function(req, res, next) {
        const UserModel = requireOption(objectrepository, 'UserModel');
        UserModel.findOne({username: req.session.username}, (err, user) => {
            console.log("got the user!" + user.username + user.userGroup);
            res.locals.user = user;
            return next();
        });
        
    };
};