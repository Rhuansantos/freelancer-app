const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

module.exports = function(app) {
  app.use('/service', router);
  
}

// router.get('/', function(req, res, next) {
//   res.send('hello world');
// });

router.get('/', function(req, res, next){
	var User = mongoose.model('users');

	var rhuan = new User({name: 'rhuan', meta: {dob:new Date(1994,06,19)}});

	console.log(rhuan.getAge());

	rhuan.validate(function(err){
		console.log(err);
	})
});
