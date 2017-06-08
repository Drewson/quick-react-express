const express = require('express')
const app = express();

var pgp = require('pg-promise')({ });

const pgConfig = {
  user: 'andrewnelson',
  password: 'bridge4',
  database: 'redit',
  port: '5432',
  host: 'localhost'
};

var db = pgp(pgConfig);

app.use(express.static(__dirname + '/react-express/build'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/somedata', (req, res) => {
  res.json({ message: 'hey this sajaxx'})
})

app.get('/', function (req, res) {

  db.one('SELECT * FROM posts WHERE id = 1')
    .then(function (data) {
      console.log('good')
      console.log('DATA:', data)
    })
    .catch(function (error) {
      console.log('bad')
      console.log('ERROR:', error)
    })
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')


})

