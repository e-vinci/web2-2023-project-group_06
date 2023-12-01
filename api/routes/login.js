/* eslint-disable no-console */
const express = require('express');

const readAllBooks = require('../models/books');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allBooks = await readAllBooks();
    return res.json(allBooks);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});
router.post('/login', (req, res) => {
  // eslint-disable-next-line quotes
  console.log("USERS LOGIN");
  // const email = req.body.userEmail;
  const { userLogin } = req.body;
  console.log(`HERE it s the userLogin : ${userLogin}`);
  // User in DB ? -> return the record of the user if found
  const userFound = User.search(userLogin);
  // otherErrors = [];
  console.log(`User found${JSON.stringify(userFound)}`);
  // req.session.user_id = userFound.user_id;
  // console.log("HERE it s the req.session.user_id : " + req.session.user_id);
  // if (!User.find(email)) {
  //     console.log("user email does not exist in DB");
  //     otherErrors.push({ msg: " this email does not exist in DB ! " });
  //     res.render('login/index', { errors: otherErrors });
  // }
  if (userFound !== undefined) {
    if (bcrypt.compareSync(req.body.userPassword, userFound.password)) {
      console.log('password correct');
      req.session.user = userFound;
      req.session.user_id = userFound.user_id;
      console.log(`HERE it s the req.session.user_id : ${req.session.user_id}`);
      if (userFound.isAdmin === 1) {
        req.session.isAdmin = true;
      }
      // req.session.user = user
      // req.session.userLogin = req.body.email
      // req.session.connected = true
      // req.session.admin =
      res.redirect('/');
    } else {
      console.log('bad password');
      req.session.error = 'The password is incorrect';
      res.redirect('/login');
    }
  } else {
    req.session.error = 'This email address is not in the DB';
    // res.render('login/index');
    res.redirect('/login');
  }
});
module.exports = router;
