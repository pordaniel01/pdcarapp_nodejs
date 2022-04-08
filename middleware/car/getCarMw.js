const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if(req.params.carid == 1){
            res.locals.car = {
                id: "1",
                name: "Toyota",
                image: "https://media.istockphoto.com/photos/toyota-yaris-fl-at-the-international-press-launch-picture-id503260563?k=20&m=503260563&s=612x612&w=0&h=Fh1LazZCIfObBpd4pSrez-d9fEr5icAp8XWyWfVk2s4=",
                color: "red",
                details: "I'm car."
            }
        }
        if(req.params.carid == 2){
            res.locals.car = {
                id: "2",
                name: "Reanult",
                image: "https://autosportmotor.com/wp-content/uploads/2019/08/2019-blue-renault-kadjar-elegant.jpg",
                color: "blue",
                details: "Is a car definetly"
            }
        }
        next();
    };
};