/* eslint-disable no-console */
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const loginUser = require('./models/login');

const corsOptions = {
  origin: ['http://localhost:8070', 'https://e-baron.github.io'],
};

const usersRouter = require('./routes/users');
const pizzaRouter = require('./routes/pizzas');
const authsRouter = require('./routes/auths');
const booksRouter = require('./routes/books');
const listUsersRoute = require('./routes/listUsers');
const loginRoute = require('./routes/login');
const swipeRoute = require('./routes/swipes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/pizzas', pizzaRouter);
app.use('/auths', authsRouter);
app.use('/books', cors(corsOptions), booksRouter);
app.use('/listUsers', cors(corsOptions), listUsersRoute);
app.use('/login', loginRoute);
app.use('/swipe', swipeRoute);

// Indique à Express de servir les fichiers statiques du répertoire 'public'
app.use('/public', express.static(path.join(__dirname, 'public')));

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Call your loginUser function to check the credentials
    const userFound = await loginUser(email, password);

    if (userFound.length > 0) {
      // User authentication successful
      req.session.user = userFound;
      req.session.user_id = userFound[0].user_id;
      res.status(200).json(userFound);
    } else {
      // User authentication failed
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
