const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('permissive-cors');
const migration = require('./migration.js');
const bookRoutes = require('./Routes/bookRoutes')

console.log('Start migrations');
setTimeout(function () {
  migration.postgresMigration();
}, 3000);

app.use(cors());
app.use(bodyParser.json());

app.use('/books/', bookRoutes);
const server = app.listen(3000, function () {
  console.log('Backend running!');
});

