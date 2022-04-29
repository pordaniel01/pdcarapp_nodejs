const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    
    return function(req, res, next) {
        res.locals.user.username = req.body.username
        res.locals.user.password = req.body.password
        req.session.username = res.locals.user.username
        console.log("edit user " + req.body.username + req.body.password)
        res.locals.user.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/logout');
        });
    };
};