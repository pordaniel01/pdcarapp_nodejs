const requireOption = require('./requireOption');
const path = require('path');
const { nextTick } = require('process');

module.exports = function(objectrepository, viewName) {
    return function(req, res) {
        res.render(viewName);
    };
};