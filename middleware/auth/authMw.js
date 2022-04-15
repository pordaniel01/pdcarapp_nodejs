const requireOption = require('../requireOption');

module.exports = function(objectrepository) {

    //USER identifikálása
    return function(req, res, next) {
        console.log("autmw");
        if (typeof req.session.username === 'undefined') {
            console.log("not logged");
            return res.redirect('/login');
        }
        console.log("asd" + req.session.userGroup)
        res.locals.userGroup = req.session.userGroup;
        res.locals.username = req.session.user;
        next();
    };
};