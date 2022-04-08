const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //összes autó lekérdezése
    return function(req, res, next) {
        res.locals.cars = [
            {
                id: "1",
                name: "Toyota",
                image: "https://media.istockphoto.com/photos/toyota-yaris-fl-at-the-international-press-launch-picture-id503260563?k=20&m=503260563&s=612x612&w=0&h=Fh1LazZCIfObBpd4pSrez-d9fEr5icAp8XWyWfVk2s4=",
                color: "red"
            },
            {
                id: "2",
                name: "Renault",
                image: "https://autosportmotor.com/wp-content/uploads/2019/08/2019-blue-renault-kadjar-elegant.jpg",
                color: "blue"
            },
        ];
        next();
    };
};