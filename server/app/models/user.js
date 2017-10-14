var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
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

userSchema.methods.getAge = function() {
	console.log('fasfsa');
	
};

module.exports = mongoose.model('User', userSchema);
