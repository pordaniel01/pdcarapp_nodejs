const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //id alapján rent lekérdezése
    return function(req, res, next) {
        const CarModel = requireOption(objectrepository, 'CarModel');  
        const RentModel = requireOption(objectrepository, 'RentModel');  

        if(res.locals.userGroup == "admin"){
            //ha admin minden bérlést lát
            RentModel.find({}, (err, rents) => {
                if(err){
                    return next(err);
                }
                res.locals.rents = rents;
                return next();
            });
        }
        if(res.locals.user.userGroup == "user"){
            RentModel.find({_renter: res.locals.user.id}, (err, rents) => {
                if(err){
                    return next(err);
                }
                res.locals.rents = rents;
                return next();
            });
        }
        
        
    };
};