const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //uj felhasználó beregisztrálása
    
    const UserModel = requireOption(objectrepository, 'UserModel');

    return function(req, res, next) {
        if (typeof req.body.username === 'undefined')
            return next();
        
        if (typeof res.locals.user === 'undefined')
            res.locals.user = new UserModel();

        if (typeof res.locals.user.pass === 'undefined')
            res.locals.user.pass = "test";

        res.locals.user.username = req.body.username;
        res.locals.user.password = req.body.password;
        
        UserModel.find({}, (err, users) => {
            if(users.length <= 0){
                //if no users first user to register shall be admin
                console.log(" newadmin")
                res.locals.user.userGroup = "admin";
            } else {
                console.log("user")
                res.locals.user.userGroup = "user";
            }
            req.session.username = res.locals.user.username
            req.session.userGroup = res.locals.user.userGroup

            req.session.save(err =>{
                console.log(err);
            });
            
            console.log("usgr" + res.locals.user.userGroup)
            res.locals.user.save(err => {
                if (err) {
                    return next(err);
                }
    
                return res.redirect('/');
            });

            if (err) {
                return next(err);
            }
        });
        
    };
};