/* eslint-disable no-console */
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

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
const profilePageRoute = require('./routes/profilePage');

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
app.use('/profilePage', profilePageRoute);

module.exports = app;
