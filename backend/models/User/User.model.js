const mongoose = require('mongoose');

// !same as this user
// TODO you will need to update this schema to have more information about the admin user
// TODO name, email and password is not enough information

const User = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamp: true,
	},
);

module.exports = mongoose.model('User', User);
