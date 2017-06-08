const express = require('express')
const app = express();
const cors = require('cors');

const authRouter = express.Router();
const apiRouter = express.Router();

const apiRoutes = require('./routes/api')
const authRoutes = require('./routes/auth')

var pgp = require('pg-promise')({ });

const pgConfig = {
  user: 'andrewnelson',
  password: 'bridge4',
  database: 'redit',
  port: '5432',
  host: 'localhost'
};

app.use(express.static(__dirname + '/web.browser/build'))


app.use(cors())

app.use('/api', apiRoutes(apiRouter))
app.use('/auth', authRoutes(authRouter))

//use CORS only on Development mode!
// process.env.NODE_ENV === 'Development' && app.use(cors())

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})

module.exports = pgp(pgConfig);

// app.get('/', function (req, res) {

//   db.query('SELECT * FROM posts')
//     .then(function (data) {
//       res.json(data);
//       console.log('DATA:', data)
//     })
//     .catch(function (error) {
//       console.log('bad')
//       console.log('ERROR:', error)
//     })
// })