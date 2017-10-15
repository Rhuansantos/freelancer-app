const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


var User = mongoose.model('users');

module.exports = function(app) {
  app.use('/service', router);
  
}

router.get('/add', function(req, res, next) {

	var rhuan = new User({name: 'rhuan92', meta: {dob:new Date(1994,06,19)}});
	// save the user
	rhuan.save(function(err) {
		if (err) throw err;
	
		console.log('User created!');
	});
});



// find all users
router.get('/findAll', function(req, res, next) {
	User.find({}, function (err, users) {
        res.send(users);
    });
});