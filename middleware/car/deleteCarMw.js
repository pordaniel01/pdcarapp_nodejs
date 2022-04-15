const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.car === 'undefined') {
            return next();
        }
        console.log("carto remove: " + res.locals.car.name)
        res.locals.car.remove(err => {
            if (err) {
                console.log("delete error" + err)
                return next(err);
            }

            return res.redirect('/');
        });
    };
};