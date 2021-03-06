var mongoose = require('mongoose');

// mongoose.connect('mongodb://' + process.env.MONGO_HOST + '/' + process.env.MONGO_DATABASE);

mongoose.connect('mongodb://localhost/freelance-app');

var db = mongoose.connection;

db.on('error', function(err) {
	console.error(err)
})
db.once('open', function(){
	console.log('DATABASE CONNECTION');
})

mongoose.Promise = global.Promise;

module.exports = db;