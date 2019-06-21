const express = require('express');
const db = require('./models');

const app = express();
app.use(express.urlencoded({extended: false}));

// read all records route
app.get('/cars', function(req, res) {
  db.car.findAll().then(function(cars) {
    res.json(cars);
  });
  //res.send('Everything works');
});

// read one record route 
app.get('/cars/:id', function(req, res) {
  db.car.findOne({
    where: {id: parseInt(req.params.id)}
  }).then(function(car) {
    res.json(car);
  });
});

// create one record route 
app.post('/cars', function(req, res) {
  db.car.create({
    make: req.body.make,
    model: req.body.model,
    year: parseInt(req.body.year),
    engine: req.body.engine
  }).then(function(data) {
    console.log(data);
    res.json(data);
  })
});

// update one record route
app.put('/cars/:id', function(req, res) {
  db.car.update({
    make: req.body.make,
    model: req.body.model,
    year: parseInt(req.body.year),
    engine: req.body.engine
  }, {
    where: {id: parseInt(req.params.id)}
  }).then(function(count) {
    res.json(data);
  });
});

// delete one record route
app.delete('/cars/:id', function(req, res) {
  db.car.destroy({
    where: {id: parseInt(req.params.id)}
  }).then(function(data) {
    res.json(data);
  });
});

app.listen(3000, function() {
  console.log("Listening on port 3000")
});



// make your model name and fields and data types XXX
// run migrations XXXX










