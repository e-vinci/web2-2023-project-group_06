/* eslint-disable max-len */
/* eslint-disable no-console */
const jwt = require('jsonwebtoken');

const jwtSecret = 'ilovebooks!';

function checkTokenValidity(token) {
  try {
    console.log('models begin');

    console.log(`models token : ${token}`);
    const decoded = jwt.verify(token, jwtSecret);
    console.log('token decripted ? : ', jwt.verify(token, jwtSecret));
    console.log('Decoded Payload:', decoded);
    console.log('models decoded.exp : ', decoded.exp);

    if (decoded.exp === null) {
      console.log('Token does not have an expiration time.');
      return true;
    }

    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    console.log(`models currentTimeInSeconds : ${currentTimeInSeconds}`);
    console.log('models end');

    return currentTimeInSeconds < decoded.exp;
  } catch (error) {
    return false; // Token is invalid or expired
  }
}

module.exports = { checkTokenValidity };

/*
the payload contains this :
  {
    "userName": "s.d@vinci.be",
    "hashedPassword": "$2a$10$EjatwHeWXjlLk/TfJEE.ieP6v54EMqeQyVeox4Xvax6nV9WJShcRa",
    "iat": 1702785098
  }
*/
