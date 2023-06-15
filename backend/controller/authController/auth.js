require('dotenv').config();

const User = require('../../models/User/User.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_ACCESS_TOKEN = process.env.TOKEN_KEY;

function generateAuthToken(data) {
	const token = jwt.sign(data, JWT_ACCESS_TOKEN, { expiresIn: '10h' });
	return token;
}

module.exports.signIn = async (req, res) => {
	try {
		const { email, password } = req.body;
		let user = await User.findOne({ email });

		if (!user) {
			return res.json({
				success: true,
				status: 400,
				message: 'user does not exist with this email and password', //how about "this email does not exist or incorrect password" or just use ChatGPT instead to give you a nice error message
			});
		}

		// bcrypting the password and comparing with the one in db

		if (await bcrypt.compare(password, user.password)) {
			const token = generateAuthToken({
				_id: user?._id,
				email: email,
			});
			user.token = token;
			user.save();

			return res.json({
				success: true,
				status: 200,
				message: 'user Logged in',
				data: user,
			});
		}
		return res.json({
			success: false,
			status: 400,
			message: 'user credentials are not correct',
		});
	} catch (error) {
		return res.send(error.message);
	}
};

module.exports.signUp = async (req, res) => {
	try {
		const { email, password, username, password_confirmation } = req.body;

		// if any one of the field from email and password is not filled
		if (password != password_confirmation) {
			return res.status(422).json({
				success: false,
				message: 'Password mismatch',
			});
		}
		if (!email || !password || !username) {
			return res.json({
				success: false,
				message: 'email,username or password is empty',
			});
		} else {
			req.body.password = await bcrypt.hash(password, 10);

			let user = new User(req.body);
			await user.save();

			return res.json({
				success: true,
				message: 'user registered successfully',
				data: user,
			});
		}
	} catch (error) {
		return res.send(error.message);
	}
};

module.exports.updateUser = async (req, res) => {
	try {
		const userDataToBeUpdated = req.body;
		const { id } = req.query;
		const user = await User.findOne({ _id: id });

		if (!user) return res.send('user does not exist');

		let updatedUser = await User.findOneAndUpdate(
			{ _id: id },
			userDataToBeUpdated,
			{ new: true },
		);

		return res.json({
			success: true,
			message: 'user updated successfully',
			data: updatedUser,
		});
	} catch (error) {
		return res.send('error : ', error.message);
	}
};

module.exports.deleteUser = async (req, res) => {
	try {
		const { id } = req.query;

		const user = await User.findOne({ _id: id });
		if (!user) return res.status(200).send('user does not exist');

		await User.findOneAndDelete({ _id: id });

		return res.json({
			success: true,
			message: 'user deleted successfully',
		});
	} catch (error) {
		return res.status(400).send(error.message);
	}
};

module.exports.userById = async (req, res) => {
	try {
		const { id } = req.query;

		const user = await User.findOne({ _id: id });
		if (!user) return res.send('user does not exist');

		return res.json({
			success: true,
			message: 'user deleted successfully',
			data: user,
		});
	} catch (error) {
		return res.send('error : ', error.message);
	}
};

module.exports.resetPassword = async (req, res) => {
	try {
		const { password, newPassword } = req.body;
		const { id } = req.query;

		if (!password || !newPassword || !id)
			return res.send('Fields are empty');

		let user = await User.findOne({ _id: id });

		if (!user) return res.send('user does not exist');

		// comparing the password from the password in DB to allow changes
		if (bcrypt.compare(password, user?.password)) {
			// encrypting new password
			user.password = await bcrypt.hash(newPassword, 10);
			user.save();
			return res.json({
				success: true,
				message: 'password updated successfully',
			});
		}

		return res.json({
			success: false,
			message: 'wrong password',
		});
	} catch (error) {
		return res.send(error.message);
	}
};
