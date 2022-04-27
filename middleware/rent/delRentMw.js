const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //id alapján middleware kitörlése
    return function(req, res, next) {
        const RentModel = requireOption(objectrepository, 'RentModel');
        const CarModel = requireOption(objectrepository, 'CarModel');

        RentModel.findOne({_id: req.params.rentid}, (err, rent) => {
            if(err){
                return next(err);
            }
            console.log(rent._id);
            CarModel.findOne({ _id: rent._car }, (err, car) => {
                car._renter = undefined;
                car.save(err => {
                    if(err){
                        console.log(err)
                    }
                });
            });
            rent.remove(err => {
                if (err) {
                    console.log("delete error" + err)
                    return next(err);
                }
    
                return res.redirect('/rents');
            });
        });
        
    };
};