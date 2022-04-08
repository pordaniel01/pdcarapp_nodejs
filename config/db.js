const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cars', { useNewUrlParser: true });

module.exports = mongoose;