const jwt = require('jsonwebtoken');

exports.createJWT = (userId, email, duration) => {
	const payload = {
		email,
		userId,
		duration,
	};
	return jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {
		expiresIn: duration,
	});
};
