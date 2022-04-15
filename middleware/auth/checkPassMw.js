const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {

        const UserModel = requireOption(objectrepository, 'UserModel');

        if (typeof req.body.password === 'undefined') {
            return next();
        }
        UserModel.findOne({username: req.body.username}, (err, user) => {
            if(err || !user){
                console.log("error " + err);
                return next(err);
            }
            console.log("found user!" + user.username)
            if(user.password == req.body.password){
                req.session.username = user.username;
                req.session.userGroup = user.userGroup;
                res.locals.user = req.session.user;
                return req.session.save(err =>{
                    console.log("redirec")
                    res.redirect('/')
                });
                
            }
            return next();
        });
    };
};