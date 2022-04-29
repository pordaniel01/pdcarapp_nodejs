const requireOption = require('../requireOption');

module.exports =  function(objectrepository) {
    //id alapján rent lekérdezése
    return  function(req, res, next) {
        const CarModel = requireOption(objectrepository, 'CarModel');  
        const RentModel = requireOption(objectrepository, 'RentModel');  

        if(res.locals.userGroup == "admin"){
            //ha admin minden bérlést lát
            RentModel.find({}, (err, rents) => {
                if(err){
                    return next(err);
                }
                if(rents.length == 0){
                    res.locals.rents = [];
                    res.locals.cars = [];
                    next();
                    
                }
                let cars = [];
                for(let i = 0; i < rents.length; i++){
                    console.log("carid: " + rents[i]._car)
                    CarModel.findOne({ _id: rents[i]._car }, (err, car) => {
                        if (err) {
                            return next(err);
                        }
                        console.log("found car: " + car)
                        car.rentid = rents[i]._id
                        cars.push(car);
                        res.locals.rents = rents;
                        res.locals.cars = cars;
                        if(i ==  rents.length - 1){
                            return next();
                        }
                    });
                } 

            });
        }
        if(res.locals.user.userGroup == "user"){
            RentModel.find({_renter: res.locals.user.id}, (err, rents) => {
                if(err){
                    return next(err);
                }
                if(rents.length == 0){
                    res.locals.rents = [];
                    res.locals.cars = [];
                    next();
                    
                }
                let cars = [];
                for(let i = 0; i < rents.length; i++){
                    console.log("carid: " + rents[i]._car)
                    CarModel.findOne({ _id: rents[i]._car }, (err, car) => {
                        if (err) {
                            return next(err);
                        }
                        console.log("found car: " + car)
                        car.rentid = rents[i]._id

                        cars.push(car);
                        res.locals.rents = rents;
                        res.locals.cars = cars;
                        if(i ==  rents.length - 1 ){
                            return next();
                        }
                    });
                } 
                
               
            });
        }
    };
};

