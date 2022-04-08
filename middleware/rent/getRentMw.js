const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    //id alapján rent lekérdezése
    return function(req, res, next) {
        res.locals.rent = {
            id: 1,
            user: { 
                id: "1",
                name: "felhasznalo",
            },
            car: {
                id: "2",
                name: "Renault",
                image: "https://autosportmotor.com/wp-content/uploads/2019/08/2019-blue-renault-kadjar-elegant.jpg",
                color: true
            }
        }
        next();
    };
};