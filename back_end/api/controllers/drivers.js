// importuję model kierowcy
const Driver = require('../models/driver');

exports.drivers_get_all = (req, res, next) => {
    Book.find()
      .then((result) => {
        res.status(200).json({
          wiadomosc: 'Lista wszystkich książek',
          info: result,
        });
      })
      .catch((err) => res.status(500).json(err));
  };

exports.drivers_add_new = (req, res, next) => {
  const driver = new Driver({
    name: req.body.name,
    team: req.body.team,
    wins: req.body.wins,
  });
  driver
    .save()
    .then((result) => {
      res.status(201).json({
        wiadomosc: 'Dodanie nowego kierwocy',
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.drivers_get_by_id = (req, res, next) => {
  const id = req.params.driverId;
  Driver.findById(id)
    .then((result) => {
      res.status(200).json({
        wiadomosc: 'Szczegóły o kierowcy o numerze ' + id,
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.drivers_change = (req, res, next) => {
  const id = req.params.driverId;
  Driver.findByIdAndUpdate(id, {
    name: req.body.name,
    team: req.body.team,
    wins: req.body.wins,
  })
    .then(() => {
      res
        .status(200)
        .json({ wiadomosc: 'Zmienono dane kierowcy o numerze ' + id });
    })
    .catch((err) => res.status(500).json(err));
};

exports.drivers_delete = (req, res, next) => {
  const id = req.params.driverId;
  Driver.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ wiadomosc: 'Usunięto kierowce o numerze ' + id });
    })
    .catch((err) => res.status(500).json(err));
};