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

const UserModel = require('../models/user');
const CarModel = require('../models/car');
const RentModel = require('../models/rent');

module.exports = function(app) {

    const objRepo = {
        UserModel: UserModel,
        CarModel: CarModel,
        RentModel: RentModel
    };

    
    app.use(
        '/login',
        checkPassMw(objRepo),
        renderMW(objRepo,'login.ejs')
    )

 
    //Car interactions
    app.use(
        '/car/new',
        authMw(objRepo),
        saveCarMw(objRepo),
        renderMW(objRepo, 'newcar.ejs')
    )

    app.use(
        '/car/del/:carid',
        authMw(objRepo),
        getCarMw(objRepo),
        deleteCarMw(objRepo)
    )

    

    app.use(
        '/car/edit/:carid',
        authMw(objRepo),
        getCarMw(objRepo),
        saveCarMw(objRepo),
        renderMW(objRepo, 'newcar.ejs')    
    )

    app.use(
        '/car/:carid',
        authMw(objRepo),
        getCarMw(objRepo),
        renderMW(objRepo, 'car.ejs')
    )

    

    //Rent interactions

    app.use(
        '/rents',
        authMw(objRepo),
        getUserMw(objRepo),
        getRentMw(objRepo),
        renderMW(objRepo, 'rents.ejs')
    )

    app.use(
        '/rent/new/:carid',
        authMw(objRepo),
        getUserMw(objRepo),
        getCarMw(objRepo),
        saveRentMw(objRepo),
        getRentMw(objRepo),
        renderMW(objRepo, 'rents.ejs')
    )

    app.use(
        '/rent/del/:rentid',
        authMw(objRepo),
        delRentMw(objRepo),
        renderMW(objRepo, 'rents.ejs')
    )

    //user interactions

    app.use(
        '/register',
        newUserMw(objRepo),
        renderMW(objRepo, 'register.ejs')
    )

    

    app.use(
        '/logout',
        logoutMw(objRepo),
        renderMW(objRepo,'login.ejs')
    )

    app.use(
        '/profile',
        authMw(objRepo),
        getUserMw(objRepo),
        renderMW(objRepo, 'profile.ejs')
    )

    app.use(
        '/update/user',
        authMw(objRepo),
        getUserMw(objRepo),
        updateUserMW(objRepo),
        renderMW(objRepo, 'profile.ejs')
    )

    app.use(
        '/users',
        authMw(objRepo),
        getUserMw(objRepo),
        renderMW(objRepo, 'users.ejs')
    )

    app.use(
        '/logout',
        logoutMw(objRepo)
    )

    app.use(
        '/',
        authMw(objRepo),
        getCarsMw(objRepo),
        renderMW(objRepo, 'index.ejs')
    )   
}