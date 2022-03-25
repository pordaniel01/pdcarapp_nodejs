const renderMW = require('../middleware/renderMW');
const checkPassMw = require('../middleware/auth/checkPassMw');
const authMw = require('../middleware/auth/authMw')

const getCarsMw = require('../middleware/car/getCarsMw')
const getCarMw = require('../middleware/car/getCarMw')
const saveCarMw = require('../middleware/car/saveCarMw')
const deleteCarMw = require('../middleware/car/deleteCarMw')


const getRentMw = require('../middleware/rent/getRentMw')
const delRentMw = require('../middleware/rent/delRentMw')
const saveRentMw = require('../middleware/rent/saveRent')

const delUserMw = require('../middleware/user/deleteUserMw')
const getUserMw = require('../middleware/user/getUserMw')
const newUserMw = require('../middleware/user/newUserMw')
const updateUserMW = require('../middleware/user/updateUserMw');
const logoutMw = require('../middleware/auth/logoutMw');


const objRepo = {
    
};
module.exports = function(app) {

    const objRepo = {
        
    };

    app.use(
        '/',
        authMw(objRepo),
        getCarsMw(objRepo),
        renderMW(objRepo, 'index.html')
    )

    //Car interactions

    app.use(
        '/car/:carid',
        authMw(objRepo),
        getCarMw(objRepo),
        renderMW(objRepo, 'car.html')
    )

    app.use(
        '/car/new',
        authMw(objRepo),
        saveCarMw(objRepo),
        renderMW(objRepo, 'newcar.html')
    )

    app.use(
        '/car/edit/:carid',
        authMw(objRepo),
        getCarMw(objRepo),
        saveCarMw(objRepo),
        renderMW(objRepo, 'newcar.html')    
    )

    //Rent interactions

    app.use(
        '/rents',
        authMw(objRepo),
        getUserMw(objRepo),
        getRentMw(objRepo),
        renderMW(objRepo, 'rents.html')
    )

    app.use(
        '/rent/new/:carid',
        authMw(objRepo),
        getUserMw(objRepo),
        getCarMw(objRepo),
        saveRentMw(objRepo)
    )

    app.use(
        '/rent/del/:rentid',
        authMw(objRepo),
        delRentMw(objRepo)
    )

    //user interactions

    app.use(
        '/register',
        newUserMw(objRepo),
        renderMW(objRepo, 'register.html')
    )

    app.use(
        '/login',
        checkPassMw(objRepo),
        renderMW(objRepo,'login.html')
    )

    app.use(
        '/logout',
        logoutMw(objRepo)
    )

    app.use(
        '/update/user',
        authMw(objRepo),
        getUserMw(objRepo),
        renderMW(objRepo, 'profile.html')
    )

    app.use(
        '/users',
        authMw(objRepo),
        getUserMw(objRepo),
        renderMW(objRepo, 'users.html')
    )

    app.use(
        '/logout',
        logoutMw(objRepo)
    )

    
}