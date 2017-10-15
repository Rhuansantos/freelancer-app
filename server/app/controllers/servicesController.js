const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


var User = mongoose.model('users');

module.exports = function(app) {
  app.use('/service', router);
  
}

router.get('/add', function(req, res, next) {

	var rhuan = new User({name: 'vivi', meta: {dob:new Date(1994,06,19)}});
	// save the user
	rhuan.save(function(err) {
		if (err) throw err;
	
		res.send('User created!');
	});
});


router.get('/search', function(req, res, next){

	// User.search({ query:'vivi' }, function(err,results) {  
	// 	console.log(results);
	// 	res.send(results);
	// });
	// User.search({
	// 	query_string: {
	// 	  query: ""
	// 	}
	//   }, function(err, results) {
	// 	// results here

	// 	console.log(results);
	// 	res.send(results);
	//   });

// 	var terms = 'rhuan';

// 	User.search({ query_string: { query:terms } }, function(err,results) {
// 		console.log(results);
// 		res.render("home", { terms:terms, books:results.hits.hits })
// 	  });
	res.render("home");
});

router.post("/esearch/", function(req,res) {
	var terms=req.body.terms;
	User.search({ query_string: { query:terms } }, function(err,results) {
		console.log(results);
	  res.render("home", { terms:terms, books:results.hits.hits })
	});
  });



// find all users
router.get('/findAll', function(req, res, next) {
	User.find({}, function (err, users) {
        res.send(users);
    });
});