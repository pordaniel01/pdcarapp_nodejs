const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //új autó felvétele
    const CarModel = requireOption(objectrepository, 'CarModel');
    return function(req, res, next) {
        if((typeof req.body.name === 'undefined')||
            (typeof req.body.image === 'undefined')||
            (typeof req.body.color === 'undefined')||
            (typeof req.body.details === 'undefined')){
            return next();
        }
        if(typeof res.locals.car === 'undefined'){
            res.locals.car = new CarModel();
        }

        res.locals.car.name = req.body.name;
        res.locals.car.image = req.body.image;
        res.locals.car.color = req.body.color;
        res.locals.car.details = req.body.details;

        res.locals.car.save(err => {
            if(err){
                return next(err);
            }

            console.log("what");

            return res.redirect(`/`);
        });

    };
};