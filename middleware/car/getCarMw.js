const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CarModel = requireOption(objectrepository, 'CarModel');
    return function(req, res, next) {

        CarModel.findOne({ _id: req.params.carid }, (err, car) => {
            if (err) {
                return next(err);
            }
            console.log("carname_: " + car.name)
            res.locals.car = car;
            return next();
        });
    };
};