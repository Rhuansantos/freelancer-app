var mongoose = require('mongoose');
var mongoosastic = require("mongoosastic");

var userSchema = mongoose.Schema({
	name: {type: String, es_indexed:true},
	username: {type: String, require: true, unique: true},
	password: {type: String, require: [true, 'you must have a password']},
	meta: {
		dob: Date,
		website: String,
		location: {type: String, default: 'us'}
	},
	create_at: Date,
	update_at: Date
});

userSchema.pre('save', function(next){
	var currentDate = new Date();

	this.update_at = currentDate;

	if(!this.create_at) {
		this.create_at = currentDate;
	}
	next();
});


// ============= elastic search =============

userSchema.plugin(mongoosastic);


userSchema.plugin(mongoosastic,{  
	host:"localhost",
	port: 9200,
	// protocol: "https",
	// auth: "username:password"
  //  ,curlDebug: true
  });

//   userSchema.createMapping(function(err, mapping){  
// 	if(err){
// 	  console.log('error creating mapping (you can safely ignore this)');
// 	  console.log(err);
// 	}else{
// 	  console.log('mapping created!');
// 	  console.log(mapping);
// 	}
//   });


module.exports = mongoose.model('users', userSchema);
