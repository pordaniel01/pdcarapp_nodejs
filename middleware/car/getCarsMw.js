const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //összes autó lekérdezése
    return function(req, res, next) {
        const CarModel = requireOption(objectrepository, 'CarModel');  

        
        
        CarModel.find({}, (err, cars) => {
            if(err){
                return next(err);
            }
            res.locals.cars = cars;
            return next();
        });
    };
};