// importuję expresa
const express = require('express');

// importuję zmienne środowiskowe
require('dotenv').config();

// tworzę instancję expresa
const app = express();

//połączenie z bazą danych
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ag8pnov.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);

// logger
const morgan = require('morgan');
app.use(morgan('combined'));

// parsuję body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// routy
const driversRoutes = require('./api/routes/drivers');
app.use('/drivers', driversRoutes);

const usersRoutes = require('./api/routes/users');
app.use('/users', usersRoutes);

app.use((req, res, next) => {
    res.status(404).json({ wiadomosc: 'Nie znaleziono' });
});

  module.exports = app;