const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //új bérlés létrehozása
    return function(req, res, next) {
        const RentModel = requireOption(objectrepository, 'RentModel');  

        let rent = RentModel();
        console.log("renter and car" +  res.locals.user._id + "asdf" +  res.locals.car._id)
        rent._renter = res.locals.user._id;
        rent._car = res.locals.car._id;
        res.locals.car._renter =  res.locals.user._id;
        rent.save(err =>{
            if (err)
                return next(err);
        });
        res.locals.car.save(err =>{
            if (err)
                return next(err);
        });
        return res.redirect(`/`);
        
    };
};