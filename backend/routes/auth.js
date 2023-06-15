const express = require('express');
const router = express.Router();

const { signUp, signIn } = require('../controller/authController/auth.js');

router.post('/signUp', signUp); //instead of camel case url or router it should be just all lower case routes name eg. /signup  or /register

router.post('/signIn', signIn); //same rule as above eg. /signin or /login

module.exports = router;
