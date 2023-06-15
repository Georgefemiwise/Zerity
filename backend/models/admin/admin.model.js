const mongoose = require('mongoose');

// TODO you will need to update this schema to have more information about the admin user
// TODO name, email and password is not enough information

const AdminSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Username is required!'],
		},
		email: {
			type: String,
			required: [true, 'email is required should include @'],
		},
		password: {
			type: String,
			required: [true, 'password should be 8 character or more!'],
		},
	},
	{
		timestamp: true,
	},
);

module.exports = mongoose.model('admin', AdminSchema);
