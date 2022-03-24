const renderMW = require('../middleware/renderMW');

const objRepo = {
    
};
module.exports = function(app) {

    app.use('/', renderMW(objRepo,'index.html'));
}