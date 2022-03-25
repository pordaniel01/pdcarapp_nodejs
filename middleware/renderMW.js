const requireOption = require('./requireOption');
const path = require('path');
const { nextTick } = require('process');

module.exports = function(objectrepository, viewName) {
    var options = {
        root: path.join(__dirname + "/../views")
    };

    return function(req, res) {
        console.log("renderMw works!")
        res.sendFile(viewName, options);
    };
};