const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    // addott user adatainak lekérdezése
    return function(req, res, next) {
        res.locals.user = {
            id: "1",
            name: "felhasznalo",
            password: "",
            email: "exmaple@gmail.com"
        }
        next();
    };
};